import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';

class Handbal extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) {
      return (
        <div>
          <h2>Rolstoelhandbal</h2>
          <p>Geen info gevonden</p>
        </div>
      );
    }

    return (
      <div className="content ui container">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${process.env.REACT_APP_API_HOST + content.handbalImg})`}} />
          <div><h1>Rolstoelhandbal</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: content.handbalOver}} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state),
});

export default connect(
  mapStateToProps,
  null,
)(Handbal);
