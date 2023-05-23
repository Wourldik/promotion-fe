import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ISignupFormValue } from './interfaces';
import { FormControl } from './enums';
import { FormService } from './services';

@Component({
  selector: 'pr-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  viewProviders: [FormService],
})
export class SignUpFormComponent implements OnInit {
  @Output()
  readonly signup = new EventEmitter<ISignupFormValue>();

  get form(): FormGroup {
    return this.formService.form;
  }

  get valid(): boolean {
    return this.formService.valid;
  }

  readonly formControl = FormControl;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.formService.buildForm();
  }

  onSignUp(): void {
    this.signup.emit(this.form.value);
  }
}
