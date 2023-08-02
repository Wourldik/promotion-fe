import { Injectable } from '@angular/core';
import {BaseFormService} from "@shared/services";
import {FormBuilder, Validators} from "@angular/forms";

import {IArticleFormValue} from "../interfaces";
import {FormControl} from "../enums";

@Injectable()
export class FormService extends BaseFormService<IArticleFormValue> {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  buildForm(): void {
    this.build({
      [FormControl.TITLE]: this.fb.control(
        null,
        Validators.compose([Validators.required])
      ),
      [FormControl.TEXT]: this.fb.control(
        null,
        Validators.compose([Validators.required])
      ),
      [FormControl.PHOTO]: this.fb.control(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }
}
