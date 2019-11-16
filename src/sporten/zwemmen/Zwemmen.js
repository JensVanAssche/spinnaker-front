import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import ZwemmenIndex from "./ZwemmenIndex";
import ZwemmenKalender from "./ZwemmenKalender";
import NotFound from "notFound/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../sport.scss";

function onHamburgerClick() {
  if (window.innerWidth <= 768) {
    document.querySelector(".subnav ul").classList.toggle("open");
    document.querySelector("nav ul").classList.remove("open");
    if (document.querySelector("nav.subsubnav ul"))
      document.querySelector("nav.subsubnav ul").classList.remove("open");
  }
}

function onNavigationClick() {
  if (window.innerWidth <= 768) {
    document.querySelector(".subnav ul").classList.remove("open");
  }
}

function Zwemmen({ match }) {
  return (
    <div className="Zwemmen">
      <nav className="subnav">
        <div className="hamburger">
          <span>{window.location.pathname.split("/")[2]}</span>
          <span>
            <FontAwesomeIcon icon={faBars} onClick={() => onHamburgerClick()} />
          </span>
        </div>
        <ul className="ui container">
          <li onClick={() => onNavigationClick()}>
            <NavLink to={match.path} exact={true}>
              ZWEMMEN
            </NavLink>
          </li>
          <li onClick={() => onNavigationClick()}>
            <NavLink to={`${match.path}/kalender`}>zwemmen kalender</NavLink>
          </li>
        </ul>
      </nav>
      <div className="ui container">
        <Switch>
          <Route exact path={match.path} component={ZwemmenIndex} />
          <Route
            exact
            path={`${match.path}/kalender`}
            component={ZwemmenKalender}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default Zwemmen;
