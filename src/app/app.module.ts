import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesModule}  from './features/Courses/courses.module';
import { RegistrationModule } from './features/Registration/registration.module';
import { LoginModule } from './features/login/login.module';
@NgModule({
  declarations: [
    AppComponent,
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
