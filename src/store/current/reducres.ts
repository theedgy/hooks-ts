import {Actions} from "../index";
import {InterfaceActionSetCurrent} from "./actions";

export const currentReducer = (state = 0, action: InterfaceActionSetCurrent) => {
    switch (action.type) {
        case Actions.SET_CURRENT_TEAM:
            return action.teamId;

        default:
            return state;
    }
};
