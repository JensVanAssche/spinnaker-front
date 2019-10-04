import React from 'react';
import { connect } from 'react-redux';
import { selectContent } from 'app/selectors';

class Dansen extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) return null;

    return (
      <div className="content ui container">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${process.env.REACT_APP_API_HOST}/header.jpg)`}} />
          <div><h1>Dansen</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: content.dansen}} />
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
)(Dansen);