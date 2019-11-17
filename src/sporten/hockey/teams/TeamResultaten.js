import React from "react";
import { connect } from "react-redux";
import { selectResults, selectLoading } from "redux/results/selectors";
import { selectData } from "redux/content/selectors";
import { getResults } from "redux/results/actions";

class TeamResultaten extends React.Component {
  state = {
    title: [
      "Wheelblazers 1 Resultaten",
      "Wheelblazers 2 Resultaten",
      "Wheelblazers 3 Resultaten",
      "Wheelblazers 4 Resultaten",
      "Competitie Nederland Resultaten"
    ],
    types: ["blazers1", "blazers2", "blazers3", "blazers4", "hockeynederland"]
  };

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    this.props.getResults(types[team]);
  }

  render() {
    const { content, team, data, loading } = this.props;

    if (loading || !data)
      return (
        <div className="content-flex">
          <div>
            <h2>{this.state.title[team]}</h2>
          </div>
          <img
            src={process.env.REACT_APP_API_HOST + content.wheelblazersImg}
            alt="wheelblazers logo"
          />
        </div>
      );

    if (data.length === 0) {
      return (
        <div className="content-flex">
          <div>
            <h2>{this.state.title[team]}</h2>
            <p>Geen resultaten gevonden</p>
          </div>
          <img
            src={process.env.REACT_APP_API_HOST + content.wheelblazersImg}
            alt="wheelblazers logo"
          />
        </div>
      );
    }

    return (
      <div className="content-flex">
        <div>
          <h2>{this.state.title[team]}</h2>
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
        <img
          src={process.env.REACT_APP_API_HOST + content.wheelblazersImg}
          alt="wheelblazers logo"
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getResults
};

const mapStateToProps = state => ({
  content: selectData(state),
  data: selectResults(state),
  loading: selectLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamResultaten);
