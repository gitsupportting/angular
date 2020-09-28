import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeLog } from '../model/changeLog';
import { InlineResponse200 } from '../model/inlineResponse200';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class SIFTADMINService {
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
     * Delete rule history
     * Will remove all the history items for a rule.  Used for integration tests to reset the state.
     * @param text The text of the rule you want to work on
     * @param languages Which languages does this apply to
     * @param clientIds Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to. You can set this to -1 to apply to all clients you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<Array<ChangeLog>>;
    deleteRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ChangeLog>>>;
    deleteRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ChangeLog>>>;
    /**
     * Sync the rules from V1 to V2
     *
     * @param since Update rules changed since a given date in unixtimestamp (milliseconds since Epoch)  -1 &#x3D; since the last time the command was run    0 &#x3D; reload all rules   \\&gt;1 &#x3D; since this timestamp
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    syncRules(since: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    syncRules(since: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    syncRules(since: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    static ɵfac: i0.ɵɵFactoryDef<SIFTADMINService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<SIFTADMINService>;
}
