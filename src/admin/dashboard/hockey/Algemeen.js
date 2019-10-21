import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "redux/content/selectors";
import { getCalendar } from "redux/calendar/actions";
import { selectCalendar } from "redux/calendar/selectors";
import { Tab, Button, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react';

class Algemeen extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.props.getCalendar('hockey');
    this.setState({ loading: false })
  }

  render() {
    const { openTextareaModal, openFileModal, openKalenderModal, data, calendar } = this.props;

    if (this.state.loading) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    if (!calendar) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    return <Tab.Pane className="no-border">
      <h1>Algemeen</h1>
      <div className="dashboard-item">
        <h2>Hockey Foto</h2>
        <div className="dashboard-flex">
          <img src={process.env.REACT_APP_API_HOST + data.hockeyImg} alt="eumm" />
          <Button icon className="small-button" onClick={() => openFileModal('Hockey Foto', 'content/img/hockeyImg')} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Hockey Tekst</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.hockeyOver.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Hockey Tekst', 'content/data/hockeyOver', data.hockeyOver)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Hockey Kalender</h2>
          <Button icon primary className="small-button" onClick={() => openKalenderModal('Hockey Kalender Item toevoegen', null, 'hockey')}>
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
                <Button icon className="small-button" onClick={() => openKalenderModal('Hockey Kalender Item aanpassen', entry, null)}>
                  <Icon name="edit" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </div>
      <div className="dashboard-item">
        <h2>Hockey Historiek</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.hockeyHistory.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Hockey Historiek', 'content/data/hockeyHistory', data.hockeyHistory)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
    </Tab.Pane>;
  }
}

const mapDispatchToProps = {
  getCalendar,
};

const mapStateToProps = state => ({
  data: selectData(state),
  calendar: selectCalendar(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Algemeen);
