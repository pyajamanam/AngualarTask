import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    public loginService: AuthService
  ) {}

  userModel = {
    name: 'fname',
    email: 'fname.lname@gmail.com',
    password: 'fname1*'
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.REQUEST_LOGIN),
    switchMap((action: AuthActions.RequestLogin) =>
    this.http.delete('http://localhost:3000/logout').pipe(
        map((res: any) => console.log(res)),
        map((res: any) => new AuthActions.RequestLoginSuccess(res)),
        catchError(error => of(new AuthActions.RequestLoginFail(error)))
      )
    )
  );
}
