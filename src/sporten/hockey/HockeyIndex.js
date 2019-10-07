import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';

class HockeyIndex extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) {
      return (
        <div>
          <div className="sport-header">
            <div style={{'backgroundImage': `url(${process.env.REACT_APP_API_HOST}/hockey.jpg)`}} />
            <div><h1>Hockey</h1></div>
          </div>
          <p>Geen info gevonden</p>
        </div>
      );
    }

    return (
      <div className="content">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${process.env.REACT_APP_API_HOST}/hockey.jpg)`}} />
          <div><h1>Hockey</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: content.hockey}} />
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
)(HockeyIndex);
