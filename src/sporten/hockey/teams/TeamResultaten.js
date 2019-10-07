import React from 'react';
import Network from 'utils/network';

class TeamUitslagen extends React.Component {
  state = {
    title: ['Wheelblazers 1 Resultaten', 'Wheelblazers 2 Resultaten', 'Wheelblazers 3 Resultaten', 'Wheelblazers 4 Resultaten', 'Competitie Nederland Resultaten'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
    loading: true,
    data: []
  }

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    Network.get('api/results/' + types[team]).then((res) =>  
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
          <p>Geen resultaten gevonden</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{this.state.title[team]}</h2>
        {!loading && data.map(result => (
          <div className="results" key={result.id}>
            <div className="header">
              <h1>{result.title}</h1>
              <h2>{result.date}</h2>
            </div>
            <div className="body">
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
}

export default TeamUitslagen;
