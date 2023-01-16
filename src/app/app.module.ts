import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AuthModule} from '@auth0/auth0-angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';

import {LoginComponent} from './components/public/login/login.component';
import {LandingComponent} from './components/weather/landing/landing.component';
import {PageNotFoundComponent} from './components/public/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    AuthModule.forRoot({
      domain: '',
      clientId: '',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
