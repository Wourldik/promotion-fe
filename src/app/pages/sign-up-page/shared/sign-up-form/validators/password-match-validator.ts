import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { FormControl } from '../enums';

export function passwordMatchValidator(): ValidatorFn {
  // @ts-ignore
  return (formGroup: FormGroup): ValidationErrors | null => {
    const passwordControl = formGroup.get(FormControl.PASSWORD);
    const confirmPasswordControl = formGroup.get(FormControl.CONFIRM_PASSWORD);

    if (!confirmPasswordControl || !passwordControl) {
      return null;
    }

    passwordControl.value !== confirmPasswordControl.value
      ? confirmPasswordControl.setErrors({ passwordMismatch: true })
      : confirmPasswordControl.setErrors(null);

    return null;
  };
}
