import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ILoginFormValue } from './interfaces';
import { FormService } from './services';
import { FormGroup } from '@angular/forms';
import { FormControl } from './enums';

@Component({
  selector: 'pr-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  viewProviders: [FormService],
})
export class LoginFormComponent implements OnInit {
  @Output()
  readonly login = new EventEmitter<ILoginFormValue>();

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

  logIn(): void {
    this.login.emit(this.formService.value);
  }
}
