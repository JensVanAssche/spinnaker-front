import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';

class CompetitieIndex extends React.Component {
  state = {
    title: ['Parantee Competitie', 'Scholencompetitie', 'Competitie Nederland'],
    content: ['bocciaParantee', 'bocciaScholen', 'bocciaNederland'],
  };

  render() {
    const { league, content } = this.props;


    if (!content) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          <p>Geen info gevonden</p>
        </div>
      );
    }

    return (
      <div>
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
)(CompetitieIndex);
