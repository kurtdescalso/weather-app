import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./components/public/login/login.component";
import {LandingComponent} from "./components/weather/landing/landing.component";
import {PageNotFoundComponent} from './components/public/page-not-found/page-not-found.component';
import {ResultComponent} from './components/weather/result/result.component';

import {AuthGuard} from '@auth0/auth0-angular';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "home", component: LandingComponent, canActivate: [AuthGuard]},
  {path: "result", component: ResultComponent, canActivate: [AuthGuard]},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
