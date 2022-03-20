import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const isValid = EMAIL_REGEXP.test(control.value);

    if (!isValid) {
      return {
        rfcError: {
          msg: 'Email should be in complain with RFC standart!',
        },
      };
    }

    return null;
  }
}

const REG_EXP_PART_1 =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))/;
const REG_EXP_PART_2 =
  /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EMAIL_REGEXP = new RegExp(
  `${REG_EXP_PART_1.source}${REG_EXP_PART_2.source}`
);
