import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin,
    })
  }
}
