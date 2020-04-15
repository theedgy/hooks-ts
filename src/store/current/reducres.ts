import {SET_CURRENT_TEAM} from './actions';

export const current = (state = null, action) => {
    switch (action.type) {
        case SET_CURRENT_TEAM:
            return action.teamId;

        default:
            return state;
    }
};
