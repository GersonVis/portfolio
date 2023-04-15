import { createReducer, on } from '@ngrx/store';
import { setMessage, setEmail, setVisible } from './home.actions';
import { state } from '@angular/animations';
import { Prueba, initialState } from '../models/scoreboard.model';





export const homeReducer = createReducer(
  initialState,
  on(setMessage, (state, action) =>  {
    return {...state, nombre: action.message}
  }),
  on(setEmail, (state, action) =>  {
    return {...state, nombre: action.email}
  }),
  on(setVisible, (state, action) =>  {
    return {...state, nombre: action.visible}
  }),
);