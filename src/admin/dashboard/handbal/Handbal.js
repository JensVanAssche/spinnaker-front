import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "app/selectors";
import { Tab, Button, Icon, Grid } from 'semantic-ui-react';
import Network from 'utils/network';

class Handbal extends React.Component {
  state = {
    calendar: null,
  }

  componentDidMount() {
    Network.get('api/calendar/handbal').then((res) =>
      this.setState({ calendar: res })
    );
  }

  render() {
    const { calendar } = this.state;
    const { openTextareaModal, openFileModal, openKalenderModal, data } = this.props;

    if (!calendar) return null;

    return <Tab.Pane>
      <h1>Handbal</h1>
      <div className="dashboard-item">
        <h2>Handbal Foto</h2>
        <div className="dashboard-flex">
          <img src={process.env.REACT_APP_API_HOST + data.handbalImg} alt="eumm" />
          <Button icon className="small-button" onClick={() => openFileModal('Handbal Foto')} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Handbal Tekst</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.handbalOver.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Handbal Tekst', 'content/data/handbalOver', data.handbalOver)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Handbal Kalender</h2>
          <Button icon primary className="small-button" onClick={() => openKalenderModal('Handbal Kalender Item toevoegen')}>
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
                <Button icon className="small-button" onClick={() => openKalenderModal('Handbal Kalender Item aanpassen', entry)}>
                  <Icon name="edit" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
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
)(Handbal);
