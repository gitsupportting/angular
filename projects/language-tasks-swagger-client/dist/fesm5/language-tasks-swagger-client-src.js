import { __extends, __values } from 'tslib';
import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Optional, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, SkipSelf } from '@angular/core';
import { HttpUrlEncodingCodec, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
        var queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
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
    DefaultService.ɵfac = function DefaultService_Factory(t) { return new (t || DefaultService)(ɵɵinject(HttpClient), ɵɵinject(BASE_PATH, 8), ɵɵinject(Configuration, 8)); };
    DefaultService.ɵprov = ɵɵdefineInjectable({ token: DefaultService, factory: DefaultService.ɵfac, providedIn: 'root' });
    return DefaultService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [BASE_PATH]
            }] }, { type: Configuration, decorators: [{
                type: Optional
            }] }]; }, null); })();

var SIFTADMINService = /** @class */ (function () {
    function SIFTADMINService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://localhost:3000/api/v1/';
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
    SIFTADMINService.ɵfac = function SIFTADMINService_Factory(t) { return new (t || SIFTADMINService)(ɵɵinject(HttpClient), ɵɵinject(BASE_PATH, 8), ɵɵinject(Configuration, 8)); };
    SIFTADMINService.ɵprov = ɵɵdefineInjectable({ token: SIFTADMINService, factory: SIFTADMINService.ɵfac, providedIn: 'root' });
    return SIFTADMINService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SIFTADMINService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [BASE_PATH]
            }] }, { type: Configuration, decorators: [{
                type: Optional
            }] }]; }, null); })();

var APIS = [DefaultService, SIFTADMINService];

var ExampleInput;
(function (ExampleInput) {
    ExampleInput.TypeEnum = {
        FIXTHIS: 'FIX_THIS',
        COMMON: 'COMMON',
        SAMPLE: 'SAMPLE',
        TRENDINGWORDS: 'TRENDING_WORDS'
    };
})(ExampleInput || (ExampleInput = {}));

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
var QueueLabels;
(function (QueueLabels) {
    QueueLabels.TypeEnum = {
        Enum: 'enum',
        Tag: 'tag',
        Tags: 'tags'
    };
})(QueueLabels || (QueueLabels = {}));

var RuleAuditInput;
(function (RuleAuditInput) {
    RuleAuditInput.TypeEnum = {
        RECENTRULE: 'RECENT_RULE',
        RULEAUDIT: 'RULE_AUDIT',
        FIXTHIS: 'FIX_THIS'
    };
})(RuleAuditInput || (RuleAuditInput = {}));

var UsernameInput;
(function (UsernameInput) {
    UsernameInput.TypeEnum = {
        FIXTHIS: 'FIX_THIS',
        COMMON: 'COMMON',
        SAMPLE: 'SAMPLE',
        SAMPLEONX: 'SAMPLE_ON_X'
    };
})(UsernameInput || (UsernameInput = {}));

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
    ApiModule.ɵmod = ɵɵdefineNgModule({ type: ApiModule });
    ApiModule.ɵinj = ɵɵdefineInjector({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(ɵɵinject(ApiModule, 12), ɵɵinject(HttpClient, 8)); }, providers: [
            DefaultService,
            SIFTADMINService
        ], imports: [[]] });
    return ApiModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ApiModule, [{
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
    }], function () { return [{ type: ApiModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: HttpClient, decorators: [{
                type: Optional
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { APIS, ApiModule, BASE_PATH, COLLECTION_FORMATS, Configuration, DefaultService, ExampleInput, QueueLabels, RuleAuditInput, SIFTADMINService, UsernameInput };
//# sourceMappingURL=language-tasks-swagger-client-src.js.map
