import React from 'react';
import Network from 'utils/network';

class CompetitieUitslagen extends React.Component {
  state = {
    title: ['Parantee Competitie Uitslagen', 'Scholencompetitie Uitslagen', 'Competitie Nederland Uitslagen'],
    types: ['parantee', 'scholen', 'boccianederland'],
    loading: true,
    data: null
  };

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    Network.get('api/results/' + types[league]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { league } = this.props;
    const { data, loading } = this.state;

    if (!loading && data.length === 0) {
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

    return (
      <div>
        <h2>{this.state.title[league]}</h2>
        {!loading && data.map(result => (
          <div key={result.id}>
            <a href={process.env.REACT_APP_API_HOST + result.pdf} target="_blank" rel="noopener noreferrer">{result.title}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default CompetitieUitslagen;
