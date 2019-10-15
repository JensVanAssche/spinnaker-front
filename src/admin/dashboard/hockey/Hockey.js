import React from 'react';
import { Tab } from 'semantic-ui-react';

import Algemeen from './Algemeen';
import Wheelblazers1 from './Wheelblazers1';
import Wheelblazers2 from './Wheelblazers2';
import Wheelblazers3 from './Wheelblazers3';
import Wheelblazers4 from './Wheelblazers4';
import Nederland from './Nederland';

class Hockey extends React.Component {
  panes = [
    {
      menuItem: "Algemeen",
      render: () => <Algemeen />,
    },
    {
      menuItem: "Wheelblazers 1",
      render: () => <Wheelblazers1 />,
    },
    {
      menuItem: "Wheelblazers 2",
      render: () => <Wheelblazers2 />,
    },
    {
      menuItem: "Wheelblazers 3",
      render: () => <Wheelblazers3 />,
    },
    {
      menuItem: "Wheelblazers 4",
      render: () => <Wheelblazers4 />,
    },
    {
      menuItem: "Nederland",
      render: () => <Nederland />,
    },
  ];

  render() {
    return (
      <Tab.Pane>
        <Tab menu={{ secondary: true }} panes={this.panes} />
      </Tab.Pane>
    );
  }
}

export default Hockey;
