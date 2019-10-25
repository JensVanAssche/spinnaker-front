import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import CompetitieIndex from "./CompetitieIndex";
import CompetitieSpelers from "./CompetitieSpelers";
import CompetitieKalender from "./CompetitieKalender";
import CompetitieResultaten from "./CompetitieResultaten";
import CompetitieStand from "./CompetitieStand";
import CompetitieHistoriek from "./CompetitieHistoriek";
import NotFound from "notFound/NotFound";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Competitie extends React.Component {
  state = {
    league: ['PARANTEE COMPETITIE', 'SCHOLENCOMPETITIE', 'COMPETITIE NEDERLAND'],
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
    const { match, league } = this.props;

    return (
      <div className="competitie">
        <nav className="subsubnav">
          <div className="hamburger">
            <span>{window.location.pathname.split("/")[3]}</span>
            <span><FontAwesomeIcon icon={faBars} onClick={() => this.onHamburgerClick()} /></span>
          </div>
          <ul className="ui container">
            <li><NavLink exact={true} to={match.path}>{this.state.league[league]}</NavLink></li>
            <li><NavLink to={`${match.path}/spelers`}>spelers</NavLink></li>
            <li><NavLink to={`${match.path}/kalender`}>kalender</NavLink></li>
            <li><NavLink to={`${match.path}/resultaten`}>resultaten</NavLink></li>
            <li><NavLink to={`${match.path}/stand`}>stand</NavLink></li>
            <li><NavLink to={`${match.path}/historiek`}>historiek resultaten</NavLink></li>
          </ul>
        </nav>
        <div className="ui container content">
          <Switch>
            <Route exact path={match.path} component={(props) => <CompetitieIndex league={league} {...props} />} />
            <Route exact path={`${match.path}/spelers`} component={(props) => <CompetitieSpelers league={league} {...props} />} />
            <Route exact path={`${match.path}/kalender`} component={(props) => <CompetitieKalender league={league} {...props} />} />
            <Route exact path={`${match.path}/resultaten`} component={(props) => <CompetitieResultaten league={league} {...props} />} />
            <Route exact path={`${match.path}/stand`} component={(props) => <CompetitieStand league={league} {...props} />} />
            <Route exact path={`${match.path}/historiek`} component={(props) => <CompetitieHistoriek league={league} {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Competitie;
