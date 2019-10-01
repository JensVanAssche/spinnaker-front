import React from 'react';
import { Link } from 'react-router-dom';
import Sport from './sport/Sport';
import Nieuws from './nieuws/Nieuws';
import Wave from 'assets/images/wave.png';
import './home.scss';

class Home extends React.Component {
  state = {
    nieuws: [
      { id: '1', title: "Eerste versie hockey- en bocciakalender gelanceerd", date: "3 juli 2019" },
      { id: '2', title: "Nieuwe Spinnaker krant is er", date: "24 juli 2019" },
      { id: '3', title: "Nederlandse competitie boccia eindigt - Spinnaker missie volbracht", date: "23 juli 2019" },
    ],
  };

  render() {
    return (
      <div className="home">
        <div className="welcome">
          <div>
            <h1>Welkom bij Spinnaker!</h1>
            <Link to="/spinnaker">Ontdek wie we zijn</Link>
          </div>
          <img src={Wave} alt="wave" />
        </div>
        <div className="ui container">
          <div className="sports">
            <h2>Onze Sporten</h2>
            <div>
              <Sport name="boccia" />
              <Sport name="hockey" />
            </div>
            <div>
              <Sport name="dansen" />
              <Sport name="zwemmen" />
              <Sport name="rolstoel handbal" />
            </div>
          </div>
          <div className="nieuws">
            <h2>Nieuws</h2>
            {this.state.nieuws.map(item => (
              <Nieuws id={item.id} title={item.title} date={item.date} key={item.id} />
            ))}
            <div className="cta">
              <Link to="/nieuws">Meer nieuws</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
