import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const ALPHA_NUMERIC_ONLY = /^([A-Za-z0-9])+$/;

export function alphaNumeric(): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value && !c.value.match(ALPHA_NUMERIC_ONLY)) {
      return { alphaNumeric: true };
    }
    return null;
  };
}
