import {Actions} from "../index";

export interface InterfaceActionSetCurrent {
    type: Actions.SET_CURRENT_TEAM,
    teamId: number
}
export const setCurrentTeam = (teamId: number): InterfaceActionSetCurrent => ({
    type: Actions.SET_CURRENT_TEAM,
    teamId,
});
