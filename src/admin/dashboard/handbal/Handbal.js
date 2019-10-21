import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "redux/content/selectors";
import { getCalendar } from "redux/calendar/actions";
import { selectCalendar } from "redux/calendar/selectors";
import { Tab, Button, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react';

class Handbal extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.props.getCalendar('handbal');
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

    return <Tab.Pane>
      <h1>Handbal</h1>
      <div className="dashboard-item">
        <h2>Handbal Foto</h2>
        <div className="dashboard-flex">
          <img src={process.env.REACT_APP_API_HOST + data.handbalImg} alt="eumm" />
          <Button icon className="small-button" onClick={() => openFileModal('Handbal Foto', 'content/img/handbalImg')} >
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
          <Button icon primary className="small-button" onClick={() => openKalenderModal('Handbal Kalender Item toevoegen', null, 'handbal')}>
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
                <Button icon className="small-button" onClick={() => openKalenderModal('Handbal Kalender Item aanpassen', entry, null)}>
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
)(Handbal);
