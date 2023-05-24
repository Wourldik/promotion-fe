import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth";

import {ILoginFormValue} from "../shared/login-form";

@Injectable()
export class LoginService {
  constructor(
    private auth: AngularFireAuth,
  ) {}

  login(value: ILoginFormValue): void {
    this.auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then(() => {
        console.log('Signed in successfully!');
      });
  }

  googleLogin() {
    this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then(() => {
        console.log('Signed in with Google successfully!');
      })
      .catch(error => {
        console.error('Error signing in with Google:', error);
      });
  }

  facebookLogin(): void {
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
