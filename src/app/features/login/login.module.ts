import { EventEmitter, NgModule, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, NgForm } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [LoginComponent],
})
export class LoginModule {

  
 
}
