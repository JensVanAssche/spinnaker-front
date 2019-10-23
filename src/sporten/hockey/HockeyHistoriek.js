import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'redux/content/selectors';

class HockeyHistoriek extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) return null;

    return (
      <div className="historiek content ui container">
        <h2>Hockey Historiek</h2>
        <div dangerouslySetInnerHTML={{__html: content.hockeyHistory }} />
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
)(HockeyHistoriek);

