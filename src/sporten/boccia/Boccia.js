import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import BocciaIndex from "./BocciaIndex";
import Competitie from './competitie/Competitie';
import BocciaKalender from './BocciaKalender';
import NotFound from "notFound/NotFound";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../sport.scss';

function onHamburgerClick() {
  if(window.innerWidth <= 768) {
    document.querySelector('.subnav ul').classList.toggle('open');
  }
}

function onNavigationClick() {
  if(window.innerWidth <= 768) {
    document.querySelector('.subnav ul').classList.remove('open');
  }
}

function Boccia({match}) {
  return (
    <div className="boccia">
      <nav className="subnav">
        <div className="hamburger">
          <span>{window.location.pathname.split("/")[2]}</span>
          <span><FontAwesomeIcon icon={faBars} onClick={() => onHamburgerClick()} /></span>
        </div>
        <ul className="ui container">
          <li onClick={() => onNavigationClick()}><NavLink to={match.path} exact={true}>BOCCIA</NavLink></li>
          <li onClick={() => onNavigationClick()}><NavLink to={`${match.path}/parantee`}>parantee competitie</NavLink></li>
          <li onClick={() => onNavigationClick()}><NavLink to={`${match.path}/scholencompetitie`}>scholencompetitie</NavLink></li>
          <li onClick={() => onNavigationClick()}><NavLink to={`${match.path}/nederland`}>competitie nederland</NavLink></li>
          <li onClick={() => onNavigationClick()}><NavLink to={`${match.path}/kalender`}>boccia kalender</NavLink></li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path={match.path} component={BocciaIndex} />
          <Route path={`${match.path}/parantee`} component={(props) => <Competitie league={0} {...props} />} />
          <Route path={`${match.path}/scholencompetitie`} component={(props) => <Competitie league={1} {...props} /> } />
          <Route path={`${match.path}/nederland`} component={(props) => <Competitie league={2} {...props} /> } />
          <Route exact path={`${match.path}/kalender`} component={BocciaKalender} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default Boccia;
