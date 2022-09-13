import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesModule}  from './features/Courses/courses.module';
import { RegistrationModule } from './features/Registration/registration.module';
import { LoginModule } from './features/login/login.module';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule
  ,RegistrationModule
,LoginModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
