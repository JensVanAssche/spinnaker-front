import React from 'react';
import { connect } from 'react-redux';
import { selectContent } from 'app/selectors';

class CompetitieIndex extends React.Component {
  state = {
    title: ['Parantee Competitie', 'Scholencompetitie', 'Interclub', 'Competitie Nederland'],
    content: ['bocciaParantee', 'bocciaScholen', 'bocciaInterclub', 'bocciaNederland'],
  };

  render() {
    const { league, content } = this.props;

    if (!content) return null;

    return (
      <div>
        <h2>{this.state.title[league]}</h2>
        <div dangerouslySetInnerHTML={{__html: content[this.state.content[league]] }} />
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
)(CompetitieIndex);
