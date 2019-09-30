import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logoWhite from 'assets/images/logo_white.png';

function Header() {
  return (
    <header>
      <div className="header-image">
        <div className="ui container">
        <Link to="/"><img src={logoWhite} alt="Logo" /></Link>
        </div>
      </div>
      <nav>
        <ul className="ui container">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/spinnaker">SPINNAKER</Link></li>
          <li>
            <div className="ui simple dropdown item">
              <span>SPORTEN</span>
              <div className="menu">
                <Link to="/boccia">BOCCIA</Link>
                <Link to="/dansen">DANSEN</Link>
                <Link to="/hockey">HOCKEY</Link>
                <Link to="/handbal">HANDBAL</Link>
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
          <li><Link to="/publicaties">PUBLICATIES</Link></li>
          <li><Link to="/nieuws">NIEUWS</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
