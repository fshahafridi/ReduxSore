import { Action } from '@ngrx/store'

export enum CoreActionTypes {
    ErrorEncountered = '[GlobalErrorMessage] ErrorEncountered'
  
}
;
export class ErrorEncountered implements Action {
    readonly type = CoreActionTypes.ErrorEncountered;
    constructor(public payload: string) {
    }
};

export type CoreActions = ErrorEncountered;


