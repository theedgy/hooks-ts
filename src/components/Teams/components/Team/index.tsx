import React, {useContext} from 'react';
import {AppContext, InterfaceTeam} from "../../../../store";

import './index.scss';
import {setCurrentTeam} from "../../../../store/current/actions";


interface InterfaceTeamComponent {
    team: InterfaceTeam,
    current?: boolean,
}

export const Team: React.FC<InterfaceTeamComponent> = ({team, current = false}) => {

    const {dispatch} = useContext(AppContext);
    const onTeamSelect = (id: number) => {
        dispatch && dispatch(setCurrentTeam(id));
    };

    return (
        <p className="Team">
            <img src={team.crestUrl}
                 alt={`#${team.shortName}`} />

            <a className={current ? 'active' : 'Team-link'}
               href={`#${team.shortName}`}
               onClick={() => onTeamSelect(team.id)}>
                {`${team.name}`}
            </a>
        </p>
    );
};

