import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseFormService } from '@shared/services';
import { ILoginFormValue } from '../interfaces';
import { FormControl } from '../enums';

@Injectable()
export class FormService extends BaseFormService<ILoginFormValue> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  buildForm(): void {
    this.build({
      [FormControl.EMAIL]: this.fb.control(
        null,
        Validators.compose([Validators.required, Validators.email])
      ),
      [FormControl.PASSWORD]: this.fb.control(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }
}
