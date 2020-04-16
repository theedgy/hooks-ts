import React, {useContext, useEffect, useState} from 'react';
import {apiConnection} from '../../services/apiConnection';
import {Error} from '../Error';
import {Loading} from '../Loading';
import './index.scss';
import {AppContext} from "../../store";
import {Team} from "./components/Team";
import {addTeams} from "../../store/teams/actions";

const defaultStatus = 'idle';

export const Teams = () => {
    const {state, dispatch} = useContext(AppContext);

    const teams = state?.teams;

    const [status, setStatus] = useState<string>(defaultStatus);
    const current: number = 0;

    useEffect(() => {
        // Return if data exists in store or is already pulling
        if ((teams && !!teams.length) || status === 'success') {
            return;
        }
console.log('test')
        setStatus('loading');

        apiConnection('competitions/2021/teams')
            .then(r => r.json())
            .then(response => {
                    if (!!dispatch) {
                        dispatch(addTeams(response.teams));
                        setStatus('success');
                    }
                },
            ).catch(error => setStatus(`${error}`));

        // eslint-disable-next-line
    }, [teams]);

    return (
        <section className="Teams app-panel">
            <h2>Teams</h2>

            {(status === 'loading') &&
            <Loading message="Loading Teams..." />}

            {!['idle', 'loading', 'success'].includes(status) && (
                <Error message={status} />
            )}

            <div className="Team__list">
                {!!teams?.length && teams.map(team => (
                    <Team key={team.id}
                          team={team}
                          current={current === team.id}
                    />
                ))}
            </div>
        </section>
    );
};
