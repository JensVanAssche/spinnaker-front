import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NederlandIndex from "./NederlandIndex";
import NederlandSpelers from "./NederlandSpelers";
import NederlandKalender from "./NederlandKalender";
import NederlandUitslagen from "./NederlandUitslagen";
import NederlandStand from "./NederlandStand";
import NederlandHistoriek from "./NederlandHistoriek";

function Nederland({match}) {
  return (
    <div className="nederland">
      <nav className="tinynav">
        <ul>
          <li><Link to="/boccia/nederland">COMPETITIE NEDERLAND</Link></li>
          <li><Link to={`${match.path}/spelers`}>spelers</Link></li>
          <li><Link to={`${match.path}/kalender`}>kalender</Link></li>
          <li><Link to={`${match.path}/uitslagen`}>uitslagen</Link></li>
          <li><Link to={`${match.path}/stand`}>stand</Link></li>
          <li><Link to={`${match.path}/historiek`}>historiek uitslagen</Link></li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path={match.path} component={NederlandIndex} />
          <Route path={`${match.path}/spelers`} component={NederlandSpelers} />
          <Route path={`${match.path}/kalender`} component={NederlandKalender} />
          <Route path={`${match.path}/uitslagen`} component={NederlandUitslagen} />
          <Route path={`${match.path}/stand`} component={NederlandStand} />
          <Route path={`${match.path}/historiek`} component={NederlandHistoriek} />
        </Switch>
      </div>
    </div>
  );
}

export default Nederland;
