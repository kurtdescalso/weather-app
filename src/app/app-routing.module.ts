import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./components/public/login/login.component";
import {LandingComponent} from "./components/weather/landing/landing.component";
import {PageNotFoundComponent} from './components/public/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: LandingComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
