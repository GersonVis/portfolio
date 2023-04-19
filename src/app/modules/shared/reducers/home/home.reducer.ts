import { createReducer, on } from '@ngrx/store';
import {  setVisible, setData } from './home.actions';
import { state } from '@angular/animations';
import { Prueba, initialState } from './home.model';



export const homeReducer = createReducer(
  initialState,
  on(setData, (state, action) =>  {
    return {...state, visible: true, message: action.message, email: action.email, date: action.date}
  }),
  on(setVisible, (state, action) =>  {
    return {...state, visible: true}
  }))
