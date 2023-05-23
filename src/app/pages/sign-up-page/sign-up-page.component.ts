import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { ISignupFormValue } from './shared/sign-up-form';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'pr-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  onSignUp(value: ISignupFormValue): void {
    this.auth
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user) {
          // Save additional user information to Firestore
          this.firestore
            .collection('users')
            .doc(user.uid)
            .set({
              name: value.name,
              age: value.age,
              email: value.email,
            })
            .then(() => {
              console.log(
                'User registered successfully and additional information saved to Firestore!'
              );
            })
            .catch(error => {
              console.error('Error saving additional user information:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  }
}
