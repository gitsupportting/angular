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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { ChangeLog } from '../model/changeLog';
import { InlineResponse200 } from '../model/inlineResponse200';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';


@Injectable()
export class SIFTADMINService {

    protected basePath = 'https://virtserver.swaggerhub.com/twohat/rules/2.0.3';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete rule history
     * Will remove all the history items for a rule.  Used for integration tests to reset the state. 
     * @param text The text of the rule you want to work on
     * @param languages Which languages does this apply to
     * @param clientIds Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to. You can set this to -1 to apply to all clients you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<Array<ChangeLog>>;
    public deleteRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ChangeLog>>>;
    public deleteRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ChangeLog>>>;
    public deleteRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (text === null || text === undefined) {
            throw new Error('Required parameter text was null or undefined when calling deleteRuleHistory.');
        }



        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (languages) {
            languages.forEach((element) => {
                queryParameters = queryParameters.append('languages', <any>element);
            })
        }
        if (clientIds) {
            queryParameters = queryParameters.set('clientIds', clientIds.join(COLLECTION_FORMATS['csv']));
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<ChangeLog>>('delete', `${this.basePath}/rules/text/${encodeURIComponent(String(text))}/changelog`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Sync the rules from V1 to V2
     * 
     * @param since Update rules changed since a given date in unixtimestamp (milliseconds since Epoch)  -1 &#x3D; since the last time the command was run    0 &#x3D; reload all rules   \\&gt;1 &#x3D; since this timestamp 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public syncRules(since: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public syncRules(since: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public syncRules(since: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public syncRules(since: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (since === null || since === undefined) {
            throw new Error('Required parameter since was null or undefined when calling syncRules.');
        }

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (since !== undefined && since !== null) {
            queryParameters = queryParameters.set('since', <any>since);
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<InlineResponse200>('get', `${this.basePath}/rules/sync`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
