import React, { useContext } from "react";
import { AppContext, InterfaceTeam } from "../../../../store";
import { setCurrentTeam } from "../../../../store/current/actions";

import "./index.scss";

interface InterfaceTeamComponent {
  team: InterfaceTeam;
  current?: boolean;
}

export const Team: React.FC<InterfaceTeamComponent> = ({
  team,
  current = false
}) => {
  const { dispatch } = useContext(AppContext);

  const onTeamSelect = (id: number) => {
      console.log(id)
    dispatch && dispatch(setCurrentTeam(id));
  };

  return (
    <p className="Team">
      <img src={team.crestUrl} alt={`#${team.shortName}`} />

      <button
        type="button"
        className={`Team-link${current ? ' active' : ''}`}
        name={`#${team.shortName}`}
        onClick={() => onTeamSelect(team.id)}
      >
        {`${team.name}`}
      </button>
    </p>
  );
};
