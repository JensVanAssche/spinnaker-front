import React from "react";
import { connect } from "react-redux";
import { selectResults, selectLoading } from "redux/results/selectors";
import { getResults } from "redux/results/actions";

class CompetitieResultaten extends React.Component {
  state = {
    title: [
      "GsportVlaanderen Competitie Resultaten",
      "Scholencompetitie Resultaten",
      "Competitie Nederland Resultaten"
    ],
    types: ["parantee", "scholen", "boccianederland"]
  };

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    this.props.getResults(types[league]);
  }

  render() {
    const { league, data, loading } = this.props;

    if (loading || !data)
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
        </div>
      );

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
              <table>
                <tbody>
                  {result.scores && result.scores.length === 0 && (
                    <tr className="empty">
                      <td>Dit tornooi heeft geen resultaten</td>
                    </tr>
                  )}
                  {result.scores &&
                    result.scores.map(score => (
                      <tr key={score.id}>
                        <td className="team">{score.team1}</td>
                        <td className="score">
                          {score.team1Score} - {score.team2Score}
                        </td>
                        <td className="team">{score.team2}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
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
            <a
              href={process.env.REACT_APP_API_HOST + result.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.title}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getResults
};

const mapStateToProps = state => ({
  data: selectResults(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompetitieResultaten);
