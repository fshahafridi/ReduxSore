import { HeaderModel } from '../../models/header.model'
import { EntityState } from '@ngrx/entity';


//State for the course module only... this will be used in the reducer and components...
export interface HeaderState extends EntityState<HeaderModel> {}

export interface SpinnerState {
    visible: boolean;
}

