import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidatorDirective,
      multi: true,
    },
  ],
})
export class NameValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const isValid = NAME_REGEXP.test(control.value);

    if (!isValid) {
      return {
        charactersError: {
          msg: 'Name should contain only letters and numbers and not to be null',
        },
      };
    }

    return null;
  }
}

const NAME_REGEXP = new RegExp('^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$');
