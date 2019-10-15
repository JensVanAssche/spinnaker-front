import React from 'react';
import { connect } from 'react-redux';
import { Button, Tab } from 'semantic-ui-react';
import { logout } from 'admin/actions';
import './dashboard.scss';

import Algemeen from './algemeen/Algemeen';
import Spinnaker from './spinnaker/Spinnaker';
import Boccia from './boccia/Boccia';
import Hockey from './hockey/Hockey';
import Handbal from './handbal/Handbal';
import Zwemmen from './zwemmen/Zwemmen';
import Dansen from './dansen/Dansen';
import Fotos from './fotos/Fotos';
import Videos from './videos/Videos';
import Publicaties from './publicaties/Publicaties';
import Nieuws from './nieuws/Nieuws';

import InputModal from './modals/InputModal';
import TextareaModal from './modals/TextareaModal';
import FileModal from './modals/FileModal';
import PdfModal from './modals/PdfModal';
import LinkModal from './modals/LinkModal';
import PlayerModal from './modals/PlayerModal';
import ResultTournamentModal from './modals/ResultTournamentModal';
import ResultScoreModal from './modals/ResultScoreModal';
import StandingsTournamentModal from './modals/StandingsTournamentModal';
import StandingsScoreModal from './modals/StandingsScoreModal';
import KalenderModal from './modals/KalenderModal';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.inputModalRef = React.createRef();
    this.textareaModalRef = React.createRef();
    this.fileModalRef = React.createRef();
    this.pdfModalRef = React.createRef();
    this.linkModalRef = React.createRef();
    this.playerModalRef = React.createRef();
    this.resultTournamentModalRef = React.createRef();
    this.resultScoreModalRef = React.createRef();
    this.standingsTournamentModalRef = React.createRef();
    this.standingsScoreModalRef = React.createRef();
    this.kalenderModalRef = React.createRef();
  }

  panes = [
    {
      menuItem: "Algemeen",
      render: () => <Algemeen
        openTextareaModal={this.openTextareaModal}
        openFileModal={this.openFileModal}
      />,
    },
    {
      menuItem: "Spinnaker",
      render: () => <Spinnaker
        openInputModal={this.openInputModal}
        openTextareaModal={this.openTextareaModal}
        openPdfModal={this.openPdfModal}
        openLinkModal={this.openLinkModal}
      />,
    },
    {
      menuItem: "Boccia",
      render: () => <Boccia
        openInputModal={this.openInputModal}
        openTextareaModal={this.openTextareaModal}
        openFileModal={this.openFileModal}
        openPdfModal={this.openPdfModal}
        openLinkModal={this.openLinkModal}
        openPlayerModal={this.openPlayerModal}
        openResultTournamentModal={this.openResultTournamentModal}
        openResultScoreModal={this.openResultScoreModal}
        openStandingsTournamentModal={this.openStandingsTournamentModal}
        openStandingsScoreModal={this.openStandingsScoreModal}
        openKalenderModal={this.openKalenderModal}
      />,
    },
    {
      menuItem: "Hockey",
      render: () => <Hockey
        openFileModal={this.openFileModal}
        openTextareaModal={this.openTextareaModal}
        openKalenderModal={this.openKalenderModal}
        openPlayerModal={this.openPlayerModal}
        openResultTournamentModal={this.openResultTournamentModal}
        openResultScoreModal={this.openResultScoreModal}
        openStandingsTournamentModal={this.openStandingsTournamentModal}
        openStandingsScoreModal={this.openStandingsScoreModal}
      />,
    },
    {
      menuItem: "Handbal",
      render: () => <Handbal
        openFileModal={this.openFileModal}
        openTextareaModal={this.openTextareaModal}
        openKalenderModal={this.openKalenderModal}
      />,
    },
    {
      menuItem: "Zwemmen",
      render: () => <Zwemmen
        openFileModal={this.openFileModal}
        openTextareaModal={this.openTextareaModal}
        openKalenderModal={this.openKalenderModal}
      />,
    },
    {
      menuItem: "Dansen",
      render: () => <Dansen
        openFileModal={this.openFileModal}
        openTextareaModal={this.openTextareaModal}
      />,
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

  openInputModal = (title, data) => {
    this.inputModalRef.current.openModal(title, data);
  };

  openTextareaModal = (title, data) => {
    this.textareaModalRef.current.openModal(title, data);
  };

  openFileModal = (title) => {
    this.fileModalRef.current.openModal(title);
  };

  openPdfModal = (title, data) => {
    this.pdfModalRef.current.openModal(title, data);
  };

  openLinkModal = (title, data) => {
    this.linkModalRef.current.openModal(title, data);
  };

  openPlayerModal = (title, data) => {
    this.playerModalRef.current.openModal(title, data);
  };

  openResultModal = (title, data) => {
    this.resultModalRef.current.openModal(title, data);
  };

  openResultTournamentModal = (title, data) => {
    this.resultTournamentModalRef.current.openModal(title, data);
  };

  openResultScoreModal = (title, data) => {
    this.resultScoreModalRef.current.openModal(title, data);
  };

  openStandingsTournamentModal = (title, data) => {
    this.standingsTournamentModalRef.current.openModal(title, data);
  };

  openStandingsScoreModal = (title, data) => {
    this.standingsScoreModalRef.current.openModal(title, data);
  };

  openKalenderModal = (title, data) => {
    this.kalenderModalRef.current.openModal(title, data);
  };

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
        <InputModal ref={this.inputModalRef} />
        <TextareaModal ref={this.textareaModalRef} />
        <FileModal ref={this.fileModalRef} />
        <PdfModal ref={this.pdfModalRef} />
        <LinkModal ref={this.linkModalRef} />
        <PlayerModal ref={this.playerModalRef} />
        <ResultTournamentModal ref={this.resultTournamentModalRef} />
        <ResultScoreModal ref={this.resultScoreModalRef} />
        <StandingsTournamentModal ref={this.standingsTournamentModalRef} />
        <StandingsScoreModal ref={this.standingsScoreModalRef} />
        <KalenderModal ref={this.kalenderModalRef} />
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
