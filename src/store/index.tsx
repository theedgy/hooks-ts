import React, {ReactNode, useReducer} from 'react';

import {TypeActionAddStats, TypeActionAddTeams} from "./teams/actions";
import {TypeActionSetCurrent} from "./current/actions";
import {combineReducers} from "../services/combineReducres";
import {teamsReducer} from "./teams/reducres";
import {currentReducer} from "./current/reducres";

type TypeAppStore = {
    children: ReactNode
}

export enum Actions {
    ADD_TEAM_STATS = 'ADD_TEAM_STATS',
    ADD_TEAMS = 'ADD_TEAMS',
    SET_CURRENT_TEAM = 'SET_CURRENT_TEAM',
}

export type Action = TypeActionAddTeams | TypeActionAddStats | TypeActionSetCurrent;

export type TypeStat = {
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

export type TypeTeam = {
    id: number,
    name: string,
    crestUrl: string,
    shortName: string,
    stats?: TypeStat[]
}

export type TypeState = {
    teams: TypeTeam[],
    current: number
}

type TypeAppContext = {
    state: TypeState,
    dispatch: (e: Action) => void,
}

export const initialState: TypeAppContext = {
    state: {
        teams: [],
        current: 0
    },
    dispatch: () => alert('Context "dispatch()" function has not been loaded yet, please try again later.')
};

export const AppContext = React.createContext<TypeAppContext>(initialState);

export const AppStore: React.FC<TypeAppStore> = ({children}) => {

    const [state, dispatch] = useReducer(combineReducers({
        teams: teamsReducer,
        current: currentReducer
    }), initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};
