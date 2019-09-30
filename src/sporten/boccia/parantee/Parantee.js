import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
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
          <li><Link to="/boccia/paranteecompetitie">PARANTEE COMPETITIE</Link></li>
          <li><Link to={`${match.path}/spelers`}>spelers</Link></li>
          <li><Link to={`${match.path}/kalender`}>kalender</Link></li>
          <li><Link to={`${match.path}/uitslagen`}>uitslagen</Link></li>
          <li><Link to={`${match.path}/stand`}>stand</Link></li>
          <li><Link to={`${match.path}/historiek`}>historiek uitslagen</Link></li>
        </ul>
      </nav>
      <div>
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
