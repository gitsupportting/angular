import {
  __extends,
  __values
} from 'tslib';
import {
  InjectionToken,
  ɵɵinject,
  ɵɵdefineInjectable,
  ɵsetClassMetadata,
  Injectable,
  Optional,
  Inject,
  ɵɵdefineNgModule,
  ɵɵdefineInjector,
  NgModule,
  SkipSelf
} from '@angular/core';
import {
  HttpUrlEncodingCodec,
  HttpHeaders,
  HttpParams,
  HttpClient
} from '@angular/common/http';

/**
 * CustomHttpUrlEncodingCodec
 * Fix plus sign (+) not encoding, so sent as blank space
 * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
 */
var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
  __extends(CustomHttpUrlEncodingCodec, _super);

  function CustomHttpUrlEncodingCodec() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
    k = _super.prototype.encodeKey.call(this, k);
    return k.replace(/\+/gi, '%2B');
  };
  CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
    v = _super.prototype.encodeValue.call(this, v);
    return v.replace(/\+/gi, '%2B');
  };
  return CustomHttpUrlEncodingCodec;
}(HttpUrlEncodingCodec));

var BASE_PATH = new InjectionToken('basePath');
var COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
};

var Configuration = /** @class */ (function () {
  function Configuration(configurationParameters) {
    if (configurationParameters === void 0) {
      configurationParameters = {};
    }
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  Configuration.prototype.selectHeaderContentType = function (contentTypes) {
    var _this = this;
    if (contentTypes.length == 0) {
      return undefined;
    }
    var type = contentTypes.find(function (x) {
      return _this.isJsonMime(x);
    });
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  };
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  Configuration.prototype.selectHeaderAccept = function (accepts) {
    var _this = this;
    if (accepts.length == 0) {
      return undefined;
    }
    var type = accepts.find(function (x) {
      return _this.isJsonMime(x);
    });
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  };
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  Configuration.prototype.isJsonMime = function (mime) {
    var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  };
  return Configuration;
}());

var DefaultService = /** @class */ (function () {
  function DefaultService(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://virtserver.swaggerhub.com/twohat/rules/2.0.3';
    this.defaultHeaders = new HttpHeaders();
    this.configuration = new Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  DefaultService.prototype.canConsumeForm = function (consumes) {
    var e_1, _a;
    var form = 'multipart/form-data';
    try {
      for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
        var consume = consumes_1_1.value;
        if (form === consume) {
          return true;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return false;
  };
  DefaultService.prototype.addComment = function (language, text, body, clientId, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling addComment.');
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling addComment.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [
      'application/json'
    ];
    var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/comments", {
      body: body,
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.deleteAlternateSense = function (text, language, dependency, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling deleteAlternateSense.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling deleteAlternateSense.');
    }
    if (dependency === null || dependency === undefined) {
      throw new Error('Required parameter dependency was null or undefined when calling deleteAlternateSense.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('delete', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/alt_senses/" + encodeURIComponent(String(dependency)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.deleteAlternateSpelling = function (text, language, dependency, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling deleteAlternateSpelling.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling deleteAlternateSpelling.');
    }
    if (dependency === null || dependency === undefined) {
      throw new Error('Required parameter dependency was null or undefined when calling deleteAlternateSpelling.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('delete', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/alt_spellings/" + encodeURIComponent(String(dependency)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.deleteComment = function (text, language, commentId, clientId, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling deleteComment.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling deleteComment.');
    }
    if (commentId === null || commentId === undefined) {
      throw new Error('Required parameter commentId was null or undefined when calling deleteComment.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('delete', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/comments/" + encodeURIComponent(String(commentId)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.deleteFlag = function (text, language, flag, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling deleteFlag.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling deleteFlag.');
    }
    if (flag === null || flag === undefined) {
      throw new Error('Required parameter flag was null or undefined when calling deleteFlag.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('delete', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/flags/" + encodeURIComponent(String(flag)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.deleteLeetMapping = function (text, language, dependency, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling deleteLeetMapping.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling deleteLeetMapping.');
    }
    if (dependency === null || dependency === undefined) {
      throw new Error('Required parameter dependency was null or undefined when calling deleteLeetMapping.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('delete', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/leet_mappings/" + encodeURIComponent(String(dependency)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.deleteRule = function (text, language, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling deleteRule.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling deleteRule.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('delete', this.basePath + "/rules/text/" + encodeURIComponent(String(text)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.deleteTopic = function (text, language, topicId, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling deleteTopic.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling deleteTopic.');
    }
    if (topicId === null || topicId === undefined) {
      throw new Error('Required parameter topicId was null or undefined when calling deleteTopic.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('delete', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/topic/" + encodeURIComponent(String(topicId)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.getAutocomplete = function (prefix, clientIds, languages, limit, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (prefix === null || prefix === undefined) {
      throw new Error('Required parameter prefix was null or undefined when calling getAutocomplete.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (clientIds) {
      clientIds.forEach(function (element) {
        queryParameters = queryParameters.append('clientIds', element);
      });
    }
    if (languages) {
      languages.forEach(function (element) {
        queryParameters = queryParameters.append('languages', element);
      });
    }
    if (limit !== undefined && limit !== null) {
      queryParameters = queryParameters.set('limit', limit);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('get', this.basePath + "/rules/autocomplete/" + encodeURIComponent(String(prefix)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.getComment = function (text, language, commentId, clientId, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling getComment.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling getComment.');
    }
    if (commentId === null || commentId === undefined) {
      throw new Error('Required parameter commentId was null or undefined when calling getComment.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('get', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/comments/" + encodeURIComponent(String(commentId)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.getRule = function (text, language, clientId, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling getRule.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling getRule.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('get', this.basePath + "/rules/text/" + encodeURIComponent(String(text)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.getRuleHistory = function (text, languages, clientIds, limit, offset, refresh, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling getRuleHistory.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (languages) {
      languages.forEach(function (element) {
        queryParameters = queryParameters.append('languages', element);
      });
    }
    if (clientIds) {
      queryParameters = queryParameters.set('clientIds', clientIds.join(COLLECTION_FORMATS['csv']));
    }
    if (limit !== undefined && limit !== null) {
      queryParameters = queryParameters.set('limit', limit);
    }
    if (offset !== undefined && offset !== null) {
      queryParameters = queryParameters.set('offset', offset);
    }
    if (refresh !== undefined && refresh !== null) {
      queryParameters = queryParameters.set('refresh', refresh);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('get', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/changelog", {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.getRules = function (ai, doneByModeratorId, clientIds, endDate, startDate, lastChangedStartDate, lastChangedEndDate, deleted, publishedStartDate, publishedEndDate, languages, limit, offset, altSense, altSpelling, leetMapping, taskId, tags, text, topics, unresolvedComments, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (ai) {
      ai.forEach(function (element) {
        queryParameters = queryParameters.append('ai', element);
      });
    }
    if (doneByModeratorId !== undefined && doneByModeratorId !== null) {
      queryParameters = queryParameters.set('doneByModeratorId', doneByModeratorId);
    }
    if (clientIds) {
      clientIds.forEach(function (element) {
        queryParameters = queryParameters.append('clientIds', element);
      });
    }
    if (endDate !== undefined && endDate !== null) {
      queryParameters = queryParameters.set('endDate', endDate);
    }
    if (startDate !== undefined && startDate !== null) {
      queryParameters = queryParameters.set('startDate', startDate);
    }
    if (lastChangedStartDate !== undefined && lastChangedStartDate !== null) {
      queryParameters = queryParameters.set('lastChangedStartDate', lastChangedStartDate);
    }
    if (lastChangedEndDate !== undefined && lastChangedEndDate !== null) {
      queryParameters = queryParameters.set('lastChangedEndDate', lastChangedEndDate);
    }
    if (deleted !== undefined && deleted !== null) {
      queryParameters = queryParameters.set('deleted', deleted);
    }
    if (publishedStartDate !== undefined && publishedStartDate !== null) {
      queryParameters = queryParameters.set('publishedStartDate', publishedStartDate);
    }
    if (publishedEndDate !== undefined && publishedEndDate !== null) {
      queryParameters = queryParameters.set('publishedEndDate', publishedEndDate);
    }
    if (languages) {
      languages.forEach(function (element) {
        queryParameters = queryParameters.append('languages', element);
      });
    }
    if (limit !== undefined && limit !== null) {
      queryParameters = queryParameters.set('limit', limit);
    }
    if (offset !== undefined && offset !== null) {
      queryParameters = queryParameters.set('offset', offset);
    }
    if (altSense !== undefined && altSense !== null) {
      queryParameters = queryParameters.set('altSense', altSense);
    }
    if (altSpelling !== undefined && altSpelling !== null) {
      queryParameters = queryParameters.set('altSpelling', altSpelling);
    }
    if (leetMapping !== undefined && leetMapping !== null) {
      queryParameters = queryParameters.set('leetMapping', leetMapping);
    }
    if (taskId !== undefined && taskId !== null) {
      queryParameters = queryParameters.set('taskId', taskId);
    }
    if (tags) {
      queryParameters = queryParameters.set('tags', tags.join(COLLECTION_FORMATS['csv']));
    }
    if (text !== undefined && text !== null) {
      queryParameters = queryParameters.set('text', text);
    }
    if (topics) {
      topics.forEach(function (element) {
        queryParameters = queryParameters.append('topics', element);
      });
    }
    if (unresolvedComments !== undefined && unresolvedComments !== null) {
      queryParameters = queryParameters.set('unresolvedComments', unresolvedComments);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('get', this.basePath + "/rules", {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.listComments = function (text, language, clientId, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling listComments.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling listComments.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('get', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/comments", {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.resolveComment = function (language, text, commentId, body, clientId, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling resolveComment.');
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling resolveComment.');
    }
    if (commentId === null || commentId === undefined) {
      throw new Error('Required parameter commentId was null or undefined when calling resolveComment.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [
      'application/json'
    ];
    var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/comments/" + encodeURIComponent(String(commentId)) + "/resolved", {
      body: body,
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.testRules = function (body, examplesPerRule, clientIds, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (examplesPerRule !== undefined && examplesPerRule !== null) {
      queryParameters = queryParameters.set('examplesPerRule', examplesPerRule);
    }
    if (clientIds) {
      clientIds.forEach(function (element) {
        queryParameters = queryParameters.append('clientIds', element);
      });
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [
      'application/json'
    ];
    var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', this.basePath + "/rules/test", {
      body: body,
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.updateAlternateSense = function (text, language, dependency, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling updateAlternateSense.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling updateAlternateSense.');
    }
    if (dependency === null || dependency === undefined) {
      throw new Error('Required parameter dependency was null or undefined when calling updateAlternateSense.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('put', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/alt_senses/" + encodeURIComponent(String(dependency)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.updateAlternateSpelling = function (text, language, dependency, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling updateAlternateSpelling.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling updateAlternateSpelling.');
    }
    if (dependency === null || dependency === undefined) {
      throw new Error('Required parameter dependency was null or undefined when calling updateAlternateSpelling.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('put', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/alt_spellings/" + encodeURIComponent(String(dependency)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.updateComment = function (language, text, commentId, body, clientId, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling updateComment.');
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling updateComment.');
    }
    if (commentId === null || commentId === undefined) {
      throw new Error('Required parameter commentId was null or undefined when calling updateComment.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [
      'application/json'
    ];
    var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/comments/" + encodeURIComponent(String(commentId)), {
      body: body,
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.updateFlag = function (text, language, flag, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling updateFlag.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling updateFlag.');
    }
    if (flag === null || flag === undefined) {
      throw new Error('Required parameter flag was null or undefined when calling updateFlag.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('put', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/flags/" + encodeURIComponent(String(flag)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.updateLeetMapping = function (text, language, dependency, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling updateLeetMapping.');
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling updateLeetMapping.');
    }
    if (dependency === null || dependency === undefined) {
      throw new Error('Required parameter dependency was null or undefined when calling updateLeetMapping.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('put', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/leet_mappings/" + encodeURIComponent(String(dependency)), {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.updateRule = function (language, text, body, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling updateRule.');
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling updateRule.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [
      'application/json'
    ];
    var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', this.basePath + "/rules/text/" + encodeURIComponent(String(text)), {
      body: body,
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.updateRules = function (body, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [
      'application/json'
    ];
    var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', this.basePath + "/rules", {
      body: body,
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.prototype.updateTopic = function (language, text, topicId, body, clientId, publish, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (language === null || language === undefined) {
      throw new Error('Required parameter language was null or undefined when calling updateTopic.');
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling updateTopic.');
    }
    if (topicId === null || topicId === undefined) {
      throw new Error('Required parameter topicId was null or undefined when calling updateTopic.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (language !== undefined && language !== null) {
      queryParameters = queryParameters.set('language', language);
    }
    if (clientId !== undefined && clientId !== null) {
      queryParameters = queryParameters.set('clientId', clientId);
    }
    if (publish !== undefined && publish !== null) {
      queryParameters = queryParameters.set('publish', publish);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [
      'application/json'
    ];
    var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/topic/" + encodeURIComponent(String(topicId)), {
      body: body,
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  DefaultService.ɵfac = function DefaultService_Factory(t) {
    return new(t || DefaultService)(ɵɵinject(HttpClient), ɵɵinject(BASE_PATH, 8), ɵɵinject(Configuration, 8));
  };
  DefaultService.ɵprov = ɵɵdefineInjectable({
    token: DefaultService,
    factory: DefaultService.ɵfac
  });
  return DefaultService;
}());
/*@__PURE__*/
(function () {
  ɵsetClassMetadata(DefaultService, [{
    type: Injectable
  }], function () {
    return [{
      type: HttpClient
    }, {
      type: undefined,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [BASE_PATH]
      }]
    }, {
      type: Configuration,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();

var SIFTADMINService = /** @class */ (function () {
  function SIFTADMINService(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://virtserver.swaggerhub.com/twohat/rules/2.0.3';
    this.defaultHeaders = new HttpHeaders();
    this.configuration = new Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  SIFTADMINService.prototype.canConsumeForm = function (consumes) {
    var e_1, _a;
    var form = 'multipart/form-data';
    try {
      for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
        var consume = consumes_1_1.value;
        if (form === consume) {
          return true;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return false;
  };
  SIFTADMINService.prototype.deleteRuleHistory = function (text, languages, clientIds, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (text === null || text === undefined) {
      throw new Error('Required parameter text was null or undefined when calling deleteRuleHistory.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (languages) {
      languages.forEach(function (element) {
        queryParameters = queryParameters.append('languages', element);
      });
    }
    if (clientIds) {
      queryParameters = queryParameters.set('clientIds', clientIds.join(COLLECTION_FORMATS['csv']));
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('delete', this.basePath + "/rules/text/" + encodeURIComponent(String(text)) + "/changelog", {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  SIFTADMINService.prototype.syncRules = function (since, observe, reportProgress) {
    if (observe === void 0) {
      observe = 'body';
    }
    if (reportProgress === void 0) {
      reportProgress = false;
    }
    if (since === null || since === undefined) {
      throw new Error('Required parameter since was null or undefined when calling syncRules.');
    }
    var queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (since !== undefined && since !== null) {
      queryParameters = queryParameters.set('since', since);
    }
    var headers = this.defaultHeaders;
    // authentication (bearerAuth) required
    if (this.configuration.accessToken) {
      var accessToken = typeof this.configuration.accessToken === 'function' ?
        this.configuration.accessToken() :
        this.configuration.accessToken;
      headers = headers.set('Authorization', 'Bearer ' + accessToken);
    }
    // to determine the Accept header
    var httpHeaderAccepts = [
      'application/json'
    ];
    var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    var consumes = [];
    return this.httpClient.request('get', this.basePath + "/rules/sync", {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  };
  SIFTADMINService.ɵfac = function SIFTADMINService_Factory(t) {
    return new(t || SIFTADMINService)(ɵɵinject(HttpClient), ɵɵinject(BASE_PATH, 8), ɵɵinject(Configuration, 8));
  };
  SIFTADMINService.ɵprov = ɵɵdefineInjectable({
    token: SIFTADMINService,
    factory: SIFTADMINService.ɵfac
  });
  return SIFTADMINService;
}());
/*@__PURE__*/
(function () {
  ɵsetClassMetadata(SIFTADMINService, [{
    type: Injectable
  }], function () {
    return [{
      type: HttpClient
    }, {
      type: undefined,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [BASE_PATH]
      }]
    }, {
      type: Configuration,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();

var APIS = [DefaultService, SIFTADMINService];

var ChangeLog;
(function (ChangeLog) {
  ChangeLog.ChangedEnum = {
    Topics: 'topics',
    AltSpellings: 'altSpellings',
    AltSenses: 'altSenses',
    LeetMappings: 'leetMappings',
    Flags: 'flags',
    Tasks: 'tasks',
    DELETED: 'DELETED'
  };
})(ChangeLog || (ChangeLog = {}));

/**
 * Rules
 * The filter works as a series of rules so that each word can be mapped to a rule.  So \"Happy\" can become \"happy\" and \"b4d\" and become \"bad\".    With this API you can manage your rules.
 *
 * OpenAPI spec version: 2.0.3
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var Flag = {
  ENABLED: 'ENABLED',
  DELETED: 'DELETED',
  COMMON: 'COMMON',
  WATCH: 'WATCH',
  SKIP: 'SKIP',
  PHRASERULE: 'PHRASE_RULE',
  USERNAME: 'USERNAME',
  FIRSTNAME: 'FIRST_NAME',
  LASTNAME: 'LAST_NAME',
  CITY: 'CITY',
  STATE: 'STATE',
  COUNTRY: 'COUNTRY',
  EMAILADDRESS: 'EMAIL_ADDRESS',
  DICT: 'DICT',
  OBJ: 'OBJ',
  GENERATED: 'GENERATED',
  MODERATED: 'MODERATED',
  WORD: 'WORD',
  NOUN: 'NOUN',
  VERB: 'VERB',
  PRONOUN: 'PRONOUN',
  ADJECTIVE: 'ADJECTIVE',
  ADVERB: 'ADVERB',
  CONJ: 'CONJ',
  DET: 'DET',
  INTER: 'INTER',
  PROPERNOUN: 'PROPER_NOUN',
  BIGRAM: 'BIGRAM',
  NGRAM: 'NGRAM',
  SIMPLIFIED: 'SIMPLIFIED'
};

var ApiModule = /** @class */ (function () {
  function ApiModule(parentModule, http) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
  ApiModule.forRoot = function (configurationFactory) {
    return {
      ngModule: ApiModule,
      providers: [{
        provide: Configuration,
        useFactory: configurationFactory
      }]
    };
  };
  ApiModule.ɵmod = ɵɵdefineNgModule({
    type: ApiModule
  });
  ApiModule.ɵinj = ɵɵdefineInjector({
    factory: function ApiModule_Factory(t) {
      return new(t || ApiModule)(ɵɵinject(ApiModule, 12), ɵɵinject(HttpClient, 8));
    },
    providers: [
      DefaultService,
      SIFTADMINService
    ],
    imports: [
      []
    ]
  });
  return ApiModule;
}());
/*@__PURE__*/
(function () {
  ɵsetClassMetadata(ApiModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [],
      exports: [],
      providers: [
        DefaultService,
        SIFTADMINService
      ]
    }]
  }], function () {
    return [{
      type: ApiModule,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }]
    }, {
      type: HttpClient,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();

/**
 * Generated bundle index. Do not edit.
 */

export {
  APIS,
  ApiModule,
  BASE_PATH,
  COLLECTION_FORMATS,
  ChangeLog,
  Configuration,
  DefaultService,
  Flag,
  SIFTADMINService
};
//# sourceMappingURL=rules-swagger-client-src.js.map
