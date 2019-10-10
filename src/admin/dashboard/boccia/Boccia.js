import React from 'react';
import { Tab } from 'semantic-ui-react';

import Algemeen from './algemeen/Algemeen';
import Parantee from './parantee/Parantee';
import Scholen from './scholen/Scholen';
import Nederland from './nederland/Nederland';

class Boccia extends React.Component {
  panes = [
    {
      menuItem: "Algemeen",
      render: () => <Algemeen />,
    },
    {
      menuItem: "Parantee",
      render: () => <Parantee />,
    },
    {
      menuItem: "Scholen",
      render: () => <Scholen />,
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

export default Boccia;
