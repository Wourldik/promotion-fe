import { Component } from '@angular/core';

import { ISignupFormValue } from './shared/sign-up-form';
import { SignUpService } from './services';

@Component({
  selector: 'pr-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
  constructor(private signupService: SignUpService) {}

  onSignUp(value: ISignupFormValue): void {
    this.signupService.signUp(value);
  }

  onSignWithGoogle(): void {
    this.signupService.signUpWithGoogle();
  }

  onSignWithFacebook(): void {
    this.signupService.signUpWithFacebook();
  }
}
