  
//For now we import the course state. if we have other state we will import that state too from the The same feature module..
import { CourseListingState } from './state/courses.state';
import { CourseReducer } from './reducers/courses.reducer';
import * as fromRoot from '../../state/app.state';
import {ActionReducerMap, State,} from '@ngrx/store';

//This will hold all the states from the current module...
export interface CourseModuleState {

    courses: CourseListingState
}
//extend the root state with states in the current module...
export interface State extends fromRoot.AppState {
    courses: CourseModuleState
}
//Created an ActionReducerMap of CourseModuleState – this will define the reducers that correspond to the properties in CourseModuleState
export const reducers: ActionReducerMap<CourseModuleState> = {
    courses: CourseReducer
    

};
