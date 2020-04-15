import {Actions} from "../index";

export interface InterfaceActionSetCurrent {
    type: Actions.SET_CURRENT_TEAM,
    teamId: number
}
export const setCurrentTeam = (teamId: number) => ({
    type: Actions.SET_CURRENT_TEAM,
    teamId,
});
