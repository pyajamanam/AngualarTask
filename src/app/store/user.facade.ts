import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { requestCurrentUser, requestCurrentUserFail } from './user.actions';
import { UserState } from './user.reducer';
import { selectIsAdmin, selectName } from './user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserStateFacade {
  name$: Observable<string>;
  isAdmin$: Observable<boolean>;

  constructor(
    private store: Store<UserState>,
    private authFacade: AuthStateFacade
  ) {
    this.name$ = store.pipe(select(selectName));
    this.isAdmin$ = store.pipe(select(selectIsAdmin));

    this.authFacade.isAuthorized$.subscribe({
      next: (isAuthorized) => {
        if (isAuthorized) {
          this.getCurrentUser();
        } else {
          this.store.dispatch(requestCurrentUserFail());
        }
      },
    });
  }

  getCurrentUser() {
    console.log('getCurrentUser');
    this.store.dispatch(requestCurrentUser());
  }
}
