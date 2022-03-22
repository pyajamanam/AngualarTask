import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  isAdmin: boolean;
  name: string;
}

const initialState: UserState = {
  isAdmin: false,
  name: '',
};

const reducer = createReducer(
  initialState,
  on(
    Actions.requestCurrentUserSuccess,
    (state, payload: { isAdmin: boolean; name: string }) => {
      return payload;
    }
  ),
  on(Actions.requestCurrentUserFail, (state) => initialState)
);

export const userReducer = (state: UserState, action: Action): UserState =>
  reducer(state, action);
