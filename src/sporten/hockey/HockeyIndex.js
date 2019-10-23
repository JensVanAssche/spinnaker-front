import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'redux/content/selectors';

class HockeyIndex extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) return null;

    return (
      <div className="content ui container">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${process.env.REACT_APP_API_HOST + content.hockeyImg})`}} />
          <div><h1>Hockey</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: content.hockeyOver}} />
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
