import React from 'react';
import { Tab } from 'semantic-ui-react';

import Algemeen from './algemeen/Algemeen';
import Wheelblazers1 from './wheelblazers1/Wheelblazers1';
import Wheelblazers2 from './wheelblazers2/Wheelblazers2';
import Wheelblazers3 from './wheelblazers3/Wheelblazers3';
import Wheelblazers4 from './wheelblazers4/Wheelblazers4';
import Nederland from './nederland/Nederland';
import Kalender from './kalender/Kalender';
import Historiek from './historiek/Historiek';

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
    {
      menuItem: "Kalender",
      render: () => <Kalender />,
    },
    {
      menuItem: "Historiek",
      render: () => <Historiek />,
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
