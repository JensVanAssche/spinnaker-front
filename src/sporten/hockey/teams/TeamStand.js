import React from 'react';
import { connect } from 'react-redux';
import { selectStandings, selectLoading } from "redux/standings/selectors";
import { getStandings } from "redux/standings/actions";
import { selectData } from 'redux/content/selectors';

class TeamStand extends React.Component {
  state = {
    title: ['Wheelblazers 1 Stand', 'Wheelblazers 2 Stand', 'Wheelblazers 3 Stand', 'Wheelblazers 4 Stand', 'Competitie Nederland Stand'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
  }

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    this.props.getStandings(types[team]);
  }

  render() {
    const { content, team, data, loading } = this.props;

    if (loading || !data) return null;

    if (data.length === 0) {
      return (
        <div className="content-flex">
          <div>
            <h2>{this.state.title[team]}</h2>
            <p>Geen standen gevonden</p>
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
                  <p>Gespeeld</p>
                  <p>Goal Verschil</p>
                  <p>Punten</p>
                </div>
              </div>
              <div className="body">
                {result.scores.map(score => (
                  <div className="entry" key={score.id}>
                  <div>
                    <p>{score.name}</p>
                  </div>
                  <div>
                    <p>{score.points1}</p>
                    <p>{score.points2}</p>
                    <p>{score.points3}</p>
                  </div>
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
  getStandings,
};

const mapStateToProps = state => ({
  content: selectData(state),
  data: selectStandings(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamStand);
