import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import TeamSpelers from "./TeamSpelers";
import TeamResultaten from "./TeamResultaten";
import TeamStand from "./TeamStand";
import NotFound from "notFound/NotFound";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './team.scss';

class Team extends React.Component {
  state = {
    team: ['WHEELBLAZERS 1', 'WHEELBLAZERS 2', 'WHEELBLAZERS 3', 'WHEELBLAZERS 4', 'COMPETITIE NEDERLAND'],
  };

  onHamburgerClick() {
    if(window.innerWidth <= 768) {
      document.querySelector('.subsubnav ul').classList.toggle('open');
    }
  }
  
  onNavigationClick() {
    if(window.innerWidth <= 768) {
      document.querySelector('.subsubnav ul').classList.remove('open');
    }
  }

  render() {
    const { match, team } = this.props;

    return (
      <div className="team">
        <nav className="subsubnav">
          <div className="hamburger">
            <span>{window.location.pathname.split("/")[3]}</span>
            <span><FontAwesomeIcon icon={faBars} onClick={() => this.onHamburgerClick()} /></span>
          </div>
          <ul className="ui container">
            <li>{this.state.team[team]}</li>
            <li><NavLink to={`${match.path}/spelers`}>spelers</NavLink></li>
            <li><NavLink to={`${match.path}/resultaten`}>resultaten</NavLink></li>
            <li><NavLink to={`${match.path}/stand`}>stand</NavLink></li>
          </ul>
        </nav>
        <div className="ui container content">
          <Switch>
            <Route exact path={match.path}><Redirect to={{ pathname: `${match.path}/spelers` }} /></Route>
            <Route exact path={`${match.path}/spelers`} component={(props) => <TeamSpelers team={team} {...props} />} />
            <Route exact path={`${match.path}/resultaten`} component={(props) => <TeamResultaten team={team} {...props} />} />
            <Route exact path={`${match.path}/stand`} component={(props) => <TeamStand team={team} {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Team;
