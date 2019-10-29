import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import * as AppSelectors from '../reducer/app.reducer'

const selectAppFeatureState = createFeatureSelector<AppState>('appState');

 

export const loadUserName = createSelector(
    selectAppFeatureState,
    AppSelectors.loadAppState
);




