import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ScholenIndex from "./ScholenIndex";
import ScholenSpelers from "./ScholenSpelers";
import ScholenKalender from "./ScholenKalender";
import ScholenUitslagen from "./ScholenUitslagen";
import ScholenStand from "./ScholenStand";
import ScholenHistoriek from "./ScholenHistoriek";
import './scholen.scss';

function Scholen({match}) {
  return (
    <div className="scholen">
      <nav>
        <ul>
          <li><Link to="/boccia/Scholencompetitie">SCHOLENCOMPETITIE</Link></li>
          <li><Link to={`${match.path}/spelers`}>spelers</Link></li>
          <li><Link to={`${match.path}/kalender`}>kalender</Link></li>
          <li><Link to={`${match.path}/uitslagen`}>uitslagen</Link></li>
          <li><Link to={`${match.path}/stand`}>stand</Link></li>
          <li><Link to={`${match.path}/historiek`}>historiek uitslagen</Link></li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path={match.path} component={ScholenIndex} />
          <Route path={`${match.path}/spelers`} component={ScholenSpelers} />
          <Route path={`${match.path}/kalender`} component={ScholenKalender} />
          <Route path={`${match.path}/uitslagen`} component={ScholenUitslagen} />
          <Route path={`${match.path}/stand`} component={ScholenStand} />
          <Route path={`${match.path}/historiek`} component={ScholenHistoriek} />
        </Switch>
      </div>
    </div>
  );
}

export default Scholen;
