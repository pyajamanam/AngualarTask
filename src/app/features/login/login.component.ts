import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  public model: any = {};

  public emailValid = true;
  public passwordValid = true;
  lwidth: number = 75;
  lheight: number = 40;
  ngOnInit(): void {
  }
@Output() newItemEvent = new EventEmitter<string>();

  onSubmit(loginForm: NgForm) {
    debugger;
    this.newItemEvent.emit("Hi");
    console.log("form: ", loginForm);
  }
}
