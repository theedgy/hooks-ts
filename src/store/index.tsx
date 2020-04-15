import React, {ReactNode, useReducer} from 'react';

import {InterfaceActionAddStats, InterfaceActionAddTeams} from "./teams/actions";
import {InterfaceActionSetCurrent} from "./current/actions";
import {combineReducers} from "../services/combineReducres";
import {teamsReducer} from "./teams/reducres";
import {currentReducer} from "./current/reducres";

interface InterfaceAppStore {
    children: ReactNode
}

export enum Actions {
    ADD_TEAM_STATS = 'ADD_TEAM_STATS',
    ADD_TEAMS = 'ADD_TEAMS',
    SET_CURRENT_TEAM = 'SET_CURRENT_TEAM',
}

export type Action = InterfaceActionAddTeams | InterfaceActionAddStats | InterfaceActionSetCurrent;

export interface InterfaceStat {
    id: number,
    competition: {
        name: string
    }
    score: {
        fullTime: {
            homeTeam: number
            awayTeam: number
        }
    }
    awayTeam: {
        name: string
    }
    homeTeam: {
        name: string
    }
}

export interface InterfaceTeam {
    id: number,
    name: string,
    crestUrl: string,
    shortName: string,
    stats?: InterfaceStat[]
}

export type InterfaceState = {
    teams?: InterfaceTeam[],
    current?: number
}

export interface InterfaceAppContext {
    state: InterfaceState,
    dispatch: (e: Action) => void,
}

export const AppContext = React.createContext<Partial<InterfaceAppContext>>({});

export const AppStore: React.FC<InterfaceAppStore> = ({children}) => {
    const [state, dispatch] = useReducer(combineReducers({
        teams: teamsReducer,
        current: currentReducer
    }), {});

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};
