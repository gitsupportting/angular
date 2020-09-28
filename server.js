// @ts-nocheck
/**
 * @fileoverview Backend Server for Angular App
 */

const config = require('config');
const express = require('express');
const session = require('express-session');
const expressWinston = require('express-winston');
const { resolve } = require('path');
const { authHelpers } = require('@two-hat-engineering/shared-libs-node');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const superagent = require('superagent');
const { get, has } = require('lodash');

const FLAG_DISABLE_SSO = process.env.DISABLE_SSO === 'true' || process.argv[2] === '--disable-sso';

const app = express();
app.set('trust proxy', 1);
// TODO @shane.lawrence See if logger throwing errors was a transient thing or if I broke something somewhere
const logger = console;// loggingHelpers.install('rule-audit-app');

const csp = config
  .get('contentSecurityPolicy')
  .replace('${ENVIRONMENT}', process.env.NODE_ENV)
  .trim();

// Apply Content-Security-Policy
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy-Report-Only', csp);
  next();
})

app.set('view engine', 'html');
app.set('views', resolve(__dirname, 'dist', 'rule-audit-app'));

app.use(expressWinston.logger({ winstonInstance: logger }));

// Status endpoint
app.get(/api\/(v1|v2)\/status/, (req, res) => res.status(200).json({ status: 'ok' }));

// Auth
enableSSO();

// Static assets
app.use(express.static(resolve(__dirname, 'dist')));

// Proxy API requests to their related backends
// More Info: at /docs/AUTHENTICATION.md

// Rules API backend
// (/api/v2/rules/*)
app.all('/api/v2/rules/?*', express.json({}), (req, res, next) => {
  try {
    proxyToBackend(config.get('sift.rulesApi.url'), req, res);
  } catch (error) {
    return next(error);
  }
});

// Content Logs API
// (/api/v2/content/*)
app.all('/api/v2/content/?*', express.json({}), (req, res, next) => {
  try {
    proxyToBackend(config.get('sift.contentLogsApi.url'), req, res);
  } catch (error) {
    return next(error);
  }
})

// Fall through all other requests to Inbox API
// (/api/v2/*) -- /api/v1 requests are deprecated and should be updated to v2
app.all('/api/v2/*', express.json({}), (req, res, next) => {
  try {
    proxyToBackend(config.get('sift.inboxApi.url'), req, res);
  } catch (error) {
    return next(error);
  }
})

// Serve index.html on all other requests
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});

// Error handler
app.use((error, req, res, next) => { // eslint-disable-line
  console.error(error); // eslint-disable-line
  return res
    .status(get(error, 'response.status', 500))
    .json({
      error: get(error, 'response.data.message', error.message)
    });
})

module.exports = app;

/////

