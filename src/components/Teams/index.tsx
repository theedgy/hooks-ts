import React, {useContext, useEffect, useState} from 'react';
import {apiConnection} from '../../services/apiConnection';
import {Loading} from '../Loading';
import {AppContext} from "../../store";
import {Team} from "./components/Team";
import {addTeams} from "../../store/teams/actions";
import {ComponentStatusType} from "../../types";
import './index.scss';

const defaultStatus = 'idle';

export const Teams = () => {
    const [status, setStatus] = useState<ComponentStatusType>(defaultStatus);
    const {state: {teams}, dispatch} = useContext(AppContext);

    useEffect(() => {
        if ((!!teams?.length) || status === 'loading') {
            return;
        }

        setStatus('loading');

        apiConnection('competitions/2021/teams').then(r => {
            dispatch(addTeams(r.teams));
            setStatus('success');
        });
    }, [dispatch, status, teams]);
    return (
        <section className="Teams app-panel">
            <h2>Teams</h2>

            {(status === 'loading') &&
            <Loading message="Loading Teams..." />}

            {!!teams?.length && (
                <div className="Team__list">
                    {teams.map(team => (
                        <Team key={team.id}
                              team={team}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};
