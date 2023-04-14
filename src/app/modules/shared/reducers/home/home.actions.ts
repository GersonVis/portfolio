import { createAction, props } from '@ngrx/store';

export const sendOk = createAction('[Home Component] SendOk',
props<{message: string, state: true}>);
