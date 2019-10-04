import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';

class BocciaIndex extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) return null;

    return (
      <div className="content">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${process.env.REACT_APP_API_HOST}/boccia.jpg)`}} />
          <div><h1>Boccia</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: content.bocciaOver}} />
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
)(BocciaIndex);
