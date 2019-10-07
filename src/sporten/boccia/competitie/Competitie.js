import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import CompetitieIndex from "./CompetitieIndex";
import CompetitieSpelers from "./CompetitieSpelers";
import CompetitieKalender from "./CompetitieKalender";
import CompetitieResultaten from "./CompetitieResultaten";
import CompetitieStand from "./CompetitieStand";
import CompetitieHistoriek from "./CompetitieHistoriek";
import './competitie.scss';

class Competitie extends React.Component {
  state = {
    league: ['PARANTEE COMPETITIE', 'SCHOLENCOMPETITIE', 'COMPETITIE NEDERLAND'],
  };

  render() {
    const { match, league } = this.props;

    return (
      <div className="competitie">
        <nav>
          <ul>
            <li><NavLink exact={true} to={match.path}>{this.state.league[league]}</NavLink></li>
            <li><NavLink to={`${match.path}/spelers`}>spelers</NavLink></li>
            <li><NavLink to={`${match.path}/kalender`}>kalender</NavLink></li>
            <li><NavLink to={`${match.path}/resultaten`}>resultaten</NavLink></li>
            <li><NavLink to={`${match.path}/stand`}>stand</NavLink></li>
            <li><NavLink to={`${match.path}/historiek`}>historiek resultaten</NavLink></li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path={match.path} component={(props) => <CompetitieIndex league={league} {...props} />} />
            <Route path={`${match.path}/spelers`} component={(props) => <CompetitieSpelers league={league} {...props} />} />
            <Route path={`${match.path}/kalender`} component={(props) => <CompetitieKalender league={league} {...props} />} />
            <Route path={`${match.path}/resultaten`} component={(props) => <CompetitieResultaten league={league} {...props} />} />
            <Route path={`${match.path}/stand`} component={(props) => <CompetitieStand league={league} {...props} />} />
            <Route path={`${match.path}/historiek`} component={(props) => <CompetitieHistoriek league={league} {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Competitie;
