import React from 'react';

class TeamUitslagen extends React.Component {
  state = {
    title: ['Wheelblazers 1 Resultaten', 'Wheelblazers 2 Resultaten', 'Wheelblazers 3 Resultaten', 'Wheelblazers 4 Resultaten', 'Competitie Nederland Resultaten'],
    results: [
      ['spel 1', 'spel 2'],
      ['spel 1'],
      ['spel 1', 'spel 2', 'spel 3'],
      ['spel 1', 'spel 2', 'spel 3'],
      ['spel 1', 'spel 2', 'spel 3'],
    ]
  }

  render() {
    const { team } = this.props;
    return (
      <div>
        <h2>{this.state.title[team]}</h2>
        {this.state.results[team].map(result => (
          <div className="entry" key={result}>
            <a href={process.env.REACT_APP_API_HOST + "/example.pdf"} target="_blank" rel="noopener noreferrer">{result}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default TeamUitslagen;
