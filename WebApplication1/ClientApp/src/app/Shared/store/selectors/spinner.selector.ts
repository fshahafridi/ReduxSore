import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedModuleState } from "..";

export const getReferencesState = createFeatureSelector<SharedModuleState>('sharedState');
//select the course node from the store..
export const getSpinnerState = createSelector(getReferencesState, state => state.spinnerState);


export const toggeSpinner = createSelector(
    getSpinnerState,
    state=>state.visible
);


