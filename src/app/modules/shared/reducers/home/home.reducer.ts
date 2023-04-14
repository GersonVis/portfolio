import { createReducer, on } from '@ngrx/store';
import { sendOk } from './home.actions';

export const initialState = false;

export const homeReducer = createReducer(
  initialState,
  on(sendOk, (state) => !state),
);