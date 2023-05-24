import { Component } from '@angular/core';

import { ILoginFormValue } from './shared/login-form';
import {LoginService} from "./services";

@Component({
  selector: 'pr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private loginService: LoginService) {}

  onLogin(value: ILoginFormValue): void {
    this.loginService.login(value);
  }

  onGoogleLogin() {
    this.loginService.googleLogin();
  }

  onFacebookLogin(): void {
    this.loginService.facebookLogin();
  }
}
