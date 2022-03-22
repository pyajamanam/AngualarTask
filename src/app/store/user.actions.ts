import { createAction, props } from '@ngrx/store';

export const requestCurrentUser = createAction('requestCurrentUser');

export const requestCurrentUserSuccess = createAction(
  'requestCurrentUserSuccess',
  props<{ name: string; isAdmin: boolean }>()
);

export const requestCurrentUserFail = createAction('requestCurrentUserFail');
