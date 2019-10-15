import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';

class CompetitieHistoriek extends React.Component {
  state = {
    title: ['Parantee Competitie Historiek', 'Scholencompetitie Historiek', 'Competitie Nederland Historiek'],
    content: ['paranteeHistory', 'scholenHistory', 'nederlandHistory'],
  }

  render() {
    const { league, content } = this.props;

    if (!content) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          <p>Geen data gevonden</p>
        </div>
      );
    }

    return (
      <div className="historiek">
        <h2>{this.state.title[league]}</h2>
        <div dangerouslySetInnerHTML={{__html: content[this.state.content[league]] }} />
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
)(CompetitieHistoriek);
