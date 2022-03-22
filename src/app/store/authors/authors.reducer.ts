import { Action, createReducer, on } from '@ngrx/store';
import { DTO } from 'src/app/shared/shared.module';

import * as Actions from './authors.actions';

export const authorsFeatureKey = 'authors';

export interface AuthorsState {
  authors: DTO.IdName[];
  addedAuthors: DTO.IdName[]; // ?
}

const initialState: AuthorsState = {
  authors: [],
  addedAuthors: [],
};

const reducer = createReducer(
  initialState,
  on(Actions.requestAddAuthorSuccess, (state, action) => {
    return {
      ...state,
      authors: [...state.authors, action.payload.author],
    };
  }),
  on(Actions.requestAuthorsSuccess, (state, action) => {
    return {
      ...state,
      authors: action.payload.authors,
    };
  })
);

export const authorsReducer = (
  state: AuthorsState,
  action: Action
): AuthorsState => reducer(state, action);
