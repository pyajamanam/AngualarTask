import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from './user.reducer';

const getUserState = createFeatureSelector<UserState>(userFeatureKey);

export const selectName = createSelector(
  getUserState,
  (state: UserState) => state.name
);

export const selectIsAdmin = createSelector(
  getUserState,
  (state: UserState) => state.isAdmin
);