function enableSSO () {
  
  // See if we're in a state where SSO should be disabled.
  if (shouldDisableSSO()) {

    // Return a dummy user on the /me endpoint
    app.get('/me', (req, res) => {

      res
        .status(200)
        .json({
          config: {
            allowedClients: [60],
            allowedLanguages: ['en']
          },
          displayName: 'Developer User',
          email: 'user@example.com',
          moderatorId: 'user@example.com',
          name: {
            givenName: 'Developer',
            familyName: 'User'
          },
          provider: 'dev'
        });

    });

    // Bail out
    return;
  }

  let redisParams = {};

  if (config.has('db.redis.connectionString')) {
    redisParams = { url: config.get('db.redis.connectionString') };
  
  } else if (config.has('db.redis')) {
    /** @deprecated */
    redisParams = { ...config.get('db.redis') };
  
  } else if (config.has('redis')) {
    /** @deprecated */
    redisParams = {
      host: config.get('db.redis.host'),
      port: config.get('db.redis.port'),
      auth_pass: config.get('db.redis.password')
    }
  }
  
  redisParams.db = 2;
  
  const redisClient = redis.createClient(redisParams);
  
  redisClient.on('ready', logger.info);
  redisClient.on('connect', logger.info);
  redisClient.on('disconnect', logger.warn);
  redisClient.on('end', logger.warn);

  authHelpers.install(app, {
    audience: config.get('sso.audience'),
    issuer: (() => {
  
      // Test the URL to see if it's a GitLab Review App
      const reviewAppUrlRegExp = /^https?:\/\/(\d{7,10}-(\w{4}-\w{3}-)?review-.*)$/;
  
      // If this is a review app, use its hostname as the issuer
      if (
        'GITLAB_ENVIRONMENT_URL' in process.env
        && reviewAppUrlRegExp.test(process.env.GITLAB_ENVIRONMENT_URL)
      ) {
        return process.env.GITLAB_ENVIRONMENT_URL.replace(reviewAppUrlRegExp, '$1');
      }
  
      // Try returning the issuer from the SSO config
      if (config.has('sso.issuer')) return config.get('sso.issuer');
      
      // Otherwise, return localhost:port
      return `localhost:${config.get('port')}`
  
    })(),
    signingKey: config.get('sso.signingKey'),
    loginUrl: config.get('sso.loginUrl'),
    logoutUrl: config.get('sso.logoutUrl'),
    validateUrl: config.get('sso.validateUrl'),
    privateUrl: config.get('sso.privateUrl'),
    unprotectedPaths: [
      '/status',
      '/api/v1/status',
      '/api/v2/status'
    ],
    sessionStore: session({
      store: new RedisStore({
        ttl: 60 * 60,
        client: redisClient
      }),
      secret: config.get('session.secret'),
      resave: false,
      rolling: true,
      saveUninitialized: false,
      unset: 'destroy'
    }),
    logger
  });

}

/**
 * See if the app is in a state where SSO shouldn't be enabled.
 */
function shouldDisableSSO () {

  if (!FLAG_DISABLE_SSO) return false;

  if (
    // Dev mode with saved API key
    process.env.NODE_ENV !== 'production' &&
    config.get('dev.apiKey') !== 'DEFAULT_DO_NOT_CHANGE_ME'
  ) {

    logger.warn([
      '⚠ SSO IS DISABLED.',
      '⚠ THIS IS A MUCH LESS SECURE WAY TO RUN THE APP.',
      `⚠ All backend API requests will use the API key starting with ${config.get('dev.apiKey').toString().substr(0,3)}...`
    ].join('\n'));
    return true;
  
  } else if (
    // Dev mode without saved API key
    process.env.NODE_ENV !== 'production' &&
    config.get('dev.apiKey') === 'DEFAULT_DO_NOT_CHANGE_ME'
  ) {
    
    logger.warn('⚠ SSO IS DISABLED BUT YOUR CONFIG IS MISSING dev.apiKey.\n⚠ REQUESTS TO API ENDPOINTS WILL PROBABLY FAIL.');
    return true;

  } else if (
    // Non-dev mode
    process.env.NODE_ENV === 'production'
  ) {

    logger.warn('⚠ SSO CAN\'T BE DISABLED WHEN IN PRODUCTION MODE');
    return false;

  }

  return false;

}

async function proxyToBackend (apiBaseUrl, req, res, path) {

  // Determine which API key to use
  let apiKey;
  
  // User session has one
  if (has(req, 'user.apiKey')) apiKey = req.user.apiKey;
  
  // Running in dev mode and there's a key in the config
  if (process.env.NODE_ENV === 'development' && config.has('dev.apiKey')) apiKey = config.get('dev.apiKey');

  // Build the request headers
  const headers = { ...req.headers };
  if (apiKey) headers.authorization = `Bearer ${apiKey}`;
  headers['cache-control'] = 'no-store';
  headers['host'] = new URL(apiBaseUrl).host;
  delete headers.cookie;

  // Build the target URL
  const targetUrl = `${apiBaseUrl}${path || req.path}`;

  superagent(
    req.method,
    targetUrl,
  )
    .buffer(true)
    .query(req.query)
    .send(req.body)
    .set(headers)
    .end((err, response) => {
      if (err) {
        const body = get(err, 'response.body', { error: err.message });
        const status = get(err, 'response.status', (err.status || 500));
        return res.status(status).json(body);
      }
      res.status(response.status).json(response.body);
    });

}