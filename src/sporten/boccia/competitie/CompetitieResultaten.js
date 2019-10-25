import React from 'react';
import { connect } from 'react-redux';
import { selectResults, selectLoading } from "redux/results/selectors";
import { getResults } from "redux/results/actions";

class CompetitieResultaten extends React.Component {
  state = {
    title: ['Parantee Competitie Resultaten', 'Scholencompetitie Resultaten', 'Competitie Nederland Resultaten'],
    types: ['parantee', 'scholen', 'boccianederland'],
  };

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    this.props.getResults(types[league]);
  }

  render() {
    const { league, data, loading } = this.props;

    if (loading || !data) return null;

    if (data.length === 0) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          <p>Geen resultaten gevonden</p>
        </div>
      );
    }

    if (league === 1) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          {data.map(result => (
            <div className="results" key={result.id}>
              <div className="header">
                <h1>{result.title}</h1>
                <h2>{result.date}</h2>
              </div>
              <div className="body">
                {result.scores.length === 0 && (
                  <div className="entry empty">
                    <p>Geen resultaten in dit tornooi</p>
                  </div>
                )}
                {result.scores.map(score => (
                  <div className="entry" key={score.id}>
                    <p>{score.team1}</p>
                    <span>{score.team1Score} - {score.team2Score}</span>
                    <p>{score.team2}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div>
        <h2>{this.state.title[league]}</h2>
        {data.map(result => (
          <div key={result.id}>
            <a href={process.env.REACT_APP_API_HOST + result.pdf} target="_blank" rel="noopener noreferrer">{result.title}</a>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getResults,
};

const mapStateToProps = state => ({
  data: selectResults(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompetitieResultaten);
