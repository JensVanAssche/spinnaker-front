import React from 'react';
import { Tab } from 'semantic-ui-react';

import Algemeen from './algemeen/Algemeen';
import Kalender from './kalender/Kalender';

class Hockey extends React.Component {
  panes = [
    {
      menuItem: "Algemeen",
      render: () => <Algemeen />,
    },
    {
      menuItem: "Kalender",
      render: () => <Kalender />,
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
