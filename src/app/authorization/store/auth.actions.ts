import { Action } from '@ngrx/store';

export const REQUEST_LOGIN = 'requestLogin';
export const REQUEST_LOGIN_SUCCESS = 'requestLoginSuccess';
export const REQUEST_LOGIN_FAIL = 'requestLoginFail';
export const REQUEST_REGISTER = 'requestRegister';
export const REQUEST_REGISTER_SUCCESS = 'requestRegisterSuccess';
export const REQUEST_REGISTER_FAIL = 'requestRegisterFail';
export const REQUEST_LOGOUT = 'requestLogout';
export const REQUEST_LOGOUT_SUCCESS = 'requestLogoutSuccess';

export class RequestLogin implements Action {
  readonly type = REQUEST_LOGIN;
}

export class RequestLoginSuccess implements Action {
  readonly type = REQUEST_LOGIN_SUCCESS;
  constructor(public payload: { isAuthorized: boolean; token: string }) {}
    
}

export class RequestLoginFail implements Action {
  readonly type = REQUEST_LOGIN_FAIL;
  constructor(public payload: { isAuthorized: boolean; token: string }) {}
    
}


export type AuthActions =
  | RequestLogin | RequestLoginSuccess |RequestLoginFail;
  
