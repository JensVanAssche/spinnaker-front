import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';

class BocciaIndex extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) {
      return (
        <div>
          <h2>Boccia</h2>
          <p>Geen info gevonden</p>
        </div>
      );
    }

    return (
      <div className="content">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${process.env.REACT_APP_API_HOST + content.bocciaImg})`}} />
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
