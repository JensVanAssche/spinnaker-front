import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import logoWhite from 'assets/images/logo_white.png';

function Header() {
  return (
    <header>
      <div className="header-image" style={{'backgroundImage': `url(${process.env.REACT_APP_API_HOST}/header.jpg)`}}>
        <div className="ui container">
        <Link to="/"><img src={logoWhite} alt="Logo" /></Link>
        </div>
      </div>
      <nav>
        <ul className="ui container">
          <li><NavLink to="/" exact={true} >HOME</NavLink></li>
          <li><NavLink to="/spinnaker">SPINNAKER</NavLink></li>
          <li>
            <div className={"ui simple dropdown " +
            (window.location.pathname.split("/")[1] === "boccia" ? 'aaaaa' : "") +
            (window.location.pathname.split("/")[1] === "dansen" ? 'aaaaa' : "") +
            (window.location.pathname.split("/")[1] === "hockey" ? 'aaaaa' : "") +
            (window.location.pathname.split("/")[1] === "handbal" ? 'aaaaa' : "") +
            (window.location.pathname.split("/")[1] === "zwemmen" ? 'aaaaa' : "")}>
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
            <div className="ui simple dropdown">
              <span>KALENDER</span>
              <div className="menu">
                <Link to="/boccia/kalender">BOCCIA KALENDER</Link>
                <Link to="/hockey/kalender">HOCKEY KALENDER</Link>
                <Link to="/handbal/kalender">HANDBAL KALENDER</Link>
                <Link to="/zwemmen/kalender">ZWEMMEN KALENDER</Link>
              </div>
            </div>
          </li>
          <li>
            <div className={"ui simple dropdown " +
            (window.location.pathname.split("/")[1] === "fotos" ? 'aaaaa' : "") +
            (window.location.pathname.split("/")[1] === "videos" ? 'aaaaa' : "")}>
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
