import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { AppRouting } from './app.routing';
import { SharedsModule } from './shareds/shareds.module';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helper/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material';
import { PaginationConfig, PaginationModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    SharedsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    PaginationModule
  ],
  providers: [
    authInterceptorProviders,
    PaginationConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
