import React from 'react';
import Network from 'utils/network';

class TeamStand extends React.Component {
  state = {
    title: ['Wheelblazers 1 Stand', 'Wheelblazers 2 Stand', 'Wheelblazers 3 Stand', 'Wheelblazers 4 Stand', 'Competitie Nederland Stand'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
    loading: true,
    data: []
  }

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    Network.get('api/standings/' + types[team]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { team } = this.props;
    const { data, loading } = this.state;

    if (!loading && data.length === 0) {
      return (
        <div>
          <h2>{this.state.title[team]}</h2>
          <p>Geen stand gevonden</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{this.state.title[team]}</h2>
        {!loading && data.map(result => (
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
    );
  }
}

export default TeamStand;
