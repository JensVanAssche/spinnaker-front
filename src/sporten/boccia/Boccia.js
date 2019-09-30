import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BocciaIndex from "./BocciaIndex";
import BocciaParantee from './BocciaParantee';
import BocciaScholen from './BocciaScholen';
import BocciaInterclub from './BocciaInterclub';
import BocciaKalender from './BocciaKalender';
import BocciaNederland from './BocciaNederland';
import './boccia.scss';

function Boccia({match}) {
  return (
    <div className="boccia">
      <nav>
        <ul className="ui container">
          <li><Link to="/boccia">BOCCIA</Link></li>
          <li><Link to={`${match.path}/paranteecompetitie`}>parantee competitie</Link></li>
          <li><Link to={`${match.path}/scholencompetitie`}>scholencompetitie</Link></li>
          <li><Link to={`${match.path}/interclub`}>interclub</Link></li>
          <li><Link to={`${match.path}/kalender`}>kalender</Link></li>
          <li><Link to={`${match.path}/nederland`}>competitie nederland</Link></li>
        </ul>
      </nav>
      <div className="ui container">
        <Switch>
          <Route exact path={match.path} component={BocciaIndex} />
          <Route exact path={`${match.path}/paranteecompetitie`} component={BocciaParantee} />
          <Route exact path={`${match.path}/scholencompetitie`} component={BocciaScholen} />
          <Route exact path={`${match.path}/interclub`} component={BocciaInterclub} />
          <Route exact path={`${match.path}/kalender`} component={BocciaKalender} />
          <Route exact path={`${match.path}/nederland`} component={BocciaNederland} />
        </Switch>
      </div>
    </div>
  );
}

export default Boccia;
