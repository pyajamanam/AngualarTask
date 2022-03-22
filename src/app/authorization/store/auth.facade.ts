import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Actions } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { State } from "./auth.reducer";
import * as AuthActions from './auth.actions';
import { getIsAuthorized } from "./auth.selectors";

@Injectable()
export class AuthFacade {
    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private route: ActivatedRoute) {
    
      } 
      isAuthorized$ = this.store.pipe(select(getIsAuthorized));
      login(){
        this.store.dispatch(new AuthActions.RequestLogin());
      }

}