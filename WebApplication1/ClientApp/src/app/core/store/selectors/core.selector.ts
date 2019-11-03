import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoreModuleState } from "..";

export const getReferencesState = createFeatureSelector<CoreModuleState>('coreState');
//select the course node from the store..
export const  getErrorState = createSelector(getReferencesState, state => state.errorState);

export const getErrorMessage = createSelector(
    getErrorState,
    state=>state.errorMessage
);
