import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";
import { getPlayers } from "redux/players/actions";
import { getCalendar } from "redux/calendar/actions";
import { getResults } from "redux/results/actions";
import { getStandings } from "redux/standings/actions";
import { selectPlayers } from "redux/players/selectors";
import { selectCalendar } from "redux/calendar/selectors";
import { selectResults } from "redux/results/selectors";
import { selectStandings } from "redux/standings/selectors";
import { Tab, Button, Icon, Grid, Dimmer, Loader } from "semantic-ui-react";

class Nederland extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await this.props.getPlayers("boccianederland");
    await this.props.getCalendar("nederland");
    await this.props.getResults("boccianederland");
    await this.props.getStandings("boccianederland");
    this.setState({ loading: false });
  }

  render() {
    const {
      openTextareaModal,
      openPdfModal,
      openPlayerModal,
      openKalenderModal,
      data,
      players,
      calendar,
      results,
      standings
    } = this.props;

    if (this.state.loading)
      return (
        <Dimmer active inverted>
          <Loader inverted />
        </Dimmer>
      );

    if (!players || !calendar || !results || !standings)
      return (
        <Dimmer active inverted>
          <Loader inverted />
        </Dimmer>
      );

    return (
      <Tab.Pane className="no-border">
        <h1>Competitie Nederland</h1>
        <div className="dashboard-item">
          <h2>Nederland Tekst</h2>
          <div className="dashboard-flex">
            <p
              dangerouslySetInnerHTML={{
                __html: data.bocciaNederland.substring(0, 255) + "..."
              }}
            />
            <Button
              icon
              className="small-button"
              onClick={() =>
                openTextareaModal(
                  "Nederland Tekst",
                  "content/data/bocciaNederland",
                  data.bocciaNederland
                )
              }
            >
              <Icon name="edit" />
            </Button>
          </div>
        </div>
        <div className="dashboard-item">
          <div className="dashboard-flex">
            <h2>Nederland Spelers</h2>
            <Button
              icon
              primary
              className="small-button"
              onClick={() =>
                openPlayerModal(
                  "Boccia Nederland Speler toevoegen",
                  null,
                  "boccianederland"
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
                        "Boccia Nederland Speler aanpassen",
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
            <h2>Nederland Kalender</h2>
            <Button
              icon
              primary
              className="small-button"
              onClick={() =>
                openKalenderModal(
                  "Boccia Nederland Kalender Item toevoegen",
                  null,
                  "nederland"
                )
              }
            >
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
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
            {!calendar.length && <p>Geen kalender items</p>}
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
                  <Button
                    icon
                    className="small-button"
                    onClick={() =>
                      openKalenderModal(
                        "Boccia Nederland Kalender Item aanpassen",
                        entry,
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
            <h2>Nederland Resultaten</h2>
            <Button
              icon
              primary
              className="small-button"
              onClick={() =>
                openPdfModal(
                  "Boccia Nederland Resultaat toevoegen",
                  "results/pdf",
                  null,
                  "boccianederland"
                )
              }
            >
              <span>Resultaat</span>
              <Icon name="add" />
            </Button>
          </div>
          {!results.length && <p>Geen resultaten</p>}
          {results.map(result => (
            <div className="dashboard-flex" key={result.id}>
              <div>
                <p>{result.title}</p>
                <a
                  href={process.env.REACT_APP_API_HOST + result.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {result.pdf}
                </a>
              </div>
              <Button
                icon
                className="small-button"
                onClick={() =>
                  openPdfModal(
                    "Boccia Nederland Resultaat aanpassen",
                    "results/pdf",
                    result,
                    null
                  )
                }
              >
                <Icon name="edit" />
              </Button>
            </div>
          ))}
        </div>
        <div className="dashboard-item">
          <div className="dashboard-flex">
            <h2>Nederland Stand</h2>
            <Button
              icon
              primary
              className="small-button"
              onClick={() =>
                openPdfModal(
                  "Boccia Nederland Stand toevoegen",
                  "standings/pdf",
                  null,
                  "boccianederland"
                )
              }
            >
              <span>Stand</span>
              <Icon name="add" />
            </Button>
          </div>
          {!standings.length && <p>Geen stand</p>}
          {standings.map(stand => (
            <div className="dashboard-flex" key={stand.id}>
              <div>
                <p>{stand.title}</p>
                <a
                  href={process.env.REACT_APP_API_HOST + stand.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {stand.pdf}
                </a>
              </div>
              <Button
                icon
                className="small-button"
                onClick={() =>
                  openPdfModal(
                    "Boccia Nederland Stand aanpassen",
                    "standings/pdf",
                    stand,
                    null
                  )
                }
              >
                <Icon name="edit" />
              </Button>
            </div>
          ))}
        </div>
        <div className="dashboard-item">
          <h2>Nederland Historiek</h2>
          <div className="dashboard-flex">
            <p
              dangerouslySetInnerHTML={{
                __html: data.nederlandHistory.substring(0, 255) + "..."
              }}
            />
            <Button
              icon
              className="small-button"
              onClick={() =>
                openTextareaModal(
                  "Nederland Historiek",
                  "content/data/nederlandHistory",
                  data.nederlandHistory
                )
              }
            >
              <Icon name="edit" />
            </Button>
          </div>
        </div>
      </Tab.Pane>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Nederland);
