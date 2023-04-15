import { createAction, props } from '@ngrx/store';


export const setEmail = createAction('SetEmail',
props<{email: string}>());

export const setMessage = createAction('SetMessage',
props<{message: string}>());

export const setVisible = createAction('SetVisible',
props<{visible: boolean}>());
