import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseFormService } from '@shared/services';
import { ISignupFormValue } from '../interfaces';
import { FormControl } from '../enums';
import { passwordMatchValidator } from '../validators';

@Injectable()
export class FormService extends BaseFormService<ISignupFormValue> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  buildForm(): void {
    this.build(
      {
        [FormControl.NAME]: this.fb.control(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20),
          ])
        ),
        [FormControl.AGE]: this.fb.control(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(3),
          ])
        ),
        [FormControl.EMAIL]: this.fb.control(
          null,
          Validators.compose([Validators.required, Validators.email])
        ),
        [FormControl.PASSWORD]: this.fb.control(
          null,
          Validators.compose([Validators.required, Validators.minLength(8)])
        ),
        [FormControl.CONFIRM_PASSWORD]: this.fb.control(null),
        [FormControl.TERMS]: this.fb.control(false, Validators.requiredTrue),
      },
      { validators: passwordMatchValidator() }
    );
  }
}
