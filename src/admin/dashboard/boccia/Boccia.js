import React from 'react';
import { Tab } from 'semantic-ui-react';

import Algemeen from './Algemeen';
import Parantee from './Parantee';
import Scholen from './Scholen';
import Nederland from './Nederland';

class Boccia extends React.Component {
  panes = [
    {
      menuItem: "Algemeen",
      render: () => <Algemeen
        openTextareaModal={this.props.openTextareaModal}
        openFileModal={this.props.openFileModal}
      />,
    },
    {
      menuItem: "Parantee",
      render: () => <Parantee
        openTextareaModal={this.props.openTextareaModal}
        openPdfModal={this.props.openPdfModal}
        openPlayerModal={this.props.openPlayerModal}
        openKalenderModal={this.props.openKalenderModal}
      />,
    },
    {
      menuItem: "Scholen",
      render: () => <Scholen
        openTextareaModal={this.props.openTextareaModal}
        openPdfModal={this.props.openPdfModal}
        openPlayerModal={this.props.openPlayerModal}
        openResultTournamentModal={this.props.openResultTournamentModal}
        openResultScoreModal={this.props.openResultScoreModal}
        openStandingsTournamentModal={this.props.openStandingsTournamentModal}
        openStandingsScoreModal={this.props.openStandingsScoreModal}
        openKalenderModal={this.props.openKalenderModal}
      />,
    },
    {
      menuItem: "Nederland",
      render: () => <Nederland
        openTextareaModal={this.props.openTextareaModal}
        openPdfModal={this.props.openPdfModal}
        openPlayerModal={this.props.openPlayerModal}
        openKalenderModal={this.props.openKalenderModal}
      />,
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
