import React from 'react';
import pdf from 'assets/pdf/engagementsverklaring.pdf'

class CompetitieStand extends React.Component {
  state = {
    title: ['Wheelblazers 1 Klassement', 'Wheelblazers 2 Klassement', 'Wheelblazers 3 Klassement', 'Wheelblazers 4 Klassement', 'Competitie Nederland Klassement'],
    standings: [
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
        {this.state.standings[team].map(standing => (
          <div className="entry" key={standing}>
            <a href={pdf} target="_blank" rel="noopener noreferrer">{standing}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default CompetitieStand;
