import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailCustomValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control?.value) {
      const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value);

      if (isValid) {
        return null;
      }

      return {
        emailvalidator: { emailValidator: true },
      };
    }
    return null;
  };
}
