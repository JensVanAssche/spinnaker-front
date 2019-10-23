import React from 'react';
import { connect } from 'react-redux';
import { selectPlayersOrdered, selectLoading } from "redux/players/selectors";
import { getPlayersOrdered } from "redux/players/actions";
import Player from 'sporten/player/Player';

class TeamSpelers extends React.Component {
  state = {
    title: ['Wheelblazers 1 Spelers', 'Wheelblazers 1 Spelers', 'Wheelblazers 1 Spelers', 'Wheelblazers 4 Spelers', 'Competitie Nederland Spelers'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
  };

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    this.props.getPlayersOrdered(types[team]);
  }

  render() {
    const { team, data, loading } = this.props;

    if (loading || !data) return null;

    if (data.length === 0) {
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
                {type.players && type.players.map(player => (
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

const mapDispatchToProps = {
  getPlayersOrdered,
};

const mapStateToProps = state => ({
  data: selectPlayersOrdered(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSpelers);
