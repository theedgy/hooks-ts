import {Action, Actions, initialState, TypeTeam} from "../index";

export const teamsReducer = (state = initialState.state.teams, action: Action): TypeTeam[] => {
    switch (action.type) {
        case Actions.ADD_TEAMS:
            return [...state, ...action.teams];

        case Actions.ADD_TEAM_STATS:
            const newState = [...state];
            const found = newState.find(team => team.id === action.id);
            if (!found) {
                return state;
            }
            found['stats'] = action.stats;
            return newState;

        default:
            return state;
    }
};
