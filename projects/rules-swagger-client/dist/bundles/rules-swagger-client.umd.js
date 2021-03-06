(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('rules-swagger-client', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = global || self, factory(global['rules-swagger-client'] = {}, global.ng.core, global.ng.common.http));
}(this, (function (exports, core, http) {
  'use strict';

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b;
        }) ||
      function (d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __param(paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    }
  }

  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new(P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f, y, t, g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1], done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }

  function __exportStar(m, exports) {
    for (var p in m)
      if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }

  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r, ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }

  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
    return ar;
  }

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };

  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }

  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
      i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i;

    function verb(n) {
      if (g[n]) i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }

    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }

    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }

    function fulfill(value) {
      resume("next", value);
    }

    function reject(value) {
      resume("throw", value);
    }

    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }

  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
      return this;
    }, i;

    function verb(n, f) {
      i[n] = o[n] ? function (v) {
        return (p = !p) ? {
          value: __await(o[n](v)),
          done: n === "return"
        } : f ? f(v) : v;
      } : f;
    }
  }

  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
      i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i);

    function verb(n) {
      i[n] = o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }

    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({
          value: v,
          done: d
        });
      }, reject);
    }
  }

  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", {
        value: raw
      });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };

  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
  }

  function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : {
      default: mod
    };
  }

  function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }

  function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }

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
  }(http.HttpUrlEncodingCodec));

  var BASE_PATH = new core.InjectionToken('basePath');
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
      this.defaultHeaders = new http.HttpHeaders();
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      return new(t || DefaultService)(core.ɵɵinject(http.HttpClient), core.ɵɵinject(BASE_PATH, 8), core.ɵɵinject(Configuration, 8));
    };
    DefaultService.ɵprov = core.ɵɵdefineInjectable({
      token: DefaultService,
      factory: DefaultService.ɵfac
    });
    return DefaultService;
  }());
  /*@__PURE__*/
  (function () {
    core.ɵsetClassMetadata(DefaultService, [{
      type: core.Injectable
    }], function () {
      return [{
        type: http.HttpClient
      }, {
        type: undefined,
        decorators: [{
          type: core.Optional
        }, {
          type: core.Inject,
          args: [BASE_PATH]
        }]
      }, {
        type: Configuration,
        decorators: [{
          type: core.Optional
        }]
      }];
    }, null);
  })();

  var SIFTADMINService = /** @class */ (function () {
    function SIFTADMINService(httpClient, basePath, configuration) {
      this.httpClient = httpClient;
      this.basePath = 'https://virtserver.swaggerhub.com/twohat/rules/2.0.3';
      this.defaultHeaders = new http.HttpHeaders();
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
      var queryParameters = new http.HttpParams({
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
      var queryParameters = new http.HttpParams({
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
      return new(t || SIFTADMINService)(core.ɵɵinject(http.HttpClient), core.ɵɵinject(BASE_PATH, 8), core.ɵɵinject(Configuration, 8));
    };
    SIFTADMINService.ɵprov = core.ɵɵdefineInjectable({
      token: SIFTADMINService,
      factory: SIFTADMINService.ɵfac
    });
    return SIFTADMINService;
  }());
  /*@__PURE__*/
  (function () {
    core.ɵsetClassMetadata(SIFTADMINService, [{
      type: core.Injectable
    }], function () {
      return [{
        type: http.HttpClient
      }, {
        type: undefined,
        decorators: [{
          type: core.Optional
        }, {
          type: core.Inject,
          args: [BASE_PATH]
        }]
      }, {
        type: Configuration,
        decorators: [{
          type: core.Optional
        }]
      }];
    }, null);
  })();

  var APIS = [DefaultService, SIFTADMINService];


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
  })(exports.ChangeLog || (exports.ChangeLog = {}));

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
    ApiModule.ɵmod = core.ɵɵdefineNgModule({
      type: ApiModule
    });
    ApiModule.ɵinj = core.ɵɵdefineInjector({
      factory: function ApiModule_Factory(t) {
        return new(t || ApiModule)(core.ɵɵinject(ApiModule, 12), core.ɵɵinject(http.HttpClient, 8));
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
    core.ɵsetClassMetadata(ApiModule, [{
      type: core.NgModule,
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
          type: core.Optional
        }, {
          type: core.SkipSelf
        }]
      }, {
        type: http.HttpClient,
        decorators: [{
          type: core.Optional
        }]
      }];
    }, null);
  })();

  exports.APIS = APIS;
  exports.ApiModule = ApiModule;
  exports.BASE_PATH = BASE_PATH;
  exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
  exports.Configuration = Configuration;
  exports.DefaultService = DefaultService;
  exports.Flag = Flag;
  exports.SIFTADMINService = SIFTADMINService;

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

})));
//# sourceMappingURL=rules-swagger-client.umd.js.map
