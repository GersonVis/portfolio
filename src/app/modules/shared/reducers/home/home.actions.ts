import { createAction, props } from '@ngrx/store';


export const setData = createAction('setData',
props<{email: string, message: string, date: Date}>());

export const setVisible = createAction('SetVisible',
props<{visible: boolean}>());
