import React from 'react';
import Network from 'utils/network';
import { Link } from 'react-router-dom';
import Sport from './sport/Sport';
import Nieuws from './nieuws/Nieuws';
import Wave from 'assets/images/wave.png';
import './home.scss';

class Home extends React.Component {
  state = {
    loading: true,
    nieuws: null,
  }

  componentDidMount() {
    Network.get('api/news/latest').then((res) => {
      this.setState({
        loading: false,
        nieuws: res,
      })
    });
  }

  render() {
    const { loading, nieuws } = this.state;

    if (loading) return null;

    return (
      <div className="home">
        <div className="welcome">
          <div>
            <h1>Welkom bij Spinnaker!</h1>
            <Link to="/spinnaker">Ontdek wie we zijn</Link>
          </div>
          <img src={Wave} alt="wave" />
        </div>
        <div className="ui container content">
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
            {!nieuws.length && (<p>Geen nieuws om te weergeven</p>)}
            {nieuws.map(item => (
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
