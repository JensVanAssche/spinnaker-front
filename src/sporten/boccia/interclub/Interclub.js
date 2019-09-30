import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import InterclubIndex from "./InterclubIndex";
import InterclubSpelers from "./InterclubSpelers";
import InterclubKalender from "./InterclubKalender";
import InterclubUitslagen from "./InterclubUitslagen";
import InterclubStand from "./InterclubStand";
import InterclubHistoriek from "./InterclubHistoriek";
import './interclub.scss';

function Interclub({match}) {
  return (
    <div className="interclub">
      <nav>
        <ul>
          <li><Link to={match.path}>INTERCLUB</Link></li>
          <li><Link to={`${match.path}/spelers`}>spelers</Link></li>
          <li><Link to={`${match.path}/kalender`}>kalender</Link></li>
          <li><Link to={`${match.path}/uitslagen`}>uitslagen</Link></li>
          <li><Link to={`${match.path}/stand`}>stand</Link></li>
          <li><Link to={`${match.path}/historiek`}>historiek uitslagen</Link></li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path={match.path} component={InterclubIndex} />
          <Route path={`${match.path}/spelers`} component={InterclubSpelers} />
          <Route path={`${match.path}/kalender`} component={InterclubKalender} />
          <Route path={`${match.path}/uitslagen`} component={InterclubUitslagen} />
          <Route path={`${match.path}/stand`} component={InterclubStand} />
          <Route path={`${match.path}/historiek`} component={InterclubHistoriek} />
        </Switch>
      </div>
    </div>
  );
}

export default Interclub;
