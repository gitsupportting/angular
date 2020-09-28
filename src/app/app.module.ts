import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ApiModule as ApiClassifyTextModule,
  BASE_PATH,
} from 'classify-text-swagger-client';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SubnavModule } from './subnav/subnav.module';

import { SentryErrorHandler } from 'src/app/shared-components/sentry.service';

import { ThemeModule, lightTheme, darkTheme } from './theme';

import { ApiModule as ApiRuleModule } from 'rules-swagger-client';
import 'hammerjs';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LanguageTasksEffects } from './store/effects/language-tasks.effects';
import { SharedComponentsModule } from './shared-components/shared-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LanguageTasksEffects]),
    MainModule,
    SubnavModule,
    HttpClientModule,
    ApiClassifyTextModule,
    ApiRuleModule,
    HammerModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'dark',
    }),
    SharedComponentsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    { provide: BASE_PATH, useValue: environment.apiBaseUrl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
