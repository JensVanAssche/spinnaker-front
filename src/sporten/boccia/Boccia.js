import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import BocciaIndex from "./BocciaIndex";
import Competitie from './competitie/Competitie';
import BocciaKalender from './BocciaKalender';
import './boccia.scss';

function Boccia({match}) {
  return (
    <div className="boccia">
      <nav className="subnav">
        <ul className="ui container">
          <li><NavLink to={match.path} exact={true}>BOCCIA</NavLink></li>
          <li><NavLink to={`${match.path}/paranteecompetitie`}>parantee competitie</NavLink></li>
          <li><NavLink to={`${match.path}/scholencompetitie`}>scholencompetitie</NavLink></li>
          <li><NavLink to={`${match.path}/nederland`}>competitie nederland</NavLink></li>
          <li><NavLink to={`${match.path}/kalender`}>boccia kalender</NavLink></li>
        </ul>
      </nav>
      <div className="ui container">
        <Switch>
          <Route exact path={match.path} component={BocciaIndex} />
          <Route path={`${match.path}/paranteecompetitie`} component={(props) => <Competitie league={0} {...props} />} />
          <Route path={`${match.path}/scholencompetitie`} component={(props) => <Competitie league={1} {...props} /> } />
          <Route path={`${match.path}/nederland`} component={(props) => <Competitie league={2} {...props} /> } />
          <Route path={`${match.path}/kalender`} component={BocciaKalender} />
        </Switch>
      </div>
    </div>
  );
}

export default Boccia;
