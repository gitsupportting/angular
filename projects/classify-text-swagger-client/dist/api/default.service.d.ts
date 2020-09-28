import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageClassifiedOutput } from '../model/languageClassifiedOutput';
import { TextClassifiedBulkOutput } from '../model/textClassifiedBulkOutput';
import { TextClassifiedOutput } from '../model/textClassifiedOutput';
import { TextInput } from '../model/textInput';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class DefaultService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * perform language identification
     * Given a piece of text it will analyze it to see what languages it might be.  Unlike other language identification trained on long properly formatted text (a relatively easy task) this one is trained on short text with frequent misspellings and internet slang  NOTE This item is a POST for PII reasons to prevent caching of GET requests
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    classifyLanguage(observe?: 'body', reportProgress?: boolean): Observable<LanguageClassifiedOutput>;
    classifyLanguage(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LanguageClassifiedOutput>>;
    classifyLanguage(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LanguageClassifiedOutput>>;
    /**
     * classify text
     *
     * @param body
     * @param extended If extended&#x3D;true in the request it will output the longer details of all things it considered.  This is quite a bit more costly in latency and CPU to run so we advise to only call it when needed.  As such it will be billed as 2 requests instead of one.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    classifyText(body?: TextInput, extended?: boolean, observe?: 'body', reportProgress?: boolean): Observable<TextClassifiedOutput>;
    classifyText(body?: TextInput, extended?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TextClassifiedOutput>>;
    classifyText(body?: TextInput, extended?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TextClassifiedOutput>>;
    /**
     * classify text
     * Same as /classify/text but does so in bulk4
     * @param body
     * @param extended If extended&#x3D;true in the request it will output the longer details of all things it considered.  This is quite a bit more costly in latency and CPU to run so we advise to only call it when needed.  As such it will be billed as 2 requests instead of one.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    classifyTextBulk(body?: Array<TextInput>, extended?: boolean, observe?: 'body', reportProgress?: boolean): Observable<TextClassifiedBulkOutput>;
    classifyTextBulk(body?: Array<TextInput>, extended?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TextClassifiedBulkOutput>>;
    classifyTextBulk(body?: Array<TextInput>, extended?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TextClassifiedBulkOutput>>;
    /**
     * Is the service running
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    statusGet(observe?: 'body', reportProgress?: boolean): Observable<any>;
    statusGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    statusGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<DefaultService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DefaultService>;
}
