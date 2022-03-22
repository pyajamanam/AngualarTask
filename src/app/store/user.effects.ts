import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { UserService } from '../services/user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  requestCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.requestCurrentUser),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map((response) => {
            const isAdmin = response != null && response.role === 'admin';
            const name = response != null ? response.name : '';

            return UserActions.requestCurrentUserSuccess({ isAdmin, name });
          }),
          catchError(() => of(UserActions.requestCurrentUserFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
