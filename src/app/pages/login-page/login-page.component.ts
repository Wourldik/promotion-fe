import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

import { ILoginFormValue } from './shared/login-form';

@Component({
  selector: 'pr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private auth: AngularFireAuth) {}

  onLogin(value: ILoginFormValue): void {
    this.auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then(() => {
        console.log('Signed in successfully!');
      });
  }

  onGoogleLogin() {
    this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then(() => {
        console.log('Signed in with Google successfully!');
      })
      .catch(error => {
        console.error('Error signing in with Google:', error);
      });
  }

  onFacebookLogin(): void {
    this.auth
      .signInWithPopup(new FacebookAuthProvider())
      .then(() => {
        console.log('Signed in with Facebook successfully!');
      })
      .catch(error => {
        console.error('Error signing in with Google:', error);
      });
  }
}
