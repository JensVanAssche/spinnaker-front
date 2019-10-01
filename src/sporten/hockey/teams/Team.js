import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import TeamSpelers from "./TeamSpelers";
import TeamResultaten from "./TeamResultaten";
import TeamKlassement from "./TeamKlassement";
import './team.scss';

class Team extends React.Component {
  state = {
    team: ['WHEELBLAZERS 1', 'WHEELBLAZERS 2', 'WHEELBLAZERS 3', 'WHEELBLAZERS 4', 'COMPETITIE NEDERLAND'],
  };

  render() {
    const { match, team } = this.props;

    return (
      <div className="team">
        <nav>
          <ul>
            <li>{this.state.team[team]}</li>
            <li><NavLink to={`${match.path}/spelers`}>spelers</NavLink></li>
            <li><NavLink to={`${match.path}/resultaten`}>resultaten</NavLink></li>
            <li><NavLink to={`${match.path}/klassement`}>klassement</NavLink></li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route path={`${match.path}/spelers`} component={(props) => <TeamSpelers team={team} {...props} />} />
            <Route path={`${match.path}/resultaten`} component={(props) => <TeamResultaten team={team} {...props} />} />
            <Route path={`${match.path}/klassement`} component={(props) => <TeamKlassement team={team} {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Team;
