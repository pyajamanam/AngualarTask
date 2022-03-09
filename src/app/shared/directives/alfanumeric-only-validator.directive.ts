import { Directive } from "@angular/core";
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { alphaNumeric } from "./alfanumeric-only.util";

@Directive({
  selector: "[AlphaNumeric]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AlphaNumericValidator,
      multi: true,
    },
  ],
})
export class AlphaNumericValidator implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    return alphaNumeric()(control);
  }
}
