import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logoWhite from 'assets/images/logo_white.png';

function Header() {
  return (
    <header>
      <div className="header-image">
        <div className="ui container">
          <img src={logoWhite} alt="Logo" />
        </div>
      </div>
      <nav>
        <ul className="ui container">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/spinnaker">SPINNAKER</Link></li>
          <li><Link to="/sporten">SPORTEN</Link></li>
          <li><Link to="/kalender">KALENDER</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/publicaties">PUBLICATIES</Link></li>
          <li><Link to="/nieuws">NIEUWS</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
