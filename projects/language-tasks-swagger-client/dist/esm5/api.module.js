import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { DefaultService } from './api/default.service';
import { SIFTADMINService } from './api/sIFTADMIN.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    ApiModule.ɵmod = i0.ɵɵdefineNgModule({ type: ApiModule });
    ApiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(i0.ɵɵinject(ApiModule, 12), i0.ɵɵinject(i1.HttpClient, 8)); }, providers: [
            DefaultService,
            SIFTADMINService
        ], imports: [[]] });
    return ApiModule;
}());
export { ApiModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ApiModule, [{
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
            }] }, { type: i1.HttpClient, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbmd1YWdlLXRhc2tzLXN3YWdnZXItY2xpZW50LyIsInNvdXJjZXMiOlsiYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUloRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUUzRDtJQWdCSSxtQkFBcUMsWUFBdUIsRUFDbkMsSUFBZ0I7UUFDckMsSUFBSSxZQUFZLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDdkY7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0Q7Z0JBQy9FLDBEQUEwRCxDQUFDLENBQUM7U0FDL0Q7SUFDTCxDQUFDO0lBaEJhLGlCQUFPLEdBQXJCLFVBQXNCLG9CQUF5QztRQUMzRCxPQUFPO1lBQ0gsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxDQUFFO1NBQzlFLENBQUM7SUFDTixDQUFDO2lEQU5RLFNBQVM7cUdBQVQsU0FBUyxjQVFpQyxTQUFTLHFEQVpuRDtZQUNULGNBQWM7WUFDZCxnQkFBZ0I7U0FBRSxZQUxOLEVBQUU7b0JBVGxCO0NBa0NDLEFBMUJELElBMEJDO1NBbEJZLFNBQVM7a0RBQVQsU0FBUztjQVJyQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFPLEVBQUU7Z0JBQ2hCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQU8sRUFBRTtnQkFDaEIsU0FBUyxFQUFFO29CQUNULGNBQWM7b0JBQ2QsZ0JBQWdCO2lCQUFFO2FBQ3JCO3NDQVNzRCxTQUFTO3NCQUE5QyxRQUFROztzQkFBSSxRQUFROztzQkFDcEIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5cclxuaW1wb3J0IHsgRGVmYXVsdFNlcnZpY2UgfSBmcm9tICcuL2FwaS9kZWZhdWx0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTSUZUQURNSU5TZXJ2aWNlIH0gZnJvbSAnLi9hcGkvc0lGVEFETUlOLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiAgICAgIFtdLFxyXG4gIGRlY2xhcmF0aW9uczogW10sXHJcbiAgZXhwb3J0czogICAgICBbXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERlZmF1bHRTZXJ2aWNlLFxyXG4gICAgU0lGVEFETUlOU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGlNb2R1bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb25GYWN0b3J5OiAoKSA9PiBDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEFwaU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogQ29uZmlndXJhdGlvbiwgdXNlRmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnkgfSBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBBcGlNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcGlNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpbiB5b3VyIGJhc2UgQXBwTW9kdWxlIG9ubHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaHR0cCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIGltcG9ydCB0aGUgSHR0cENsaWVudE1vZHVsZSBpbiB5b3VyIEFwcE1vZHVsZSEgXFxuJyArXHJcbiAgICAgICAgICAgICdTZWUgYWxzbyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDU3NScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=