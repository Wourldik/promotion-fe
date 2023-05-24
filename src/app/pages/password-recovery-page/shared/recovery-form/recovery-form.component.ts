import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'pr-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.scss'],
})
export class RecoveryFormComponent {
  @Output()
  readonly resetPassword = new EventEmitter<string>();
  constructor() {}

  emailControl = new FormControl(
    null,
    Validators.compose([Validators.required, Validators.email])
  );

  onResetPassword(): void {
    this.resetPassword.emit(this.emailControl.value);
  }
}
