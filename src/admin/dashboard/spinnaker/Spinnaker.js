import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "redux/content/selectors";
import { selectLinks } from "redux/links/selectors";
import { getLinks } from "redux/links/actions";
import { Tab, Button, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react';

class Spinnaker extends React.Component {
  componentDidMount() {
    this.props.getLinks();
  }

  render() {
    const { openInputModal, openTextareaModal, openPdfModal, openLinkModal, data, links } = this.props;

    if (!links) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);
    
    return <Tab.Pane>
      <h1>Spinnaker</h1>
      <div className="dashboard-item">
        <h2>Over Spinnaker</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerOver.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Over Spinnaker', 'content/data/spinnakerOver', data.spinnakerOver)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Sportaanbod</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerSportaanbod.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Sportaanbod', 'content/data/spinnakerSportaanbod', data.spinnakerSportaanbod)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Lidgeld</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerLidgeld.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Lidgeld', 'content/data/spinnakerLidgeld', data.spinnakerLidgeld)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Locatie</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerLocatie.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Locatie', 'content/data/spinnakerLocatie', data.spinnakerLocatie)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Locatie (google maps url)</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerLocatieMaps.substring(0,80)+"..."}} />
          <Button icon className="small-button" onClick={() => openInputModal('Locatie (google maps url)', 'content/data/spinnakerLocatieMaps', data.spinnakerLocatieMaps)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Contact</h2>
        <div className="dashboard-flex">
          <p dangerouslySetInnerHTML={{__html: data.spinnakerContact.substring(0,255)+"..."}} />
          <Button icon className="small-button" onClick={() => openTextareaModal('Contact', 'content/data/spinnakerContact', data.spinnakerContact)} >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Engagementsverklaring</h2>
        <div className="dashboard-flex">
          <div>
            <p>{data.spinnakerEngagementTitle}</p>
            <a href={process.env.REACT_APP_API_HOST + data.spinnakerEngagementPdf} target="_blank" rel="noopener noreferrer">{data.spinnakerEngagementPdf}</a>
          </div>
          <Button icon className="small-button" onClick={() => openPdfModal('Engagementsverklaring', 'content/pdf', { title: data.spinnakerEngagementTitle, pdf: data.spinnakerEngagementPdf }, null)}>
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Links (en footer opties)</h2>
          <Button icon primary className="small-button" onClick={() => openLinkModal('Link toevoegen', null)} >
            <span>Link</span>
            <Icon name="add" />
          </Button>
        </div>
        <Grid columns={4}>
          <Grid.Row className="grid-header">
            <Grid.Column width={4}>
              <p>Foto</p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p>URL</p>
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
        </Grid>
      </div>
    </Tab.Pane>;
  }
}

const mapDispatchToProps = {
  getLinks
};

const mapStateToProps = state => ({
  data: selectData(state),
  links: selectLinks(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Spinnaker);
