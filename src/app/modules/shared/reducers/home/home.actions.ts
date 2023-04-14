import { createAction, props } from '@ngrx/store';
import { DataHome } from './home.reducer';


export const sendOk = createAction('[Home Component] SendOk',
props<{dataHome: DataHome}>());
