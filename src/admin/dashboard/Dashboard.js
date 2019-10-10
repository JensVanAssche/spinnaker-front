import React from 'react';
import { connect } from 'react-redux';
import { Button, Tab } from 'semantic-ui-react';
import { logout } from 'admin/actions';
import './dashboard.scss';

import Algemeen from './algemeen/Algemeen';
import Boccia from './boccia/Boccia';
import Hockey from './hockey/Hockey';
import Handbal from './handbal/Handbal';
import Zwemmen from './zwemmen/Zwemmen';
import Dansen from './dansen/Dansen';
import Fotos from './fotos/Fotos';
import Videos from './videos/Videos';
import Publicaties from './publicaties/Publicaties';
import Nieuws from './nieuws/Nieuws';

class Dashboard extends React.Component {
  panes = [
    {
      menuItem: "Algemeen",
      render: () => <Algemeen />,
    },
    {
      menuItem: "Boccia",
      render: () => <Boccia />,
    },
    {
      menuItem: "Hockey",
      render: () => <Hockey />,
    },
    {
      menuItem: "Handbal",
      render: () => <Handbal />,
    },
    {
      menuItem: "Zwemmen",
      render: () => <Zwemmen />,
    },
    {
      menuItem: "Dansen",
      render: () => <Dansen />,
    },
    {
      menuItem: "Foto's",
      render: () => <Fotos />,
    },
    {
      menuItem: "Video's",
      render: () => <Videos />,
    },
    {
      menuItem: "Publicaties",
      render: () => <Publicaties />,
    },
    {
      menuItem: "Nieuws",
      render: () => <Nieuws />,
    },
  ];

  logout = () => this.props.logout();

  render() {
    return (
      <div className="dashboard ui container">
        <div className="header">
          <h1>SPINNAKER DASHBOARD</h1>
          <div>
            <a href="/">
              <Button primary>
                NAAR WEBSITE
              </Button>
            </a>
            <Button primary onClick={this.logout}>
              LOGOUT
            </Button>
          </div>
        </div>
        <Tab className="main" menu={{ fluid: true, vertical: true, tabular: true }}  panes={this.panes} />
      </div>
    );
  }
  
}

const mapDispatchToProps = {
  logout,
};

export default connect(
  null,
  mapDispatchToProps,
)(Dashboard);
