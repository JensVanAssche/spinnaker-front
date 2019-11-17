import React from "react";
import { connect } from "react-redux";
import { getPlayers } from "redux/players/actions";
import { getResults } from "redux/results/actions";
import { getStandings } from "redux/standings/actions";
import { selectPlayers } from "redux/players/selectors";
import { selectResults } from "redux/results/selectors";
import { selectStandings } from "redux/standings/selectors";
import { Tab, Button, Icon, Grid, Dimmer, Loader } from "semantic-ui-react";

class Wheelblazers1 extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await this.props.getPlayers("blazers1");
    await this.props.getResults("blazers1");
    await this.props.getStandings("blazers1");
    this.setState({ loading: false });
  }

  render() {
    const {
      openPlayerModal,
      openResultTournamentModal,
      openResultScoreModal,
      openStandingsTournamentModal,
      openStandingsScoreModal,
      players,
      results,
      standings
    } = this.props;

    if (this.state.loading)
      return (
        <Dimmer active inverted>
          <Loader inverted />
        </Dimmer>
      );

    if (!players || !results || !standings)
      return (
        <Dimmer active inverted>
          <Loader inverted />
        </Dimmer>
      );

    return (
      <Tab.Pane className="no-border">
        <h1>Wheelblazers 1</h1>
        <div className="dashboard-item">
          <div className="dashboard-flex">
            <h2>Wheelblazers 1 Spelers</h2>
            <Button
              icon
              primary
              className="small-button"
              onClick={() =>
                openPlayerModal(
                  "Wheelblazers 1 Speler toevoegen",
                  null,
                  "blazers1"
                )
              }
            >
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
              <Grid.Column width={7}></Grid.Column>
            </Grid.Row>
            {!players.length && <p>Geen spelers</p>}
            {players.map(player => (
              <Grid.Row key={player.id}>
                <Grid.Column width={2}>
                  <img
                    src={process.env.REACT_APP_API_HOST + player.image}
                    alt="speler foto"
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                  <p>{player.name}</p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <p>{player.subtitle}</p>
                </Grid.Column>
                <Grid.Column width={7} className="grid-button">
                  <Button
                    icon
                    className="small-button"
                    onClick={() =>
                      openPlayerModal(
                        "Wheelblazers 1 Speler aanpassen",
                        player,
                        null
                      )
                    }
                  >
                    <Icon name="edit" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-flex">
            <h2>Wheelblazers 1 Resultaten</h2>
            <Button
              icon
              primary
              className="small-button"
              onClick={() =>
                openResultTournamentModal(
                  "Wheelblazers 1 Tornooi toevoegen",
                  null,
                  "blazers1"
                )
              }
            >
              <span>Tornooi Resultaat</span>
              <Icon name="add" />
            </Button>
          </div>
          {!results.length && <p>Geen resultaten</p>}
          {results.map(result => (
            <div key={result.id} className="scores-grid">
              <div className="scores-header">
                <div>
                  <p>{result.title}</p>
                  <p>{result.date}</p>
                </div>
                <Button
                  icon
                  className="small-button"
                  onClick={() =>
                    openResultTournamentModal(
                      "Wheelblazers 1 Tornooi aanpassen",
                      result,
                      null
                    )
                  }
                >
                  <Icon name="edit" />
                </Button>
              </div>
              <div className="scores-content">
                {result.scores.map(score => (
                  <div key={score.id} className="scores-content-entry">
                    <div>
                      <p>
                        {score.team1}: {score.team1Score}
                      </p>
                      <p>
                        {score.team2}: {score.team2Score}
                      </p>
                    </div>
                    <Button
                      icon
                      className="small-button"
                      onClick={() =>
                        openResultScoreModal(
                          "Wheelblazers 1 Resultaat aanpassen",
                          score,
                          null
                        )
                      }
                    >
                      <Icon name="edit" />
                    </Button>
                  </div>
                ))}
                <div className="scores-content-entry">
                  <div />
                  <Button
                    icon
                    primary
                    className="small-button"
                    onClick={() =>
                      openResultScoreModal(
                        "Wheelblazers 1 Resultaat toevoegen",
                        null,
                        result.id
                      )
                    }
                  >
                    <Icon name="add" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dashboard-item">
          <div className="dashboard-flex">
            <h2>Wheelblazers 1 Stand</h2>
            <Button
              icon
              primary
              className="small-button"
              onClick={() =>
                openStandingsTournamentModal(
                  "Wheelblazers 1 Tornooi toevoegen",
                  null,
                  "blazers1"
                )
              }
            >
              <span>Tornooi Stand</span>
              <Icon name="add" />
            </Button>
          </div>
          {!standings.length && <p>Geen stand</p>}
          {standings.map(stand => (
            <div key={stand.id} className="scores-grid">
              <div className="scores-header">
                <div>
                  <p>{stand.title}</p>
                  <p>{stand.subtitle}</p>
                </div>
                <Button
                  icon
                  className="small-button"
                  onClick={() =>
                    openStandingsTournamentModal(
                      "Wheelblazers 1 Tornooi aanpassen",
                      stand,
                      null
                    )
                  }
                >
                  <Icon name="edit" />
                </Button>
              </div>
              <div className="scores-content">
                {stand.scores.map(score => (
                  <div key={score.id} className="scores-content-entry">
                    <div>
                      <p>
                        {score.name}: {score.points1} - {score.points2} -{" "}
                        {score.points3}
                      </p>
                    </div>
                    <Button
                      icon
                      className="small-button"
                      onClick={() =>
                        openStandingsScoreModal(
                          "Wheelblazers 1 Stand aanpassen",
                          score,
                          null,
                          true
                        )
                      }
                    >
                      <Icon name="edit" />
                    </Button>
                  </div>
                ))}
                <div className="scores-content-entry">
                  <div />
                  <Button
                    icon
                    primary
                    className="small-button"
                    onClick={() =>
                      openStandingsScoreModal(
                        "Wheelblazers 1 Stand toevoegen",
                        null,
                        stand.id,
                        true
                      )
                    }
                  >
                    <Icon name="add" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tab.Pane>
    );
  }
}

const mapDispatchToProps = {
  getPlayers,
  getResults,
  getStandings
};

const mapStateToProps = state => ({
  players: selectPlayers(state),
  results: selectResults(state),
  standings: selectStandings(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Wheelblazers1);
