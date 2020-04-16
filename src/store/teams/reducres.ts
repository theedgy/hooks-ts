import {Actions, InterfaceTeam} from "../index";
import {InterfaceActionAddStats, InterfaceActionAddTeams} from "./actions";

export const teamsReducer = (state: InterfaceTeam[] = [], action: InterfaceActionAddTeams | InterfaceActionAddStats) => {
    console.log( state, action);
    console.log( action.type ,Actions.ADD_TEAM_STATS);
    switch (action.type) {
        case Actions.ADD_TEAMS:
            return [...state, ...action.teams];

        case Actions.ADD_TEAM_STATS:
            const newState = [...state];
            const found = newState.find(team => team.id === action.id);
            if (!found) {
                return state;
            }
            // @ts-ignore
            found['stats'] = action.stats;
            return newState;

        default:
            return state;
    }
};
