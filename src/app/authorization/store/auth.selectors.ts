import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/index';

export const getEventState = createFeatureSelector<AppState>("auth");

export const getAuthState = createSelector(
  getEventState,
  (state: AppState) =>
     state.auth
);

export const gettoken = createSelector(
    getAuthState,
  state => state.token
);

export const getIsAuthorized = createSelector(
    getAuthState,
  state => state.isAuthorized
);

// export function getToken(state$: Observable<AppState>): Observable<any> {
//     return state$.select(state => state.token);
//   }