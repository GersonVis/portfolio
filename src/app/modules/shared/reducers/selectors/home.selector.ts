import { createFeatureSelector, createSelector } from "@ngrx/store";

import { Prueba } from "../models/scoreboard.model";



export const getSendOk = createFeatureSelector<Prueba>('messageSend')

export const getEmail = createSelector(
    getSendOk,
    (state:Prueba) => state.email
)

export const getMessage = createSelector(
    getSendOk,
    (state:Prueba) => state.message
)

export const getVisible = createSelector(
    getSendOk,
    (state:Prueba) => state.visible
)