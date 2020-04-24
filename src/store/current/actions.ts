import {Actions} from "../index";

export type TypeActionSetCurrent = {
    type: Actions.SET_CURRENT_TEAM,
    teamId: number
}
export const setCurrentTeam = (teamId: number): TypeActionSetCurrent => ({
    type: Actions.SET_CURRENT_TEAM,
    teamId,
});
