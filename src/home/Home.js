import React from 'react';
import { Link } from 'react-router-dom';
import Sport from './sport/Sport';
import Nieuws from './nieuws/Nieuws';
import Wave from 'assets/images/wave.png';
import './home.scss';

function Home() {
  return <div className="home">
    <div className="welcome">
      <div>
        <h1>Welkom bij Spinnaker!</h1>
        <Link to="/spinnaker">Ontdek wie we zijn</Link>
      </div>
      <img src={Wave} alt="wave" />
    </div>
    <div className="ui container">
      <div className="sports">
        <h1>Onze Sporten</h1>
        <div>
          <Sport name="boccia" />
          <Sport name="hockey" />
        </div>
        <div>
          <Sport name="dansen" />
          <Sport name="zwemmen" />
          <Sport name="handbal" />
        </div>
      </div>
      <div className="nieuws">
        <h1>Nieuws</h1>
        <Nieuws title="Eerste versie hockey- en bocciakalender gelanceerd" date="3 juli 2019" />
        <Nieuws title="Nieuwe Spinnaker krant is er" date="24 juli 2019" />
        <Nieuws title="Nederlandse competitie boccia eindigt - Spinnaker missie volbracht" date="23 juli 2019" />
        <div className="cta">
          <Link to="/nieuws">Meer nieuws</Link>
        </div>
      </div>
    </div>
  </div>;
}

export default Home;
