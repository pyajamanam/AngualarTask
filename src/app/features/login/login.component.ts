import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { AuthService } from "src/app/authorization/services/auth.service";
import { AppState } from "../../store/index";
import { RequestLogin } from "src/app/authorization/store/auth.actions";
import { getIsAuthorized } from "src/app/authorization/store/auth.selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public model: any = {};

  public emailValid = true;
  public passwordValid = true;

  constructor(
    public loginService : AuthService,
    private store: Store<AppState>,
    ){}
   
lwidth:number=40;
lheight :number=40;
isAuthorized$ : any;
userModel = {
  name: 'fname',
  email: 'fname.lname@gmail.com',
  password: 'fname1*'
}
authStore : any;
  onSubmit(loginForm: NgForm) {
   
  
    // this.loginService.login(this.userModel).subscribe((res: any) => {
    //   sessionStorage.setItem("token", res.result)
    //   console.log(res);
    // })
    this.store.dispatch(new RequestLogin());
   this.isAuthorized$ = this.store.pipe(select(getIsAuthorized));
   this.store.select(state => state).subscribe(data => {
    console.log('data', data);
  });
   this.isAuthorized$.subscribe((res : any) => {
    console.log('isAuthorized$' +res);
   })
  }
}
