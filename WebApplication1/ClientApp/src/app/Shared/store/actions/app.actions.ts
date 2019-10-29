import {HeaderModel } from '../../models/header.model'
import { Action } from '@ngrx/store'

export enum SharedActionTypes {
    ChangeUserName = '[Header Component] ChangeUserName',
    
}

export class ChangeUserName implements Action {
    readonly type = SharedActionTypes.ChangeUserName;
    constructor(public payload: HeaderModel) {
    }
}
 
 
export type SharedAction = ChangeUserName;

  
 

