import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { emailCustomValidator } from "src/app/shared/directives/email.util";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  public registerForm: FormGroup;
  public isSubmited = false;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(6)]),
      email: new FormControl("", [Validators.required, emailCustomValidator()]),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isSubmited = true;
    console.log(this.registerForm);
  }
}
