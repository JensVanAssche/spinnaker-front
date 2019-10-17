import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "redux/content/selectors";
import { getPlayers } from "redux/players/actions";
import { getCalendar } from "redux/calendar/actions";
import { getResults } from "redux/results/actions";
import { getStandings } from "redux/standings/actions";
import { selectPlayers } from "redux/players/selectors";
import { selectCalendar } from "redux/calendar/selectors";
import { selectResults } from "redux/results/selectors";
import { selectStandings } from "redux/standings/selectors";
import { Tab, Button, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react';

class Scholen extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.props.getPlayers('scholen');
    await this.props.getCalendar('scholen');
    await this.props.getResults('scholen');
    await this.props.getStandings('scholen');
    this.setState({ loading: false })
  }

  render() {
    const {
      openTextareaModal,
      openPlayerModal,
      openResultTournamentModal,
      openResultScoreModal,
      openStandingsTournamentModal,
      openStandingsScoreModal,
      openKalenderModal,
      data,
      players,
      calendar,
      results,
      standings
    } = this.props;

    if (this.state.loading) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    if (!players || !calendar || !results || !standings) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    return <Tab.Pane className="no-border">
      <h1>Scholen Competitie</h1>
      <div className="dashboard-item">
        <h2>Scholen Tekst</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.bocciaScholen.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Scholen Tekst', 'content/data/bocciaScholen', data.bocciaScholen)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Scholen Spelers</h2>
          <Button icon primary className="small-button" onClick={() => openPlayerModal('Scholen Speler toevoegen', null, 'scholen')}>
            <span>Speler</span>
            <Icon name="add" />
          </Button>
        </div>
        <Grid columns={4}>
          <Grid.Row className="grid-header">
            <Grid.Column width={2}>
              <p>Foto</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <p>Naam</p>
            </Grid.Column>
            <Grid.Column width={2}>
              <p>Subtitel</p>
            </Grid.Column>
            <Grid.Column width={7}>
            </Grid.Column>
          </Grid.Row>
          {!players.length && ( <p>Geen spelers</p> )}
          {players.map(player => (
            <Grid.Row key={player.id}>
              <Grid.Column width={2}>
                <img src={process.env.REACT_APP_API_HOST + player.image} alt="eumm" />
              </Grid.Column>
              <Grid.Column width={5}>
                <p>{player.name}</p>
              </Grid.Column>
              <Grid.Column width={2}>
                <p>{player.subtitle}</p>
              </Grid.Column>
              <Grid.Column width={7} className="grid-button">
                <Button icon className="small-button" onClick={() => openPlayerModal('Scholen Speler aanpassen', player, null)}>
                  <Icon name="edit" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Parantee Kalender</h2>
          <Button icon primary className="small-button" onClick={() => openKalenderModal('Parantee Kalender Item toevoegen', null, 'scholen')}>
            <span>Item</span>
            <Icon name="add" />
          </Button>
        </div>
        <Grid columns={4}>
          <Grid.Row className="grid-header">
            <Grid.Column width={4}>
              <p>Wanneer</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <p>Wat</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <p>Waar</p>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
          {!calendar.length && ( <p>Geen kalender items</p> )}
          {calendar.map(entry => (
            <Grid.Row key={entry.id}>
              <Grid.Column width={4}>
                <p>{entry.date}</p>
              </Grid.Column>
              <Grid.Column width={5}>
                <p>{entry.title}</p>
              </Grid.Column>
              <Grid.Column width={5}>
                <p>{entry.location}</p>
              </Grid.Column>
              <Grid.Column width={2} className="grid-button">
                <Button icon className="small-button" onClick={() => openKalenderModal('Parantee Kalender Item aanpassen', entry, null)}>
                  <Icon name="edit" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Scholen Resultaten</h2>
          <Button icon primary className="small-button" onClick={() => openResultTournamentModal('Scholen Tornooi toevoegen', null, 'scholen')}>
            <span>Tornooi Resultaat</span>
            <Icon name="add" />
          </Button>
        </div>
        {!results.length && ( <p>Geen resultaten</p> )}
        {results.map(result => (
          <div key={result.id} className="scores-grid">
            <div className="scores-header">
              <div>
                <p>{result.title}</p>
                <p>{result.date}</p>
              </div>
              <Button icon className="small-button" onClick={() => openResultTournamentModal('Scholen Tornooi aanpassen', result, 'scholen')}>
                <Icon name="edit" />
              </Button>
            </div>
            <div className="scores-content">
              {result.scores.map(score => (
                <div key={score.id} className="scores-content-entry">
                  <div>
                    <p>{score.team1}: {score.team1Score}</p>
                    <p>{score.team2}: {score.team2Score}</p>
                  </div>
                  <Button icon className="small-button" onClick={() => openResultScoreModal('Scholen Resultaat aanpassen', score, null)}>
                    <Icon name="edit" />
                  </Button>
                </div>
              ))}
              <div className="scores-content-entry">
                <div />
                <Button icon primary className="small-button" onClick={() => openResultScoreModal('Scholen Resultaat toevoegen', null, result.id)}>
                  <Icon name="add" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Scholen Stand</h2>
          <Button icon primary className="small-button" onClick={() => openStandingsTournamentModal('Scholen Tornooi toevoegen')} >
            <span>Tornooi Stand</span>
            <Icon name="add" />
          </Button>
        </div>
        {!standings.length && ( <p>Geen stand</p> )}
        {standings.map(stand => (
          <div key={stand.id} className="scores-grid">
            <div className="scores-header">
              <div>
                <p>{stand.title}</p>
                <p>{stand.subtitle}</p>
              </div>
              <Button icon className="small-button" onClick={() => openStandingsTournamentModal('Scholen Tornooi aanpassen', stand)}>
                <Icon name="edit" />
              </Button>
            </div>
            <div className="scores-content">
              {stand.scores.map(score => (
                <div key={score.id} className="scores-content-entry">
                  <div>
                    <p>{score.name}: {score.points1} - {score.points2}</p>
                  </div>
                  <Button icon className="small-button" onClick={() => openStandingsScoreModal('Scholen Stand aanpassen', score)}>
                    <Icon name="edit" />
                  </Button>
                </div>
              ))}
              <div className="scores-content-entry">
                <div />
                <Button icon primary className="small-button" onClick={() => openStandingsScoreModal('Scholen Stand toevoegen')}>
                  <Icon name="add" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard-item">
        <h2>Scholen Historiek</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.scholenHistory.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Scholen Historiek', 'content/data/scholenHistory', data.scholenHistory)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
    </Tab.Pane>;
  }
}

const mapDispatchToProps = {
  getPlayers,
  getCalendar,
  getResults,
  getStandings
};

const mapStateToProps = state => ({
  data: selectData(state),
  players: selectPlayers(state),
  calendar: selectCalendar(state),
  results: selectResults(state),
  standings: selectStandings(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scholen);
