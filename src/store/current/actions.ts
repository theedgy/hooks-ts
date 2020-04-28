import {Actions} from "../index";

export type ActionSetCurrent = {
    type: Actions.SET_CURRENT_TEAM,
    teamId: number
}
export const setCurrentTeam = (teamId: number): ActionSetCurrent => ({
    type: Actions.SET_CURRENT_TEAM,
    teamId,
});
