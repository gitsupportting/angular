import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queue } from '../model/queue';
import { Configuration } from '../configuration';
import { SIFTADMINServiceInterface } from './sIFTADMIN.serviceInterface';
import * as i0 from "@angular/core";
export declare class SIFTADMINService implements SIFTADMINServiceInterface {
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
     * Delete a client and all their data
     * This will delete all data we have on a client. Typically called after a client leaves
     * @param clientId The unique identifier for this client
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteClient(clientId: number, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    deleteClient(clientId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    deleteClient(clientId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     * Delete a queue
     * This will remove this queue and if there are content inside it then that too.  If you are just trying to remove content then you should use ./items API endpoint.
     * @param queueId The unique identifier for this queue
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteQueue(queueId: string, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    deleteQueue(queueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    deleteQueue(queueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     * Add a queue
     * A Queue is a group of work to be done by moderators.  This will create or update a queue.
     * @param queueId The unique identifier for this queue
     * @param body The queue to be added
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    putQueue(queueId: string, body?: Queue, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    putQueue(queueId: string, body?: Queue, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    putQueue(queueId: string, body?: Queue, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    static ɵfac: i0.ɵɵFactoryDef<SIFTADMINService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<SIFTADMINService>;
}
