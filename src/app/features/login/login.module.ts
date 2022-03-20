import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from 'src/app/features/login/login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, FormsModule, LoginRoutingModule],
  exports: [LoginComponent],
})
export class LoginModule {}
