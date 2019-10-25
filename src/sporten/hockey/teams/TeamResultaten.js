import React from 'react';
import { connect } from 'react-redux';
import { selectResults, selectLoading } from "redux/results/selectors";
import { selectData } from 'redux/content/selectors';
import { getResults } from "redux/results/actions";

class TeamResultaten extends React.Component {
  state = {
    title: ['Wheelblazers 1 Resultaten', 'Wheelblazers 2 Resultaten', 'Wheelblazers 3 Resultaten', 'Wheelblazers 4 Resultaten', 'Competitie Nederland Resultaten'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
  }

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    this.props.getResults(types[team]);
  }

  render() {
    const { content, team, data, loading } = this.props;

    if (loading || !data) return null;

    if (data.length === 0) {
      return (
        <div className="content-flex">
          <div>
            <h2>{this.state.title[team]}</h2>
            <p>Geen resultaten gevonden</p>
          </div>
          <img src={process.env.REACT_APP_API_HOST + content.wheelblazersImg} alt="wheelblazers logo" />
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
              <div className="body">
                {result.scores && result.scores.map(score => (
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
        <img src={process.env.REACT_APP_API_HOST + content.wheelblazersImg} alt="wheelblazers logo" />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getResults,
};

const mapStateToProps = state => ({
  content: selectData(state),
  data: selectResults(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamResultaten);
