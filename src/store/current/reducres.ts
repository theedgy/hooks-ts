import {Action, Actions, initialState} from "../index";

export const currentReducer = (state = initialState.state.current, action: Action) => {
    switch (action.type) {
        case Actions.SET_CURRENT_TEAM:
            return action.teamId;

        default:
            return state;
    }
};
