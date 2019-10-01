import React from 'react';
import pdf from 'assets/pdf/engagementsverklaring.pdf'

class CompetitieStand extends React.Component {
  state = {
    title: ['Parantee Competitie Stand', 'Scholencompetitie Stand', 'Interclub Stand', 'Competitie Nederland Stand'],
    standings: [
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
        {this.state.standings[league].map(standing => (
          <div className="entry" key={standing}>
            <a href={pdf} target="_blank" rel="noopener noreferrer">{standing}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default CompetitieStand;
