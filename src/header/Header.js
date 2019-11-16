import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

class Header extends React.Component {
  onMenuClick() {
    const aaa = document.querySelectorAll(".dropdown .menu");
    aaa.forEach(e => {
      e.classList.add("hidden");
    });

    if (window.innerWidth <= 768) {
      document.querySelector("nav ul").classList.remove("open");
    }
  }

  onDropdownHover() {
    const aaa = document.querySelectorAll(".dropdown .menu");
    aaa.forEach(e => {
      e.classList.remove("hidden");
    });
  }

  onDropdownClick(dropdown) {
    if (window.innerWidth <= 768) {
      document.querySelector(".dropdown." + dropdown).classList.toggle("open");
    }
  }

  onHamburgerClick() {
    if (window.innerWidth <= 768) {
      document.querySelector("nav ul").classList.toggle("open");
    }
  }

  onNavigationClick() {
    if (window.innerWidth <= 768) {
      document.querySelector("nav ul").classList.remove("open");
    }
  }

  render() {
    const { content } = this.props;

    var header;

    if (window.innerWidth < 500) {
      header = "small_" + content.headerImg;
    }

    if (window.innerWidth >= 500) {
      header = "medium_" + content.headerImg;
    }

    if (window.innerWidth >= 1000) {
      header = "large_" + content.headerImg;
    }

    return (
      <header>
        <div
          className="header-image"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_API_HOST + header}`
          }}
        >
          <div className="ui container">
            <Link to="/" onClick={() => this.onNavigationClick()}>
              <img
                src={process.env.REACT_APP_API_HOST + content.logoImg}
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <nav>
          <div className="hamburger">
            <span>{window.location.pathname.split("/")[1]}</span>
            <span>
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => this.onHamburgerClick()}
              />
            </span>
          </div>
          <ul className="ui container">
            <li onClick={() => this.onNavigationClick()}>
              <NavLink to="/" exact={true}>
                HOME
              </NavLink>
            </li>
            <li onClick={() => this.onNavigationClick()}>
              <NavLink to="/spinnaker">SPINNAKER</NavLink>
            </li>
            <li>
              <div
                className={
                  "ui simple dropdown sporten " +
                  (window.location.pathname.split("/")[1] === "boccia"
                    ? "aaaaa"
                    : "") +
                  (window.location.pathname.split("/")[1] === "hockey"
                    ? "aaaaa"
                    : "") +
                  (window.location.pathname.split("/")[1] === "handbal"
                    ? "aaaaa"
                    : "") +
                  (window.location.pathname.split("/")[1] === "dansen"
                    ? "aaaaa"
                    : "") +
                  (window.location.pathname.split("/")[1] === "zwemmen"
                    ? "aaaaa"
                    : "")
                }
                onMouseEnter={() => this.onDropdownHover()}
                onClick={() => this.onDropdownClick("sporten")}
              >
                <span>SPORTEN</span>
                <div className="menu" onClick={() => this.onMenuClick()}>
                  <Link to="/boccia">BOCCIA</Link>
                  <Link to="/hockey">HOCKEY</Link>
                  <Link to="/handbal">ROLSTOELHANDBAL</Link>
                  <Link to="/dansen">DANSEN</Link>
                  <Link to="/zwemmen">ZWEMMEN</Link>
                </div>
              </div>
            </li>
            <li>
              <div
                className="ui simple dropdown kalender"
                onMouseEnter={() => this.onDropdownHover()}
                onClick={() => this.onDropdownClick("kalender")}
              >
                <span>KALENDER</span>
                <div className="menu" onClick={() => this.onMenuClick()}>
                  <Link to="/boccia/kalender">BOCCIA KALENDER</Link>
                  <Link to="/hockey/kalender">HOCKEY KALENDER</Link>
                  <Link to="/handbal/kalender">HANDBAL KALENDER</Link>
                  <Link to="/zwemmen/kalender">ZWEMMEN KALENDER</Link>
                </div>
              </div>
            </li>
            <li>
              <div
                className={
                  "ui simple dropdown gallerij " +
                  (window.location.pathname.split("/")[1] === "fotos"
                    ? "aaaaa"
                    : "") +
                  (window.location.pathname.split("/")[1] === "videos"
                    ? "aaaaa"
                    : "")
                }
                onMouseEnter={() => this.onDropdownHover()}
                onClick={() => this.onDropdownClick("gallerij")}
              >
                <span>GALLERIJ</span>
                <div className="menu" onClick={() => this.onMenuClick()}>
                  <Link to="/fotos">FOTO'S</Link>
                  <Link to="/videos">VIDEO'S</Link>
                </div>
              </div>
            </li>
            <li onClick={() => this.onNavigationClick()}>
              <NavLink to="/publicaties">PUBLICATIES</NavLink>
            </li>
            <li onClick={() => this.onNavigationClick()}>
              <NavLink to="/nieuws">NIEUWS</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state)
});

export default connect(mapStateToProps, null)(Header);
