import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth";
import {Router} from "@angular/router";

import {ILoginFormValue} from "../shared/login-form";

@Injectable()
export class LoginService {
  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  login(value: ILoginFormValue): void {
    this.auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then(() => {
        this.router.navigate(['./dashboard']);
        console.log('Signed in successfully!');
      });
  }

  googleLogin() {
    this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then(() => {
        this.router.navigate(['./dashboard']);
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
        this.router.navigate(['./dashboard']);
        console.log('Signed in with Facebook successfully!');
      })
      .catch(error => {
        console.error('Error signing in with Google:', error);
      });
  }
}
