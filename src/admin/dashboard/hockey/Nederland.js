import React from 'react';
import { Tab, Button, Icon, Grid } from 'semantic-ui-react';
import Network from 'utils/network';

class Wheelblazers1 extends React.Component {
  state = {
    players: null,
    results: null,
    standings: null,
  }

  componentDidMount() {
    Network.get('api/players/hockeynederland').then((res) =>
      this.setState({ players: res })
    );

    Network.get('api/results/hockeynederland').then((res) =>
      this.setState({ results: res })
    );

    Network.get('api/standings/hockeynederland').then((res) =>
      this.setState({ standings: res })
    );
  }

  render() {
    const { players, results, standings } = this.state;
    const { openPlayerModal, openResultTournamentModal, openResultScoreModal, openStandingsTournamentModal, openStandingsScoreModal } = this.props;

    if (!players || !results || !standings) return null;

    return <Tab.Pane className="no-border">
      <h1>Hockey Nederland</h1>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Hockey Nederland Spelers</h2>
          <Button icon primary className="small-button" onClick={() => openPlayerModal('Hockey Nederland Speler toevoegen')}>
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
          {players.map(type => (
            type.players.map(player => (
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
                  <Button icon className="small-button" onClick={() => openPlayerModal('Hockey Nederland Speler aanpassen', player)}>
                    <Icon name="edit" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            ))
          ))}
        </Grid>
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Hockey Nederland Resultaten</h2>
          <Button icon primary className="small-button" onClick={() => openResultTournamentModal('Hockey Nederland Tornooi toevoegen')}>
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
              <Button icon className="small-button" onClick={() => openResultTournamentModal('Hockey Nederland Tornooi aanpassen', result)}>
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
                  <Button icon className="small-button" onClick={() => openResultScoreModal('Hockey Nederland Resultaat aanpassen', score)}>
                    <Icon name="edit" />
                  </Button>
                </div>
              ))}
              <div className="scores-content-entry">
                <div />
                <Button icon primary className="small-button" onClick={() => openResultScoreModal('Hockey Nederland Resultaat toevoegen')}>
                  <Icon name="add" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Hockey Nederland Stand</h2>
          <Button icon primary className="small-button" onClick={() => openStandingsTournamentModal('Hockey Nederland Tornooi toevoegen')} >
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
              <Button icon className="small-button" onClick={() => openStandingsTournamentModal('Hockey Nederland Tornooi aanpassen', stand)}>
                <Icon name="edit" />
              </Button>
            </div>
            <div className="scores-content">
              {stand.scores.map(score => (
                <div key={score.id} className="scores-content-entry">
                  <div>
                    <p>{score.name}: {score.points1} - {score.points2} - {score.points3}</p>
                  </div>
                  <Button icon className="small-button" onClick={() => openStandingsScoreModal('Hockey Nederland Stand aanpassen', score)}>
                    <Icon name="edit" />
                  </Button>
                </div>
              ))}
              <div className="scores-content-entry">
                <div />
                <Button icon primary className="small-button" onClick={() => openStandingsScoreModal('Hockey Nederland Stand toevoegen')}>
                  <Icon name="add" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Tab.Pane>;
  }
}

export default Wheelblazers1;
