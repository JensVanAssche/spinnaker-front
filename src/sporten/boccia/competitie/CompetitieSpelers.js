import React from 'react';
import Network from 'utils/network';
import Player from 'sporten/player/Player';

class CompetitieSpelers extends React.Component {
  state = {
    title: ['Parantee Competitie Spelers', 'Scholencompetitie Spelers', 'Interclub Spelers', 'Competitie Nederland Spelers'],
    types: ['parantee', 'scholen', 'interclub', 'boccianederland'],
    loading: true,
    data: null
  };

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    Network.get('api/players/' + types[league]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { league } = this.props;
    const { data, loading } = this.state;

    return (
      <div className="players">
        <h2>{this.state.title[league]}</h2>
        <div>
          {!loading && data.map(player => (
            <Player key={player.id} name={player.name} image={player.image} />
          ))}
        </div>
      </div>
    );
  }
}

export default CompetitieSpelers;
