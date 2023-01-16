import {Component} from '@angular/core';
import {Router} from '@angular/router'

import {Auth0Service, ILoginResponse} from '../../../services/auth/auth0.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;

  constructor(
    private router: Router,
    private auth0: Auth0Service,
  ) {}

  login() {
    this.isLoading = true;
    this.auth0.login()
      .then((data: ILoginResponse) => {
        localStorage.setItem("auth0_token", data.token);
        this.isLoading = false;
        this.router.navigate(["home"]);
      })
      .catch((error) => {
        this.isLoading = false;
        alert(error);
      })
  }
}
