import {Injectable} from '@angular/core';

export interface ILoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  constructor() {}

  login() {
    return new Promise<ILoginResponse>((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          token: 'sampleToken',
        });
      }, 2000);
    })
  }
}
