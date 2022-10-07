import { AppState } from './app.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectDescription = createSelector(
  selectAppState,
  app => app.description
);

export const selectSomeString  = createSelector(
  selectAppState,
  app => app.someString
);
