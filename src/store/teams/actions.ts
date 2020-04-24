import {Actions, TypeStat, TypeTeam} from "../index";

export type TypeActionAddStats = {
    type: Actions.ADD_TEAM_STATS,
    stats: TypeStat[],
    id: number
}
export const addTeamStats = (stats: TypeStat[], id: number): TypeActionAddStats => ({
    type: Actions.ADD_TEAM_STATS,
    stats,
    id
});

export type TypeActionAddTeams = {
    type: Actions.ADD_TEAMS,
    teams: TypeTeam[]
}
export const addTeams = (teams: TypeTeam[]): TypeActionAddTeams => ({
    type: Actions.ADD_TEAMS,
    teams,
});
