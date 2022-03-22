import { createAction, props } from '@ngrx/store';
import { DTO } from 'src/app/shared/shared.module';

export const requestAuthors = createAction('requestAuthors');

export const requestAuthorsSuccess = createAction(
  'requestAuthorsSuccess',
  props<{ payload: { authors: DTO.IdName[] } }>()
);

export const requestAuthorsFail = createAction('requestAuthorsFail');

export const requestAddAuthor = createAction(
  'requestAddAuthor',
  props<{ payload: { authorName: string } }>()
);

export const requestAddAuthorSuccess = createAction(
  'requestAddAuthorSuccess',
  props<{ payload: { author: DTO.IdName } }>()
);

export const requestAddAuthorFail = createAction('requestAddAuthorFail');

export const resetAddedAuthors = createAction('resetAddedAuthors');
