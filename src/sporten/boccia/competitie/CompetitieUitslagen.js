import React from 'react';

class CompetitieUitslagen extends React.Component {
  state = {
    title: ['Parantee Competitie Uitslagen', 'Scholencompetitie Uitslagen', 'Interclub Uitslagen', 'Competitie Nederland Uitslagen'],
    results: [
      ['spel 1', 'spel 2'],
      ['spel 1'],
      ['spel 1', 'spel 2', 'spel 3'],
      ['spel 1', 'spel 2', 'spel 3'],
    ]
  }

  render() {
    const { league } = this.props;
    return (
      <div>
        <h2>{this.state.title[league]}</h2>
        {this.state.results[league].map(result => (
          <div className="entry" key={result}>
            <a href={process.env.REACT_APP_API_HOST + "/example.pdf"} target="_blank" rel="noopener noreferrer">{result}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default CompetitieUitslagen;
