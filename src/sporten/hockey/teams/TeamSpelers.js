import React from 'react';
import Network from 'utils/network';
import Player from 'sporten/player/Player';

class TeamSpelers extends React.Component {
  state = {
    title: ['Wheelblazers 1 Spelers', 'Wheelblazers 1 Spelers', 'Wheelblazers 1 Spelers', 'Wheelblazers 4 Spelers', 'Competitie Nederland Spelers'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
    loading: true,
    data: null
  };

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    Network.get('api/players/' + types[team]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { team } = this.props;
    const { data, loading } = this.state;

    if (loading) return null;

    if (!loading && data.length === 0) {
      return (
        <div>
          <h2>{this.state.title[team]}</h2>
          <p>Geen spelers gevonden</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{this.state.title[team]}</h2>
        <div className="players">
          {data.map(type => (
            <div key={type.name}>
              <h3>{type.name}</h3>
              <div>
                {type.players.map(player => (
                  <Player key={player.id} name={player.name} subtitle={player.subtitle} image={player.image} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TeamSpelers;
