import React from 'react';
import { connect } from 'react-redux';
import { Button, Tab } from 'semantic-ui-react';
import { logout } from 'admin/actions';
import './dashboard.scss';

class Dashboard extends React.Component {
  panes = [
    {
      menuItem: "a",
      render: () => <Tab.Pane>a</Tab.Pane>,
    },
    {
      menuItem: "b",
      render: () => <Tab.Pane>b</Tab.Pane>,
    },
    {
      menuItem: "c",
      render: () => <Tab.Pane>c</Tab.Pane>,
    },
  ];

  logout = () => this.props.logout();

  render() {
    return (
      <div className="dashboard ui container">
        <Tab panes={this.panes} />
        <div className="buttons">
          <Button primary onClick={this.logout}>
            LOGOUT
          </Button>
        </div>
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
