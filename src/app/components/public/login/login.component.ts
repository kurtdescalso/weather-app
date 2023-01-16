import {Component} from '@angular/core';
import {Router} from '@angular/router'

import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    public auth: AuthService,
  ) {}

  login() {
    this.router.navigate(["home"])
  }
}
