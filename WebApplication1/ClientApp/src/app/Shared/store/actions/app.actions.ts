import { HeaderModel } from '../../models/header.model'
import { Action } from '@ngrx/store'

export enum AppActionTypes {
    ChangeUserName = '[Header Component] ChangeUserName',
    ShowSpinner = '[Spinner Component] ShowSpinner',
    HideSpinner = '[Hide Component] HideSpinner',

}
;
export class ChangeUserName implements Action {
    readonly type = AppActionTypes.ChangeUserName;
    constructor(public payload: HeaderModel) {
    }
};
export class ShowSpinner implements Action {
    readonly type = AppActionTypes.ShowSpinner;
    constructor(public payload: boolean) {
    }

};
export class HideSpinner implements Action {
    readonly type = AppActionTypes.HideSpinner;
    constructor(public payload: boolean) {
    }

};


 

export type AppActions = ShowSpinner|HideSpinner | ChangeUserName;




