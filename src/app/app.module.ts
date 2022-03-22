import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/Courses/courses.module';
import { RegistrationModule } from './features/Registration/registration.module';
import { LoginModule } from './features/login/login.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { effects, appReducer } from '../app/store/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserModule } from './services/user.module';
import { AuthModule } from './authorization/authorization.module';
import { AuthorsStoreModule } from './store/authors-store.module';
import { CoursesStoreModule } from './store/courses-store.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    RegistrationModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: environment.production,
      autoPause: true,
    }),
     LoginModule,
     UserModule,
     AuthModule,
     AuthorsStoreModule,
     CoursesStoreModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
