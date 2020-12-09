import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';

const userFeatureSelector = createFeatureSelector<State>('user');

export const getUsers = createSelector(userFeatureSelector, state => Object.values(state.entities));
export const getError = createSelector(userFeatureSelector, state => state);

export const selectEntity = createSelector(
    userFeatureSelector,
    (state, props) => state.entities[props.id]
);



