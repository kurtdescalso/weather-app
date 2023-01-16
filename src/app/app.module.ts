import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AuthModule} from '@auth0/auth0-angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {environment as env} from 'src/environments/environment';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import {LoginComponent} from './components/public/login/login.component';
import {LandingComponent} from './components/weather/landing/landing.component';
import {PageNotFoundComponent} from './components/public/page-not-found/page-not-found.component';
import {NavigationBarComponent} from './components/public/navigation-bar/navigation-bar.component';
import {ResultComponent} from './components/weather/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTableModule,
    AuthModule.forRoot({
      domain: env.auth0.domain,
      clientId: env.auth0.clientId,
      redirectUri: env.auth0.redirectUri,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
