import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ParanteeIndex from "./ParanteeIndex";
import ParanteeSpelers from "./ParanteeSpelers";
import ParanteeKalender from "./ParanteeKalender";
import ParanteeUitslagen from "./ParanteeUitslagen";
import ParanteeStand from "./ParanteeStand";
import ParanteeHistoriek from "./ParanteeHistoriek";
import './parantee.scss';

function Parantee({match}) {
  return (
    <div className="parantee">
      <nav>
        <ul>
          <li><NavLink exact={true} to="/boccia/paranteecompetitie">PARANTEE COMPETITIE</NavLink></li>
          <li><NavLink to={`${match.path}/spelers`}>spelers</NavLink></li>
          <li><NavLink to={`${match.path}/kalender`}>kalender</NavLink></li>
          <li><NavLink to={`${match.path}/uitslagen`}>uitslagen</NavLink></li>
          <li><NavLink to={`${match.path}/stand`}>stand</NavLink></li>
          <li><NavLink to={`${match.path}/historiek`}>historiek uitslagen</NavLink></li>
        </ul>
      </nav>
      <div className="content">
        <Switch>
          <Route exact path={match.path} component={ParanteeIndex} />
          <Route path={`${match.path}/spelers`} component={ParanteeSpelers} />
          <Route path={`${match.path}/kalender`} component={ParanteeKalender} />
          <Route path={`${match.path}/uitslagen`} component={ParanteeUitslagen} />
          <Route path={`${match.path}/stand`} component={ParanteeStand} />
          <Route path={`${match.path}/historiek`} component={ParanteeHistoriek} />
        </Switch>
      </div>
    </div>
  );
}

export default Parantee;
