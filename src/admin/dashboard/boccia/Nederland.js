import React from 'react';
import { connect } from 'react-redux';
import Network from 'utils/network';
import { selectData } from "app/selectors";
import { Tab, Button, Icon, Grid } from 'semantic-ui-react';

class Nederland extends React.Component {
  state = {
    players: null,
    results: null,
    standings: null,
  }

  componentDidMount() {
    Network.get('api/players/boccianederland').then((res) =>
      this.setState({ players: res })
    );

    Network.get('api/results/boccianederland').then((res) =>
      this.setState({ results: res })
    );

    Network.get('api/standings/boccianederland').then((res) =>
      this.setState({ standings: res })
    );
  }

  render() {
    const { players, results, standings } = this.state;
    const { openTextareaModal, openPdfModal, openPlayerModal, data } = this.props;

    if (!players || !results || !standings) return null;

    return <Tab.Pane className="no-border">
      <h1>Competitie Nederland</h1>
      <div className="dashboard-item">
        <h2>Nederland Inhoud</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.bocciaNederland.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Nederland Inhoud', data.bocciaNederland)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Nederland Spelers</h2>
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
                  <Button icon className="small-button"  onClick={() => openPlayerModal('Nederland Speler aanpassen', player)}>
                    <Icon name="edit" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            ))
          ))}
          <Grid.Row>
            <Grid.Column width={16} className="grid-button">
              <Button icon primary className="small-button"  onClick={() => openPlayerModal('Speler toevoegen')}>
                <span>Speler</span>
                <Icon name="add" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="dashboard-item">
        <h2>Nederland Resultaten</h2>
        {!results.length && ( <p>Geen resultaten</p> )}
        {results.map(result => (
          <div className="dashboard-flex" key={result.id}>
            <div>
              <p>{result.title}</p>
              <a href={process.env.REACT_APP_API_HOST + result.pdf} target="_blank" rel="noopener noreferrer">{result.pdf}</a>
            </div>
            <Button icon className="small-button" onClick={() => openPdfModal('Nederland Resultaten', { title: result.title, pdf: result.pdf } )}>
              <Icon name="edit" />
            </Button>
          </div>
        ))}
        <div className="dashboard-flex">
          <div />
          <Button icon primary className="small-button" onClick={() => openPdfModal('Resultaat Toevoegen', null)} >
            <span>Resultaat</span>
            <Icon name="add" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Nederland Stand</h2>
        {!standings.length && ( <p>Geen stand</p> )}
        {standings.map(stand => (
          <div className="dashboard-flex" key={stand.id}>
            <div>
              <p>{stand.title}</p>
              <a href={process.env.REACT_APP_API_HOST + stand.pdf} target="_blank" rel="noopener noreferrer">{stand.pdf}</a>
            </div>
            <Button icon className="small-button" onClick={() => openPdfModal('Nederland Stand', { title: stand.title, pdf: stand.pdf } )}>
              <Icon name="edit" />
            </Button>
          </div>
        ))}
        <div className="dashboard-flex">
          <div />
          <Button icon primary className="small-button" onClick={() => openPdfModal('Stand Toevoegen', null)} >
            <span>Stand</span>
            <Icon name="add" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Nederland Historiek</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.nederlandHistory.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Nederland Historiek', data.nederlandHistory)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
    </Tab.Pane>;
  }
}

const mapStateToProps = state => ({
  data: selectData(state),
});

export default connect(
  mapStateToProps,
  null,
)(Nederland);
