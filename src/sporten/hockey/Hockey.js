import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import HockeyIndex from "./HockeyIndex";
import Team from './teams/Team';
import HockeyKalender from './HockeyKalender';
import HockeyHistoriek from './HockeyHistoriek';
import NotFound from "notFound/NotFound";
import './hockey.scss';

function Hockey({match}) {
  return (
    <div className="hockey">
      <nav className="subnav">
        <ul className="ui container">
          <li><NavLink to={match.path} exact={true}>HOCKEY</NavLink></li>
          <li><NavLink to={`${match.path}/wheelblazers1`}>wheelblazers 1</NavLink></li>
          <li><NavLink to={`${match.path}/wheelblazers2`}>wheelblazers 2</NavLink></li>
          <li><NavLink to={`${match.path}/wheelblazers3`}>wheelblazers 3</NavLink></li>
          <li><NavLink to={`${match.path}/wheelblazers4`}>wheelblazers 4</NavLink></li>
          <li><NavLink to={`${match.path}/nederland`}>competitie nederland</NavLink></li>
          <li><NavLink to={`${match.path}/kalender`}>kalender</NavLink></li>
          <li><NavLink to={`${match.path}/historiek`}>historiek uitslagen</NavLink></li>
        </ul>
      </nav>
      <div className="ui container">
        <Switch>
          <Route exact path={match.path} component={HockeyIndex} />
          <Route path={`${match.path}/wheelblazers1`} component={(props) => <Team team={0} {...props} /> } />
          <Route path={`${match.path}/wheelblazers2`} component={(props) => <Team team={1} {...props} /> } />
          <Route path={`${match.path}/wheelblazers3`} component={(props) => <Team team={2} {...props} /> } />
          <Route path={`${match.path}/wheelblazers4`} component={(props) => <Team team={3} {...props} /> } />
          <Route path={`${match.path}/nederland`} component={(props) => <Team team={4} {...props} /> } />
          <Route exact path={`${match.path}/kalender`} component={HockeyKalender} />
          <Route exact path={`${match.path}/historiek`} component={HockeyHistoriek} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default Hockey;
