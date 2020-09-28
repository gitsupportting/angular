(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('language-tasks-swagger-client/src', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = global || self, factory((global['language-tasks-swagger-client'] = global['language-tasks-swagger-client'] || {}, global['language-tasks-swagger-client'].src = {}), global.ng.core, global.ng.common.http));
}(this, (function (exports, core, http) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
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
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
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
            if (configurationParameters === void 0) { configurationParameters = {}; }
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
            var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
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
            var type = accepts.find(function (x) { return _this.isJsonMime(x); });
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
            this.basePath = 'https://virtserver.swaggerhub.com/twohat/inbox/2.1.1';
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
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        DefaultService.prototype.addComment = function (queueId, contentId, body, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling addComment.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling addComment.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('post', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/comments", {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.addExamples = function (body, updateData, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (updateData !== undefined && updateData !== null) {
                queryParameters = queryParameters.set('updateData', updateData);
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('post', this.basePath + "/inbox/queue/examples/items", {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.addRuleAuditItems = function (body, updateData, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (updateData !== undefined && updateData !== null) {
                queryParameters = queryParameters.set('updateData', updateData);
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('post', this.basePath + "/inbox/queue/rulesAudit/items", {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.addSpelling = function (body, updateData, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (updateData !== undefined && updateData !== null) {
                queryParameters = queryParameters.set('updateData', updateData);
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('post', this.basePath + "/inbox/queue/spelling/items", {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.addTaskItems = function (body, updateData, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (updateData !== undefined && updateData !== null) {
                queryParameters = queryParameters.set('updateData', updateData);
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('post', this.basePath + "/inbox/queue/task/items", {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.addUseranmes = function (body, updateData, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (updateData !== undefined && updateData !== null) {
                queryParameters = queryParameters.set('updateData', updateData);
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('post', this.basePath + "/inbox/queue/usernames/items", {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deletExampleItems = function (clientId, languages, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (clientId !== undefined && clientId !== null) {
                queryParameters = queryParameters.set('clientId', clientId);
            }
            if (languages) {
                languages.forEach(function (element) {
                    queryParameters = queryParameters.append('languages', element);
                });
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/examples/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteAllCheckouts = function (queueId, clientId, languages, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling deleteAllCheckouts.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (clientId !== undefined && clientId !== null) {
                queryParameters = queryParameters.set('clientId', clientId);
            }
            if (languages) {
                languages.forEach(function (element) {
                    queryParameters = queryParameters.append('languages', element);
                });
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/checkout", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteComment = function (queueId, contentId, commentId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling deleteComment.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling deleteComment.');
            }
            if (commentId === null || commentId === undefined) {
                throw new Error('Required parameter commentId was null or undefined when calling deleteComment.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/comments/" + encodeURIComponent(String(commentId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteItemCheckout = function (queueId, contentId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling deleteItemCheckout.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling deleteItemCheckout.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/checkout", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteItems = function (queueId, clientId, languages, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling deleteItems.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (clientId !== undefined && clientId !== null) {
                queryParameters = queryParameters.set('clientId', clientId);
            }
            if (languages) {
                languages.forEach(function (element) {
                    queryParameters = queryParameters.append('languages', element);
                });
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteParam = function (queueId, paramId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling deleteParam.');
            }
            if (paramId === null || paramId === undefined) {
                throw new Error('Required parameter paramId was null or undefined when calling deleteParam.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/param/" + encodeURIComponent(String(paramId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteRuleAuditItems = function (clientId, languages, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (clientId !== undefined && clientId !== null) {
                queryParameters = queryParameters.set('clientId', clientId);
            }
            if (languages) {
                languages.forEach(function (element) {
                    queryParameters = queryParameters.append('languages', element);
                });
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/rulesAudit/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteSpellingItems = function (clientId, languages, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (clientId !== undefined && clientId !== null) {
                queryParameters = queryParameters.set('clientId', clientId);
            }
            if (languages) {
                languages.forEach(function (element) {
                    queryParameters = queryParameters.append('languages', element);
                });
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/spelling/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteTaskItems = function (clientId, languages, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (clientId !== undefined && clientId !== null) {
                queryParameters = queryParameters.set('clientId', clientId);
            }
            if (languages) {
                languages.forEach(function (element) {
                    queryParameters = queryParameters.append('languages', element);
                });
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/task/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteUser = function (userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling deleteUser.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/user/" + encodeURIComponent(String(userId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.deleteUsernameItems = function (clientId, languages, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (clientId !== undefined && clientId !== null) {
                queryParameters = queryParameters.set('clientId', clientId);
            }
            if (languages) {
                languages.forEach(function (element) {
                    queryParameters = queryParameters.append('languages', element);
                });
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/usernames/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getComments = function (queueId, contentId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling getComment.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling getComment.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/comments", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getComment = function (queueId, contentId, commentId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling getComment.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling getComment.');
            }
            if (commentId === null || commentId === undefined) {
                throw new Error('Required parameter commentId was null or undefined when calling getComment.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/comments/" + encodeURIComponent(String(commentId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getExamples = function (language, ai, checkout, clientIds, contentIds, notContentIds, endDate, startDate, reviewedStartDate, reviewedEndDate, checkoutAvailable, doneByModeratorId, limit, offset, sortBy, tags, text, topics, unresolvedComments, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (language === null || language === undefined) {
                throw new Error('Required parameter language was null or undefined when calling getExamples.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (ai) {
                ai.forEach(function (element) {
                    queryParameters = queryParameters.append('ai', element);
                });
            }
            if (checkout !== undefined && checkout !== null) {
                queryParameters = queryParameters.set('checkout', checkout);
            }
            if (clientIds) {
                queryParameters = queryParameters.set('clientIds', clientIds.join(COLLECTION_FORMATS['csv']));
            }
            if (contentIds) {
                queryParameters = queryParameters.set('contentIds', contentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (notContentIds) {
                queryParameters = queryParameters.set('notContentIds', notContentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (endDate !== undefined && endDate !== null) {
                queryParameters = queryParameters.set('endDate', endDate);
            }
            if (startDate !== undefined && startDate !== null) {
                queryParameters = queryParameters.set('startDate', startDate);
            }
            if (reviewedStartDate !== undefined && reviewedStartDate !== null) {
                queryParameters = queryParameters.set('reviewedStartDate', reviewedStartDate);
            }
            if (reviewedEndDate !== undefined && reviewedEndDate !== null) {
                queryParameters = queryParameters.set('reviewedEndDate', reviewedEndDate);
            }
            if (checkoutAvailable !== undefined && checkoutAvailable !== null) {
                queryParameters = queryParameters.set('checkoutAvailable', checkoutAvailable);
            }
            if (doneByModeratorId !== undefined && doneByModeratorId !== null) {
                queryParameters = queryParameters.set('doneByModeratorId', doneByModeratorId);
            }
            if (language !== undefined && language !== null) {
                queryParameters = queryParameters.set('language', language);
            }
            if (limit !== undefined && limit !== null) {
                queryParameters = queryParameters.set('limit', limit);
            }
            if (offset !== undefined && offset !== null) {
                queryParameters = queryParameters.set('offset', offset);
            }
            if (sortBy !== undefined && sortBy !== null) {
                queryParameters = queryParameters.set('sortBy', sortBy);
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/examples/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getInbox = function (observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('get', this.basePath + "/inbox", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getItemCheckout = function (queueId, contentId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling getItemCheckout.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling getItemCheckout.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/checkout", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getQueue = function (queueId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling getQueue.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getRuleAuditItems = function (language, ai, checkout, clientIds, contentIds, notContentIds, endDate, startDate, reviewedStartDate, reviewedEndDate, checkoutAvailable, doneByModeratorId, limit, offset, sortBy, tags, text, topics, unresolvedComments, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (language === null || language === undefined) {
                throw new Error('Required parameter language was null or undefined when calling getRuleAuditItems.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (ai) {
                ai.forEach(function (element) {
                    queryParameters = queryParameters.append('ai', element);
                });
            }
            if (checkout !== undefined && checkout !== null) {
                queryParameters = queryParameters.set('checkout', checkout);
            }
            if (clientIds) {
                queryParameters = queryParameters.set('clientIds', clientIds.join(COLLECTION_FORMATS['csv']));
            }
            if (contentIds) {
                queryParameters = queryParameters.set('contentIds', contentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (notContentIds) {
                queryParameters = queryParameters.set('notContentIds', notContentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (endDate !== undefined && endDate !== null) {
                queryParameters = queryParameters.set('endDate', endDate);
            }
            if (startDate !== undefined && startDate !== null) {
                queryParameters = queryParameters.set('startDate', startDate);
            }
            if (reviewedStartDate !== undefined && reviewedStartDate !== null) {
                queryParameters = queryParameters.set('reviewedStartDate', reviewedStartDate);
            }
            if (reviewedEndDate !== undefined && reviewedEndDate !== null) {
                queryParameters = queryParameters.set('reviewedEndDate', reviewedEndDate);
            }
            if (checkoutAvailable !== undefined && checkoutAvailable !== null) {
                queryParameters = queryParameters.set('checkoutAvailable', checkoutAvailable);
            }
            if (doneByModeratorId !== undefined && doneByModeratorId !== null) {
                queryParameters = queryParameters.set('doneByModeratorId', doneByModeratorId);
            }
            if (language !== undefined && language !== null) {
                queryParameters = queryParameters.set('language', language);
            }
            if (limit !== undefined && limit !== null) {
                queryParameters = queryParameters.set('limit', limit);
            }
            if (offset !== undefined && offset !== null) {
                queryParameters = queryParameters.set('offset', offset);
            }
            if (sortBy !== undefined && sortBy !== null) {
                queryParameters = queryParameters.set('sortBy', sortBy);
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/rulesAudit/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getSpelling = function (language, ai, checkout, clientIds, contentIds, notContentIds, endDate, startDate, reviewedStartDate, reviewedEndDate, checkoutAvailable, doneByModeratorId, limit, offset, sortBy, tags, text, topics, unresolvedComments, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (language === null || language === undefined) {
                throw new Error('Required parameter language was null or undefined when calling getSpelling.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (ai) {
                ai.forEach(function (element) {
                    queryParameters = queryParameters.append('ai', element);
                });
            }
            if (checkout !== undefined && checkout !== null) {
                queryParameters = queryParameters.set('checkout', checkout);
            }
            if (clientIds) {
                queryParameters = queryParameters.set('clientIds', clientIds.join(COLLECTION_FORMATS['csv']));
            }
            if (contentIds) {
                queryParameters = queryParameters.set('contentIds', contentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (notContentIds) {
                queryParameters = queryParameters.set('notContentIds', notContentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (endDate !== undefined && endDate !== null) {
                queryParameters = queryParameters.set('endDate', endDate);
            }
            if (startDate !== undefined && startDate !== null) {
                queryParameters = queryParameters.set('startDate', startDate);
            }
            if (reviewedStartDate !== undefined && reviewedStartDate !== null) {
                queryParameters = queryParameters.set('reviewedStartDate', reviewedStartDate);
            }
            if (reviewedEndDate !== undefined && reviewedEndDate !== null) {
                queryParameters = queryParameters.set('reviewedEndDate', reviewedEndDate);
            }
            if (checkoutAvailable !== undefined && checkoutAvailable !== null) {
                queryParameters = queryParameters.set('checkoutAvailable', checkoutAvailable);
            }
            if (doneByModeratorId !== undefined && doneByModeratorId !== null) {
                queryParameters = queryParameters.set('doneByModeratorId', doneByModeratorId);
            }
            if (language !== undefined && language !== null) {
                queryParameters = queryParameters.set('language', language);
            }
            if (limit !== undefined && limit !== null) {
                queryParameters = queryParameters.set('limit', limit);
            }
            if (offset !== undefined && offset !== null) {
                queryParameters = queryParameters.set('offset', offset);
            }
            if (sortBy !== undefined && sortBy !== null) {
                queryParameters = queryParameters.set('sortBy', sortBy);
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/spelling/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getTaskItems = function (language, clientIds, contentIds, notContentIds, endDate, startDate, reviewedStartDate, reviewedEndDate, checkoutAvailable, doneByModeratorId, assignedToModeratorId, limit, offset, sortBy, tags, text, unresolvedComments, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (language === null || language === undefined) {
                throw new Error('Required parameter language was null or undefined when calling getTaskItems.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (clientIds) {
                queryParameters = queryParameters.set('clientIds', clientIds.join(COLLECTION_FORMATS['csv']));
            }
            if (contentIds) {
                queryParameters = queryParameters.set('contentIds', contentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (notContentIds) {
                queryParameters = queryParameters.set('notContentIds', notContentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (endDate !== undefined && endDate !== null) {
                queryParameters = queryParameters.set('endDate', endDate);
            }
            if (startDate !== undefined && startDate !== null) {
                queryParameters = queryParameters.set('startDate', startDate);
            }
            if (reviewedStartDate !== undefined && reviewedStartDate !== null) {
                queryParameters = queryParameters.set('reviewedStartDate', reviewedStartDate);
            }
            if (reviewedEndDate !== undefined && reviewedEndDate !== null) {
                queryParameters = queryParameters.set('reviewedEndDate', reviewedEndDate);
            }
            if (checkoutAvailable !== undefined && checkoutAvailable !== null) {
                queryParameters = queryParameters.set('checkoutAvailable', checkoutAvailable);
            }
            if (doneByModeratorId !== undefined && doneByModeratorId !== null) {
                queryParameters = queryParameters.set('doneByModeratorId', doneByModeratorId);
            }
            if (assignedToModeratorId !== undefined && assignedToModeratorId !== null) {
                queryParameters = queryParameters.set('assignedToModeratorId', assignedToModeratorId);
            }
            if (language !== undefined && language !== null) {
                queryParameters = queryParameters.set('language', language);
            }
            if (limit !== undefined && limit !== null) {
                queryParameters = queryParameters.set('limit', limit);
            }
            if (offset !== undefined && offset !== null) {
                queryParameters = queryParameters.set('offset', offset);
            }
            if (sortBy !== undefined && sortBy !== null) {
                queryParameters = queryParameters.set('sortBy', sortBy);
            }
            if (tags) {
                queryParameters = queryParameters.set('tags', tags.join(COLLECTION_FORMATS['csv']));
            }
            if (text !== undefined && text !== null) {
                queryParameters = queryParameters.set('text', text);
            }
            if (unresolvedComments !== undefined && unresolvedComments !== null) {
                queryParameters = queryParameters.set('unresolvedComments', unresolvedComments);
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/task/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getUserData = function (userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getUserData.');
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/x-ndjson',
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            // to determine the Content-Type header
            var consumes = [];
            return this.httpClient.request('get', this.basePath + "/inbox/user/" + encodeURIComponent(String(userId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.getUsernames = function (language, ai, checkout, clientIds, contentIds, notContentIds, endDate, startDate, reviewedStartDate, reviewedEndDate, checkoutAvailable, doneByModeratorId, limit, offset, sortBy, tags, text, topics, unresolvedComments, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (language === null || language === undefined) {
                throw new Error('Required parameter language was null or undefined when calling getUsernames.');
            }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (ai) {
                ai.forEach(function (element) {
                    queryParameters = queryParameters.append('ai', element);
                });
            }
            if (checkout !== undefined && checkout !== null) {
                queryParameters = queryParameters.set('checkout', checkout);
            }
            if (clientIds) {
                queryParameters = queryParameters.set('clientIds', clientIds.join(COLLECTION_FORMATS['csv']));
            }
            if (contentIds) {
                queryParameters = queryParameters.set('contentIds', contentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (notContentIds) {
                queryParameters = queryParameters.set('notContentIds', notContentIds.join(COLLECTION_FORMATS['csv']));
            }
            if (endDate !== undefined && endDate !== null) {
                queryParameters = queryParameters.set('endDate', endDate);
            }
            if (startDate !== undefined && startDate !== null) {
                queryParameters = queryParameters.set('startDate', startDate);
            }
            if (reviewedStartDate !== undefined && reviewedStartDate !== null) {
                queryParameters = queryParameters.set('reviewedStartDate', reviewedStartDate);
            }
            if (reviewedEndDate !== undefined && reviewedEndDate !== null) {
                queryParameters = queryParameters.set('reviewedEndDate', reviewedEndDate);
            }
            if (checkoutAvailable !== undefined && checkoutAvailable !== null) {
                queryParameters = queryParameters.set('checkoutAvailable', checkoutAvailable);
            }
            if (doneByModeratorId !== undefined && doneByModeratorId !== null) {
                queryParameters = queryParameters.set('doneByModeratorId', doneByModeratorId);
            }
            if (language !== undefined && language !== null) {
                queryParameters = queryParameters.set('language', language);
            }
            if (limit !== undefined && limit !== null) {
                queryParameters = queryParameters.set('limit', limit);
            }
            if (offset !== undefined && offset !== null) {
                queryParameters = queryParameters.set('offset', offset);
            }
            if (sortBy !== undefined && sortBy !== null) {
                queryParameters = queryParameters.set('sortBy', sortBy);
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/usernames/items", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.itemDone = function (queueId, contentId, body, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling itemDone.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling itemDone.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('post', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/decision", {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.listCommentsForContentId = function (queueId, contentId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling listCommentsForContentId.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling listCommentsForContentId.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('get', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/comments", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.redactItem = function (queueId, contentId, body, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling redactItem.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling redactItem.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('put', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/text", {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.redactUser = function (userId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling redactUser.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('put', this.basePath + "/inbox/user/" + encodeURIComponent(String(userId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.resolveComment = function (queueId, contentId, commentId, body, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling resolveComment.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling resolveComment.');
            }
            if (commentId === null || commentId === undefined) {
                throw new Error('Required parameter commentId was null or undefined when calling resolveComment.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('put', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/comments/" + encodeURIComponent(String(commentId)) + "/resolved", {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.updateComment = function (queueId, contentId, commentId, body, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling updateComment.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling updateComment.');
            }
            if (commentId === null || commentId === undefined) {
                throw new Error('Required parameter commentId was null or undefined when calling updateComment.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('put', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/comments/" + encodeURIComponent(String(commentId)), {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.updateItemCheckout = function (queueId, contentId, body, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling updateItemCheckout.');
            }
            if (contentId === null || contentId === undefined) {
                throw new Error('Required parameter contentId was null or undefined when calling updateItemCheckout.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('put', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/items/" + encodeURIComponent(String(contentId)) + "/checkout", {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.prototype.updateParam = function (queueId, paramId, body, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling updateParam.');
            }
            if (paramId === null || paramId === undefined) {
                throw new Error('Required parameter paramId was null or undefined when calling updateParam.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('put', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)) + "/param/" + encodeURIComponent(String(paramId)), {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        DefaultService.ɵfac = function DefaultService_Factory(t) { return new (t || DefaultService)(core.ɵɵinject(http.HttpClient), core.ɵɵinject(BASE_PATH, 8), core.ɵɵinject(Configuration, 8)); };
        DefaultService.ɵprov = core.ɵɵdefineInjectable({ token: DefaultService, factory: DefaultService.ɵfac, providedIn: 'root' });
        return DefaultService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DefaultService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: http.HttpClient }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [BASE_PATH]
                }] }, { type: Configuration, decorators: [{
                    type: core.Optional
                }] }]; }, null); })();

    var SIFTADMINService = /** @class */ (function () {
        function SIFTADMINService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://localhost:3000/api/v1/';
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
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        SIFTADMINService.prototype.deleteClient = function (clientId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (clientId === null || clientId === undefined) {
                throw new Error('Required parameter clientId was null or undefined when calling deleteClient.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/client/" + encodeURIComponent(String(clientId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        SIFTADMINService.prototype.deleteQueue = function (queueId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling deleteQueue.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('delete', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        SIFTADMINService.prototype.putQueue = function (queueId, body, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (queueId === null || queueId === undefined) {
                throw new Error('Required parameter queueId was null or undefined when calling putQueue.');
            }
            var headers = this.defaultHeaders;
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
            return this.httpClient.request('put', this.basePath + "/inbox/queue/" + encodeURIComponent(String(queueId)), {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        SIFTADMINService.ɵfac = function SIFTADMINService_Factory(t) { return new (t || SIFTADMINService)(core.ɵɵinject(http.HttpClient), core.ɵɵinject(BASE_PATH, 8), core.ɵɵinject(Configuration, 8)); };
        SIFTADMINService.ɵprov = core.ɵɵdefineInjectable({ token: SIFTADMINService, factory: SIFTADMINService.ɵfac, providedIn: 'root' });
        return SIFTADMINService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SIFTADMINService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: http.HttpClient }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [BASE_PATH]
                }] }, { type: Configuration, decorators: [{
                    type: core.Optional
                }] }]; }, null); })();

    var APIS = [DefaultService, SIFTADMINService];


    (function (ExampleInput) {
        ExampleInput.TypeEnum = {
            FIXTHIS: 'FIX_THIS',
            COMMON: 'COMMON',
            SAMPLE: 'SAMPLE',
            TRENDINGWORDS: 'TRENDING_WORDS'
        };
    })(exports.ExampleInput || (exports.ExampleInput = {}));

    /**
     * Inbox API
     * Manage work for human moderators by adding, checking out and completing work items. Store User Generated Content to the database.  This will store it twice, once in short-term storage in it's exact form amd again in long term storage in it's redacted and pseudonymized form
     *
     * OpenAPI spec version: 2.1.1
     * Contact: support@twohat.com
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    (function (QueueLabels) {
        QueueLabels.TypeEnum = {
            Enum: 'enum',
            Tag: 'tag',
            Tags: 'tags'
        };
    })(exports.QueueLabels || (exports.QueueLabels = {}));


    (function (RuleAuditInput) {
        RuleAuditInput.TypeEnum = {
            RECENTRULE: 'RECENT_RULE',
            RULEAUDIT: 'RULE_AUDIT',
            FIXTHIS: 'FIX_THIS'
        };
    })(exports.RuleAuditInput || (exports.RuleAuditInput = {}));


    (function (UsernameInput) {
        UsernameInput.TypeEnum = {
            FIXTHIS: 'FIX_THIS',
            COMMON: 'COMMON',
            SAMPLE: 'SAMPLE',
            SAMPLEONX: 'SAMPLE_ON_X'
        };
    })(exports.UsernameInput || (exports.UsernameInput = {}));

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
                providers: [{ provide: Configuration, useFactory: configurationFactory }]
            };
        };
        ApiModule.ɵmod = core.ɵɵdefineNgModule({ type: ApiModule });
        ApiModule.ɵinj = core.ɵɵdefineInjector({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(core.ɵɵinject(ApiModule, 12), core.ɵɵinject(http.HttpClient, 8)); }, providers: [
                DefaultService,
                SIFTADMINService
            ], imports: [[]] });
        return ApiModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ApiModule, [{
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
        }], function () { return [{ type: ApiModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }, { type: http.HttpClient, decorators: [{
                    type: core.Optional
                }] }]; }, null); })();

    exports.APIS = APIS;
    exports.ApiModule = ApiModule;
    exports.BASE_PATH = BASE_PATH;
    exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
    exports.Configuration = Configuration;
    exports.DefaultService = DefaultService;
    exports.SIFTADMINService = SIFTADMINService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=language-tasks-swagger-client-src.umd.js.map
