import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "app/selectors";
import Network from 'utils/network';
import { Tab, Button, Icon, Grid } from 'semantic-ui-react';

class Spinnaker extends React.Component {
  state = {
    loading: true,
    links: null,
  }

  componentDidMount() {
    Network.get('api/links').then((res) =>
      this.setState({ loading: false, links: res })
    );
  }

  render() {
    const { loading, links } = this.state;
    const { openInputModal, openTextareaModal, openPdfModal, openLinkModal, data } = this.props;

    if (loading) return null;

    return <Tab.Pane>
      <h1>Spinnaker</h1>
      <div className="dashboard-item">
        <h2>Over Spinnaker</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerOver.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Over Spinnaker', data.spinnakerOver)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Sportaanbod</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerSportaanbod.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Sportaanbod', data.spinnakerSportaanbod)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Lidgeld</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerLidgeld.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Lidgeld', data.spinnakerLidgeld)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Locatie</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerLocatie.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Locatie', data.spinnakerLocatie)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Locatie (google maps url)</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerLocatieMaps.substring(0,100)+"..."}} />
          <Button icon className="small-button" onClick={() => openInputModal('Locatie (google maps url)', data.spinnakerLocatieMaps)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Contact</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerContact.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Contact', data.spinnakerContact)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Engagement</h2>
        <div className="dashboard-flex">
          <div>
            <p>{data.spinnakerEngagementTitle}</p>
            <a href={process.env.REACT_APP_API_HOST + data.spinnakerEngagementPdf} target="_blank" rel="noopener noreferrer">{data.spinnakerEngagementPdf}</a>
          </div>
          <Button icon className="small-button" onClick={() => openPdfModal('Engagement', { title: data.spinnakerEngagementTitle, pdf: data.spinnakerEngagementPdf } )}>
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Links (en footer opties)</h2>
        <Grid columns={4}>
          <Grid.Row className="grid-header">
            <Grid.Column width={4}>
              <p>Foto</p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p>Url</p>
            </Grid.Column>
            <Grid.Column width={2}>
              <p>Footer</p>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
          {links.map(link => (
            <Grid.Row key={link.id}>
              <Grid.Column width={4}>
                <img src={process.env.REACT_APP_API_HOST + link.image} alt="eumm" />
              </Grid.Column>
              <Grid.Column width={8}>
                <p>{link.url}</p>
              </Grid.Column>
              <Grid.Column width={2}>
                <p>{link.footer}</p>
              </Grid.Column>
              <Grid.Column width={2} className="grid-button">
                <Button icon className="small-button" onClick={() => openLinkModal('Link aanpassen', link)} >
                  <Icon name="edit" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          ))}
          <Grid.Row>
            <Grid.Column width={16} className="grid-button">
              <Button icon primary className="small-button" onClick={() => openLinkModal('Link toevoegen', null)} >
                <span>Link</span>
                <Icon name="add" />
              </Button>
            </Grid.Column>
          </Grid.Row>
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
)(Spinnaker);
