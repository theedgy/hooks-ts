import {Actions, TypeStat, TypeTeam} from "../index";

export type ActionAddStats = {
    type: Actions.ADD_TEAM_STATS,
    stats: TypeStat[],
    id: number
}
export const addTeamStats = (stats: TypeStat[], id: number): ActionAddStats => ({
    type: Actions.ADD_TEAM_STATS,
    stats,
    id
});

export type ActionAddTeams = {
    type: Actions.ADD_TEAMS,
    teams: TypeTeam[]
}
export const addTeams = (teams: TypeTeam[]): ActionAddTeams => ({
    type: Actions.ADD_TEAMS,
    teams,
});
