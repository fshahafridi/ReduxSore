
import { AppActions, AppActionTypes } from '../actions/app.actions';
import { SpinnerState } from '../state/shared.state'





const initialState: SpinnerState = { visible: false };

export function SpinnerReducer(state = initialState, action: AppActions): SpinnerState {
    switch (action.type) {
        case AppActionTypes.ShowSpinner:
            return { ...state, visible: true };
        case AppActionTypes.HideSpinner:
            return { ...state, visible: false };
        default:
            return state;
    }
}


