import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { AuthorsService } from 'src/app/services/authors.service';

import * as AuthorsActions from './authors.actions';

@Injectable()
export class AuthorsEffects {
  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsActions.requestAddAuthor),
      mergeMap((action) =>
        this.authorsService.addAuthor(action.payload.authorName).pipe(
          map((response) => {
            if (response.successful) {
              return AuthorsActions.requestAddAuthorSuccess({
                payload: {
                  author: response.result,
                },
              });
            }

            throw new Error();
          }),
          catchError(() => of(AuthorsActions.requestAddAuthorFail()))
        )
      )
    )
  );

  getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsActions.requestAuthors),
      mergeMap(() =>
        this.authorsService.getAll().pipe(
          map((response) => {
            if (response.successful) {
              return AuthorsActions.requestAuthorsSuccess({
                payload: { authors: response.result },
              });
            }

            throw new Error();
          }),
          catchError(() => of(AuthorsActions.requestAuthorsFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}
}
