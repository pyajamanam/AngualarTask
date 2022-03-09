import { Directive } from "@angular/core";
import {
  Validator,
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { emailCustomValidator } from "./email.util";

@Directive({
  selector: "[AppEmailCustomValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailCustomValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailCustomValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return emailCustomValidator()(control);
  }
}
