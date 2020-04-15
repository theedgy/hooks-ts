import {Actions, InterfaceStat, InterfaceTeam} from "../index";

export interface InterfaceActionAddTeams {
    type: Actions.ADD_TEAMS,
    teams: InterfaceTeam[]
}

export interface InterfaceActionAddStats {
    type: Actions.ADD_TEAM_STATS,
    stats: InterfaceStat[],
    id: number
}

export const addTeamStats = (stats: InterfaceStat[], id: number): InterfaceActionAddStats => ({
    type: Actions.ADD_TEAM_STATS,
    stats,
    id
});

export const addTeams = (teams: InterfaceTeam[]): InterfaceActionAddTeams => ({
    type: Actions.ADD_TEAMS,
    teams,
});
