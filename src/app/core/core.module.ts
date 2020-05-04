import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {AuthGuardService} from '../auth/auth-guard.service';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthInterceptor} from '../shared/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoggingInterceptor} from '../shared/logging.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    NgbDropdownModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers:
    [
      AuthGuardService,
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
    ]
})

export class CoreModule {

}

