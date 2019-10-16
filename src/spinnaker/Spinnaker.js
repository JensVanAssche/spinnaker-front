import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';
import { selectLinks } from './selectors';
import './spinnaker.scss';

class Spinnaker extends React.Component {
  render() {
    const { content, links } = this.props;

    if (!content || !links) return null;

    return (
      <div className="spinnaker ui container content">
        <h2>Over Spinnaker</h2>
        <div dangerouslySetInnerHTML={{__html: content.spinnakerOver}} />
        <h2>Sportaanbod</h2>
        <div dangerouslySetInnerHTML={{__html: content.spinnakerSportaanbod}} />
        <h2>Lidgeld</h2>
        <div dangerouslySetInnerHTML={{__html: content.spinnakerLidgeld}} />
        <h2>Locatie</h2>
        <div dangerouslySetInnerHTML={{__html: content.spinnakerLocatie}} />
        <iframe title="map" src={content.spinnakerLocatieMaps} width="400" height="300" frameBorder="0" allowFullScreen=""></iframe>
        <h2>Contact</h2>
        <div dangerouslySetInnerHTML={{__html: content.spinnakerContact}} />
        <h2>Engagementsverklaring</h2>
        <a href={process.env.REACT_APP_API_HOST + content.spinnakerEngagementPdf} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{__html: content.spinnakerEngagementTitle}} />
        {links.length && (<h2>Links</h2>)}
        <div className="links">
          {links.map(e => (
            <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer">
              <img key={e} src={process.env.REACT_APP_API_HOST + e.image} alt="logo" />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state),
  links: selectLinks(state)
});

export default connect(
  mapStateToProps,
  null,
)(Spinnaker);
