
import { CoreActions, CoreActionTypes } from '../actions/core.actions';
import { ErrorState } from '../state/core.state'





const initialState: ErrorState = { errorMessage: '' };

export function ErrorReducer(state = initialState, action: CoreActions): ErrorState {
    switch (action.type) {
        case CoreActionTypes.ErrorEncountered:
            return { ...state, errorMessage: action.payload };
         default:
            return state;
    }
}


