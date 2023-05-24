import { Component } from '@angular/core';

import {PasswordRecoveryService} from "./services";

@Component({
  selector: 'pr-password-recovery-page',
  templateUrl: './password-recovery-page.component.html',
  styleUrls: ['./password-recovery-page.component.scss'],
})
export class PasswordRecoveryPageComponent {
  constructor(private passwordRecoveryService: PasswordRecoveryService) {}

  onPasswordReset(email: string): void {
    this.passwordRecoveryService.passwordReset(email);
  }
}
