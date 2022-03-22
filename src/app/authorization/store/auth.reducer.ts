
import { Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface State {
  isAuthorized: boolean;
  token: string;
  errMsg: string;
}

const authFeatureKey: State = {
  isAuthorized: false,
  token: '',
  errMsg: ''
};

export function authReducer(
  state = authFeatureKey,
  action : Action
) : State{
    const actionType = action as  AuthActions.AuthActions
  switch (action.type) {
      case AuthActions.REQUEST_LOGIN:
    
      case AuthActions.REQUEST_LOGIN_SUCCESS:
        return {
          ...state,
          isAuthorized : true
        };
        case AuthActions.REQUEST_LOGIN_FAIL:
          return {
            ...state,
            isAuthorized : false
          };
    // case AuthActions.LOGOUT:
    //   return {
    //     ...state,
    //     user: null
    //   };
    // case AuthActions.LOGIN_START:
    // case AuthActions.SIGNUP_START:
    //   return {
    //     ...state,
    //     authError: null,
    //     loading: true
    //   };
    // case AuthActions.AUTHENTICATE_FAIL:
    //   return {
    //     ...state,
    //     user: null,
    //     authError: action.payload,
    //     loading: false
    //   };
    // case AuthActions.CLEAR_ERROR:
    //   return {
    //     ...state,
    //     authError: null
    //   };
    default:
      return {...state};
  }
}
