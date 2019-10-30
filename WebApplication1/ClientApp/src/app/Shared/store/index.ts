  
//For now we import the course state. if we have other state we will import that state too from the The same feature module..
import { HeaderState, SpinnerState } from './state/shared.state';
import { SpinnerReducer } from '../store/reducer/Spinner.reducer';
import * as fromRoot from '../../state/app.state';
import {ActionReducerMap, State,} from '@ngrx/store';

//This will hold all the states from the current module...(whole state of Shared Module)
export interface SharedModuleState {

    spinnerState: SpinnerState,
    //headerState: HeaderState
}
//extend the root state with states in the shared module...This will merge the shared module state wit app state...
export interface State extends fromRoot.AppState {
    SharedModuleState: SharedModuleState
}
//Created an ActionReducerMap of CourseModuleState – this will define the reducers that correspond to the properties in CourseModuleState
//we will map the header state to the header reducer...
export const reducers: ActionReducerMap<SharedModuleState> = {
    spinnerState:SpinnerReducer
};
