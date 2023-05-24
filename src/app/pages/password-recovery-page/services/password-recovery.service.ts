import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable()
export class PasswordRecoveryService {
  constructor(
    private auth: AngularFireAuth,
  ) {}

  passwordReset(email: string): void {
    this.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('Password reset email sent.');
        // Optionally, show a success message to the user
      })
      .catch(error => {
        console.error('Error sending password reset email:', error);
        // Optionally, show an error message to the user
      });
  }
}
