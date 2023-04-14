import { createReducer, on } from '@ngrx/store';
import { sendOk } from './home.actions';


export interface DataHome{
  message: String,
  email: String,
  visible: boolean
}
export const initialState: DataHome= {
  message: "",
  email: "",
  visible: false
};
export const homeReducer = createReducer(
  initialState,
  on(sendOk, (state, {dataHome})=>({ message: "gersonn",
    email: "visoso126",
    visible: true}))
);