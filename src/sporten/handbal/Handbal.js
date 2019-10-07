import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import HandbalIndex from "./HandbalIndex";
import HandbalKalender from './HandbalKalender';

function Handbal({match}) {
  return (
    <div className="handbal">
      <nav className="subnav">
        <ul className="ui container">
          <li><NavLink to={match.path} exact={true}>HANDBAL</NavLink></li>
          <li><NavLink to={`${match.path}/kalender`}>handbal kalender</NavLink></li>
        </ul>
      </nav>
      <div className="ui container">
        <Switch>
          <Route exact path={match.path} component={HandbalIndex} />
          <Route path={`${match.path}/kalender`} component={HandbalKalender} />
        </Switch>
      </div>
    </div>
  );
}

export default Handbal;
