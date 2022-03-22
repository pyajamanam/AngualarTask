import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorsFeatureKey, AuthorsState } from './authors.reducer';

const getCoursesState = createFeatureSelector<AuthorsState>(authorsFeatureKey);

export const getAddedAuthors = createSelector(
  getCoursesState,
  (state: AuthorsState) => state.addedAuthors
);

export const getAuthors = createSelector(
  getCoursesState,
  (state: AuthorsState) => state.authors
);
