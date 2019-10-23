import React from 'react';
import { connect } from 'react-redux';
import { selectStandings, selectLoading } from "redux/standings/selectors";
import { getStandings } from "redux/standings/actions";

class CompetitieStand extends React.Component {
  state = {
    title: ['Parantee Competitie Stand', 'Scholencompetitie Stand', 'Competitie Nederland Stand'],
    types: ['parantee', 'scholen', 'boccianederland'],
  };

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    this.props.getStandings(types[league]);
  }

  render() {
    const { league, data, loading } = this.props;

    if (loading || !data) return null;

    if (data.length === 0) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          <p>Geen stand gevonden</p>
        </div>
      );
    }

    if (league === 1) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          {data.map(result => (
            <div className="standings" key={result.id}>
              <div className="header">
                <h1>{result.title}</h1>
                <h2>{result.subtitle}</h2>
              </div>
              <div className="subheader">
                <div>
                  <p>Team</p>
                </div>
                <div>
                  <p>Totaal Punten</p>
                  <p>Punten</p>
                </div>
              </div>
              <div className="body">
                {result.scores && result.scores.map(score => (
                  <div className="entry" key={score.id}>
                    <div>
                      <p>{score.name}</p>
                    </div>
                    <div>
                      <p>{score.points1}</p>
                      <p>{score.points2}</p>
                    </div>
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
  getStandings,
};

const mapStateToProps = state => ({
  data: selectStandings(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompetitieStand);