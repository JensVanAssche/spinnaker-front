import React from 'react';
import Player from 'sporten/player/Player';

class TeamSpelers extends React.Component {
  state = {
    title: ['Wheelblazers 1 Spelers', 'Wheelblazers 1 Spelers', 'Wheelblazers 1 Spelers', 'Wheelblazers 4 Spelers', 'Competitie Nederland Spelers'],
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
      ],
      [
        { name: 'speler1', photo: 'sport.png' },
      ]
    ],
  };

  render() {
    const { team } = this.props;
    return (
      <div className="players">
        <h2>{this.state.title[team]}</h2>
        <div>
          {this.state.players[team].map(player => (
            <Player key={player.name} name={player.name} photo={player.photo} />
          ))}
        </div>
      </div>
    );
  }
}

export default TeamSpelers;
