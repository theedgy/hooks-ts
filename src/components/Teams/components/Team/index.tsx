import React, {useContext} from "react";
import {AppContext, TypeTeam} from "../../../../store";
import {setCurrentTeam} from "../../../../store/current/actions";

import "./index.scss";

type TypeTeamComponent = {
    team: TypeTeam
}

export const Team: React.FC<TypeTeamComponent> = ({team}) => {

    const { state: {current}, dispatch } = useContext(AppContext);

    return (
        <p className="Team">
            <img src={team.crestUrl} alt={`#${team.shortName}`} />

            <button
                type="button"
                className={`Team-link${current === team.id ? ' active' : ''}`}
                name={team.shortName}
                onClick={() => dispatch?.(setCurrentTeam(team.id))}
            >
                {team.name}
            </button>
        </p>
    );
};
