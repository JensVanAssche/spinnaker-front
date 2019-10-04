import React from 'react';
import { connect } from 'react-redux';
import { selectContent } from 'app/selectors';
import pdf from 'assets/pdf/engagementsverklaring.pdf';
import './spinnaker.scss';

class Spinnaker extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) return null;

    return(
      <div className="spinnaker ui container">
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
        <h2>Engagement</h2>
        <a href={pdf} target="_blank" rel="noopener noreferrer">engagement</a>
        <h2>Links</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectContent(state),
});

export default connect(
  mapStateToProps,
  null,
)(Spinnaker);

