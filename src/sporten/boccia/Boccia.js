import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import BocciaIndex from "./BocciaIndex";
import BocciaParantee from './parantee/Parantee';
import BocciaScholen from './scholen/Scholen';
import BocciaInterclub from './interclub/Interclub';
import BocciaKalender from './BocciaKalender';
import BocciaNederland from './nederland/Nederland';
import './boccia.scss';

function Boccia({match}) {
  return (
    <div className="boccia">
      <nav className="subnav">
        <ul className="ui container">
          <li><NavLink to={match.path} exact={true}>BOCCIA</NavLink></li>
          <li><NavLink to={`${match.path}/paranteecompetitie`}>parantee competitie</NavLink></li>
          <li><NavLink to={`${match.path}/scholencompetitie`}>scholencompetitie</NavLink></li>
          <li><NavLink to={`${match.path}/interclub`}>interclub</NavLink></li>
          <li><NavLink to={`${match.path}/kalender`}>kalender</NavLink></li>
          <li><NavLink to={`${match.path}/nederland`}>competitie nederland</NavLink></li>
        </ul>
      </nav>
      <div className="ui container">
        <Switch>
          <Route exact path={match.path} component={BocciaIndex} />
          <Route path={`${match.path}/paranteecompetitie`} component={BocciaParantee} />
          <Route path={`${match.path}/scholencompetitie`} component={BocciaScholen} />
          <Route path={`${match.path}/interclub`} component={BocciaInterclub} />
          <Route path={`${match.path}/kalender`} component={BocciaKalender} />
          <Route path={`${match.path}/nederland`} component={BocciaNederland} />
        </Switch>
      </div>
    </div>
  );
}

export default Boccia;
