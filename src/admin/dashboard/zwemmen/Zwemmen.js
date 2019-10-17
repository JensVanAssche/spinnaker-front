import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "redux/content/selectors";
import { Tab, Button, Icon, Grid } from 'semantic-ui-react';
import Network from 'utils/network';

class Zwemmen extends React.Component {
  state = {
    calendar: null,
  }

  componentDidMount() {
    Network.get('api/calendar/zwemmen').then((res) =>
      this.setState({ calendar: res })
    );
  }

  render() {
    const { calendar } = this.state;
    const { openTextareaModal, openFileModal, openKalenderModal, data } = this.props;

    if (!calendar) return null;

    return <Tab.Pane>
      <h1>Zwemmen</h1>
      <div className="dashboard-item">
        <h2>Zwemmen Foto</h2>
        <div className="dashboard-flex">
          <img src={process.env.REACT_APP_API_HOST + data.zwemmenImg} alt="eumm" />
          <Button icon className="small-button" onClick={() => openFileModal('Zwemmen Foto', 'content/img/zwemmenImg')} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Zwemmen Tekst</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.zwemmenOver.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Zwemmen Tekst', 'content/data/zwemmenOver', data.zwemmenOver)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Zwemmen Kalender</h2>
          <Button icon primary className="small-button" onClick={() => openKalenderModal('Zwemmen Kalender Item toevoegen')}>
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
                <Button icon className="small-button" onClick={() => openKalenderModal('Zwemmen Kalender Item aanpassen', entry)}>
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
)(Zwemmen);