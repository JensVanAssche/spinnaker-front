import React from 'react';
import Player from './player/Player';

class CompetitieSpelers extends React.Component {
  state = {
    title: ['Parantee Competitie Spelers', 'Scholencompetitie Spelers', 'Interclub Spelers', 'Competitie Nederland Spelers'],
    players: [
      [
        { name: 'speler1', photo: 'sport.png' },
        { name: 'speler2', photo: 'sport.png' }
      ],
      [
        { name: 'speler1', photo: 'sport.png' },
        { name: 'speler2', photo: 'sport.png' },
        { name: 'speler3', photo: 'sport.png' },
        { name: 'speler4', photo: 'sport.png' },
        { name: 'speler5', photo: 'sport.png' },
      ],
      [
        { name: 'speler1', photo: 'sport.png' },
        { name: 'speler2', photo: 'sport.png' },
      ],
      [
        { name: 'speler1', photo: 'sport.png' },
      ]
    ],
  };

  render() {
    const { league } = this.props;
    return (
      <div className="players">
        <h2>{this.state.title[league]}</h2>
        <div>
          {this.state.players[league].map(player => (
            <Player key={player.name} name={player.name} photo={player.photo} />
          ))}
        </div>
      </div>
    );
  }
}

export default CompetitieSpelers;
