import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import logoWhite from 'assets/images/logo_white.png';
import header from 'assets/images/header.jpg';

function Header() {
  return (
    <header>
      <div className="header-image" style={{'backgroundImage': `url(${header})`}}>
        <div className="ui container">
        <Link to="/"><img src={logoWhite} alt="Logo" /></Link>
        </div>
      </div>
      <nav>
        <ul className="ui container">
          <li><NavLink to="/" exact={true} >HOME</NavLink></li>
          <li><NavLink to="/spinnaker">SPINNAKER</NavLink></li>
          <li>
            <div className="ui simple dropdown item">
              <span>SPORTEN</span>
              <div className="menu">
                <Link to="/boccia">BOCCIA</Link>
                <Link to="/dansen">DANSEN</Link>
                <Link to="/hockey">HOCKEY</Link>
                <Link to="/handbal">ROLSTOELHANDBAL</Link>
                <Link to="/zwemmen">ZWEMMEN</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="ui simple dropdown item">
              <span>KALENDER</span>
              <div className="menu">
                <Link to="/boccia/kalender">BOCCIA KALENDER</Link>
                <Link to="/hockey/kalender">HOCKEY KALENDER</Link>
                <Link to="/handbal/kalender">HANDBAL KALENDER</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="ui simple dropdown item">
              <span>GALLERIJ</span>
              <div className="menu">
                <Link to="/fotos">FOTO'S</Link>
                <Link to="/videos">VIDEO'S</Link>
              </div>
            </div>
          </li>
          <li><NavLink to="/publicaties">PUBLICATIES</NavLink></li>
          <li><NavLink to="/nieuws">NIEUWS</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
