import React from 'react';
import Wave from 'assets/images/wave_darkblue.png';
import logoSporting from 'assets/images/logo_sporting.jpg';
import logoVlaanderen from 'assets/images/logo_sportvlaanderen.png';
import logoSporta from 'assets/images/logo_sporta.png';
import logoParantee from 'assets/images/logo_parantee.png';
import logoHeder from 'assets/images/heder_logo.png';
import './footer.scss';

function Footer() {
  return <footer>
    <img src={Wave} alt="wave" />
    <div className="footer-content">
      <div className="ui container logos">
        <div>
          <h1>Met steun van</h1>
          <img src={logoSporting} alt="logo" />
          <img src={logoVlaanderen} alt="logo" />
        </div>
        <div>
          <h1>Aangesloten bij</h1>
          <img src={logoSporta} alt="logo" />
          <img src={logoParantee} alt="logo" />
        </div>
        <div>
          <h1>Onderdeel van</h1>
          <img src={logoHeder} alt="logo" />
        </div>
      </div>
      <div className="ui container contact">
        <div>
          <h1>Contact</h1>
          <span>03 541 33 80</span>
          <span>info@spinnaker-sport.be</span>
        </div>
        <div>
          <h1>Locatie</h1>
          <span>Heder Instituut</span>
          <span>Galjoenstraat 2,</span>
          <span>2030 Antwerpen</span>
        </div>
      </div>
    </div>
  </footer>;
}

export default Footer;
