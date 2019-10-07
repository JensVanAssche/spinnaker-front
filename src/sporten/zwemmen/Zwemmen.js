import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ZwemmenIndex from "./ZwemmenIndex";
import ZwemmenKalender from './ZwemmenKalender';

function Zwemmen({match}) {
  return (
    <div className="Zwemmen">
      <nav className="subnav">
        <ul className="ui container">
          <li><NavLink to={match.path} exact={true}>ZWEMMEN</NavLink></li>
          <li><NavLink to={`${match.path}/kalender`}>zwemmen kalender</NavLink></li>
        </ul>
      </nav>
      <div className="ui container">
        <Switch>
          <Route exact path={match.path} component={ZwemmenIndex} />
          <Route path={`${match.path}/kalender`} component={ZwemmenKalender} />
        </Switch>
      </div>
    </div>
  );
}

export default Zwemmen;
