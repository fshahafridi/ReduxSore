import { HeaderModel } from '../../models/header.model'
import { EntityState } from '@ngrx/entity';

//State for the course module only... this will be used in the reducer and components...
export interface AppState extends EntityState<HeaderModel> {
   
}

//Combine state with with the root or app state... we will this state in selector...
export interface State extends AppState {
    appState: AppState
}
