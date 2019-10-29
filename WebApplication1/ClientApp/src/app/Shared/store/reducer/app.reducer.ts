
import { SharedAction, SharedActionTypes } from '../actions/app.actions';
import { AppState } from '../state/app.state'
import { createEntityAdapter } from '@ngrx/entity';
import { HeaderModel } from '../../models/header.model'

export const appAdapter = createEntityAdapter<HeaderModel>({
    // This property must be set to the Primary Key in The Collection. If the Collection contains the Primary Key with Name "id" then it is not required...
    //Otherwise map the Id from the collection to the selectId
    selectId: (headerModel: HeaderModel) => headerModel.id
});
const initialState: AppState = appAdapter.getInitialState();
export function AppReducer(state = initialState, action: SharedAction): AppState{
    switch (action.type) {
        case SharedActionTypes.ChangeUserName:
            return appAdapter.addOne(action.payload, state);
        default:
            return state;
    }
}
////////////// ///////////Selectors////////////////////////
// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = appAdapter.getSelectors();

export const loadAppState = selectAll;

