import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FacebookAuthProvider, GoogleAuthProvider, User } from 'firebase/auth';
import { Router } from '@angular/router';

import { ISignupFormValue } from '../shared/sign-up-form';

@Injectable()
export class SignUpService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  signUp(value: ISignupFormValue): void {
    this.auth
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user) {
          this.saveUserInfo(user as User);
        }
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  }

  signUpWithGoogle() {
    this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then(result => {
        console.log('result', result);
        // Save additional user information to Firestore or your backend
        this.saveUserInfo(result.user as User);

        // Optionally, redirect the user to a different page after successful registration
        // this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        console.error('Error signing up with Google:', error);
        // Optionally, show an error message to the user
      });
  }

  signUpWithFacebook() {
    this.auth
      .signInWithPopup(new FacebookAuthProvider())
      .then(result => {
        this.saveUserInfo(result.user as User);
        // Optionally, redirect the user to a different page after successful registration
        // this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        console.error('Error signing up with Facebook:', error);
        // Optionally, show an error message to the user
      });
  }

  private saveUserInfo(user: User | null): void {
    if (!user) {
      return;
    }
    // Save additional user information to Firestore
    this.firestore
      .collection('users')
      .doc(user.uid)
      .set({
        name: user.displayName,
        age: 0,
        email: user.email,
      })
      .then(() => {
        console.log(
          'User registered successfully and additional information saved to Firestore!'
        );
        this.redirectToLogin();
      })
      .catch(error => {
        console.error('Error saving additional user information:', error);
      });
  }

  private redirectToLogin(): void {
    this.router.navigate(['./login']);
  }
}
