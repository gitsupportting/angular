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
 */ /* tslint:disable:no-unused-variable member-ordering */
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../configuration";
export class SIFTADMINService {
    constructor(httpClient, basePath, configuration) {
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
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    deleteClient(clientId, observe = 'body', reportProgress = false) {
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling deleteClient.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('delete', `${this.basePath}/inbox/client/${encodeURIComponent(String(clientId))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    deleteQueue(queueId, observe = 'body', reportProgress = false) {
        if (queueId === null || queueId === undefined) {
            throw new Error('Required parameter queueId was null or undefined when calling deleteQueue.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('delete', `${this.basePath}/inbox/queue/${encodeURIComponent(String(queueId))}`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    putQueue(queueId, body, observe = 'body', reportProgress = false) {
        if (queueId === null || queueId === undefined) {
            throw new Error('Required parameter queueId was null or undefined when calling putQueue.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.request('put', `${this.basePath}/inbox/queue/${encodeURIComponent(String(queueId))}`, {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
SIFTADMINService.ɵfac = function SIFTADMINService_Factory(t) { return new (t || SIFTADMINService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(BASE_PATH, 8), i0.ɵɵinject(i2.Configuration, 8)); };
SIFTADMINService.ɵprov = i0.ɵɵdefineInjectable({ token: SIFTADMINService, factory: SIFTADMINService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SIFTADMINService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [BASE_PATH]
            }] }, { type: i2.Configuration, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic0lGVEFETUlOLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYW5ndWFnZS10YXNrcy1zd2FnZ2VyLWNsaWVudC8iLCJzb3VyY2VzIjpbImFwaS9zSUZUQURNSU4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHLENBQUEsdURBQXVEO0FBRTFELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUEyQixlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFjLFdBQVcsRUFDRSxNQUFnQyxzQkFBc0IsQ0FBQztBQU96RixPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQzs7OztBQU9yRixNQUFNLE9BQU8sZ0JBQWdCO0lBTXpCLFlBQXNCLFVBQXNCLEVBQWdDLFFBQWdCLEVBQWMsYUFBNEI7UUFBaEgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpsQyxhQUFRLEdBQUcsZ0NBQWdDLENBQUM7UUFDL0MsbUJBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUd2QyxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsSUFBSSxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssY0FBYyxDQUFDLFFBQWtCO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDO1FBQ25DLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzVCLElBQUksSUFB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aHVtYW4gbW9kZXJhdG9ycyBieSBhZGRpbmcsIGNoZWNraW5nIG91dCBhbmQgY29tcGxldGluZyB3b3JrIGl0ZW1zLiBTdG9yZSBVc2VyIEdlbmVyYXRlZCBDb250ZW50IHRvIHRoZSBkYXRhYmFzZS4gIFRoaXMgd2lsbCBzdG9yZSBpdCB0d2ljZSwgb25jZSBpbiBzaG9ydC10ZXJtIHN0b3JhZ2UgaW4gaXQncyBleGFjdCBmb3JtIGFtZCBhZ2FpbiBpbiBsb25nIHRlcm0gc3RvcmFnZSBpbiBpdCdzIHJlZGFjdGVkIGFuZCBwc2V1ZG9ueW1pemVkIGZvcm0gXHJcbiAqXHJcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiAyLjEuMVxyXG4gKiBDb250YWN0OiBzdXBwb3J0QHR3b2hhdC5jb21cclxuICpcclxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSB0aGUgc3dhZ2dlciBjb2RlIGdlbmVyYXRvciBwcm9ncmFtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuLmdpdFxyXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXHJcbiAqLy8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXHJcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9lbmNvZGVyJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi4vbW9kZWwvcXVldWUnO1xyXG5cclxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU0lGVEFETUlOU2VydmljZUludGVyZmFjZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vc0lGVEFETUlOLnNlcnZpY2VJbnRlcmZhY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU0lGVEFETUlOU2VydmljZSBpbXBsZW1lbnRzIFNJRlRBRE1JTlNlcnZpY2VJbnRlcmZhY2Uge1xyXG5cclxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwczovL2xvY2FsaG9zdDozMDAwL2FwaS92MS8nO1xyXG4gICAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIEBPcHRpb25hbCgpQEluamVjdChCQVNFX1BBVEgpIGJhc2VQYXRoOiBzdHJpbmcsIEBPcHRpb25hbCgpIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBpZiAoYmFzZVBhdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGggfHwgY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXHJcbiAgICAgKiBAcmV0dXJuIHRydWU6IGNvbnN1bWVzIGNvbnRhaW5zICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgZmFsc2U6IG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb25zdW1lIG9mIGNvbnN1bWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtID09PSBjb25zdW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGEgY2xpZW50IGFuZCBhbGwgdGhlaXIgZGF0YVxyXG4gICAgICogVGhpcyB3aWxsIGRlbGV0ZSBhbGwgZGF0YSB3ZSBoYXZlIG9uIGEgY2xpZW50LiBUeXBpY2FsbHkgY2FsbGVkIGFmdGVyIGEgY2xpZW50IGxlYXZlcyBcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZCBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgY2xpZW50XHJcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxyXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlQ2xpZW50KGNsaWVudElkOiBudW1iZXIsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8UXVldWU+O1xyXG4gICAgcHVibGljIGRlbGV0ZUNsaWVudChjbGllbnRJZDogbnVtYmVyLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8UXVldWU+PjtcclxuICAgIHB1YmxpYyBkZWxldGVDbGllbnQoY2xpZW50SWQ6IG51bWJlciwgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxRdWV1ZT4+O1xyXG4gICAgcHVibGljIGRlbGV0ZUNsaWVudChjbGllbnRJZDogbnVtYmVyLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgaWYgKGNsaWVudElkID09PSBudWxsIHx8IGNsaWVudElkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgY2xpZW50SWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBkZWxldGVDbGllbnQuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcclxuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0PFF1ZXVlPignZGVsZXRlJyxgJHt0aGlzLmJhc2VQYXRofS9pbmJveC9jbGllbnQvJHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGNsaWVudElkKSl9YCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYSBxdWV1ZVxyXG4gICAgICogVGhpcyB3aWxsIHJlbW92ZSB0aGlzIHF1ZXVlIGFuZCBpZiB0aGVyZSBhcmUgY29udGVudCBpbnNpZGUgaXQgdGhlbiB0aGF0IHRvby4gIElmIHlvdSBhcmUganVzdCB0cnlpbmcgdG8gcmVtb3ZlIGNvbnRlbnQgdGhlbiB5b3Ugc2hvdWxkIHVzZSAuL2l0ZW1zIEFQSSBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSBxdWV1ZUlkIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBxdWV1ZVxyXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZVF1ZXVlKHF1ZXVlSWQ6IHN0cmluZywgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxRdWV1ZT47XHJcbiAgICBwdWJsaWMgZGVsZXRlUXVldWUocXVldWVJZDogc3RyaW5nLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8UXVldWU+PjtcclxuICAgIHB1YmxpYyBkZWxldGVRdWV1ZShxdWV1ZUlkOiBzdHJpbmcsIG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8UXVldWU+PjtcclxuICAgIHB1YmxpYyBkZWxldGVRdWV1ZShxdWV1ZUlkOiBzdHJpbmcsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICBpZiAocXVldWVJZCA9PT0gbnVsbCB8fCBxdWV1ZUlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgcXVldWVJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGRlbGV0ZVF1ZXVlLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucmVxdWVzdDxRdWV1ZT4oJ2RlbGV0ZScsYCR7dGhpcy5iYXNlUGF0aH0vaW5ib3gvcXVldWUvJHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHF1ZXVlSWQpKX1gLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcclxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHF1ZXVlXHJcbiAgICAgKiBBIFF1ZXVlIGlzIGEgZ3JvdXAgb2Ygd29yayB0byBiZSBkb25lIGJ5IG1vZGVyYXRvcnMuICBUaGlzIHdpbGwgY3JlYXRlIG9yIHVwZGF0ZSBhIHF1ZXVlLlxyXG4gICAgICogQHBhcmFtIHF1ZXVlSWQgVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIHF1ZXVlXHJcbiAgICAgKiBAcGFyYW0gYm9keSBUaGUgcXVldWUgdG8gYmUgYWRkZWRcclxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXRRdWV1ZShxdWV1ZUlkOiBzdHJpbmcsIGJvZHk/OiBRdWV1ZSwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxRdWV1ZT47XHJcbiAgICBwdWJsaWMgcHV0UXVldWUocXVldWVJZDogc3RyaW5nLCBib2R5PzogUXVldWUsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxRdWV1ZT4+O1xyXG4gICAgcHVibGljIHB1dFF1ZXVlKHF1ZXVlSWQ6IHN0cmluZywgYm9keT86IFF1ZXVlLCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PFF1ZXVlPj47XHJcbiAgICBwdWJsaWMgcHV0UXVldWUocXVldWVJZDogc3RyaW5nLCBib2R5PzogUXVldWUsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICBpZiAocXVldWVJZCA9PT0gbnVsbCB8fCBxdWV1ZUlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgcXVldWVJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHB1dFF1ZXVlLicpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXHJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBodHRwQ29udGVudFR5cGVTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckNvbnRlbnRUeXBlKGNvbnN1bWVzKTtcclxuICAgICAgICBpZiAoaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0PFF1ZXVlPigncHV0JyxgJHt0aGlzLmJhc2VQYXRofS9pbmJveC9xdWV1ZS8ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocXVldWVJZCkpfWAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcclxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19