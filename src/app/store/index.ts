import { ActionReducerMap } from '@ngrx/store';
import { AuthEffects } from 'src/app/authorization/store/auth.effects';
import * as fromAuth from 'src/app/authorization/store/auth.reducer';

export interface AppState {
    auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer
};

export const effects: any[] = [AuthEffects];
