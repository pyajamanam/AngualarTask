import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/authorization/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public model: any = {};

  public emailValid = true;
  public passwordValid = true;
  lwidth: number = 75;
  lheight: number = 40;
  ngOnInit(): void {
  }
@Output() newItemEvent = new EventEmitter<string>();

  onSubmit(form: NgForm) {
    debugger;
    this.newItemEvent.emit("Hi");
    console.log("form: ", form);

    if (form.valid) {
      console.log('form submitted');
      this.authService.login({
        email: this.model.email,
        password: this.model.password,
      });
    } else {
      Object.keys(form.controls).forEach((key) => {
        form.form.controls[key].markAsTouched();
      });
    }

  }
}
