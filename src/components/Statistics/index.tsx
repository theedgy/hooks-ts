import React, {useContext, useEffect, useState} from 'react';
import {AppContext, TypeTeam} from "../../store";
import {apiConnection} from '../../services/apiConnection';
import {addTeamStats} from '../../store/teams/actions';
import {Loading} from '../Loading';
import {ComponentStatusType} from "../../types";

import './index.scss';

export const Statistics = () => {
    const [currentTeam, setCurrentTeam] = useState<TypeTeam | null>(null);
    const [status, setStatus] = useState<ComponentStatusType>('idle');
    const {state: {teams, current}, dispatch} = useContext(AppContext);

    useEffect(() => {
        const found = (!!teams?.length && current) &&
            teams.find(team => team.id === current);

        if (found && found !== currentTeam) {
            setCurrentTeam(found)
        }
    }, [current, currentTeam, teams])

    useEffect(() => {
        if (!current
            || status === 'loading'
            || (currentTeam && 'stats' in currentTeam)) {
            return;
        }

        setStatus('loading');

        apiConnection(`teams/${current}/matches?status=FINISHED`)
            .then(r => {
                    dispatch?.(addTeamStats(r.matches, current));
                    setStatus('idle');
                },
            )

    }, [current, dispatch, currentTeam, status]);

    return (
        <section className="Statistics app-panel">
            <h2>Statistics</h2>

            {!teams?.length &&
            <Loading message={'Waiting for teams load'} />}

            {status === 'loading' &&
            <Loading message={`Downloading ${currentTeam?.name} data`} />}

            {!!teams?.length && (
                !current
                    ? <p><i>Please select team to display information</i></p>
                    : <table className="Statistics__list">
                        <tbody>
                        {currentTeam?.stats?.map(match => (
                            <tr key={match.id}>
                                <td>({match.competition.name})</td>
                                <td>{match.homeTeam.name} {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam} {match.awayTeam.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            )}
        </section>
    );
};
