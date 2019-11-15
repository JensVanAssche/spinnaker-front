import React from "react";
import { connect } from "react-redux";
import { selectPlayersOrdered, selectLoading } from "redux/players/selectors";
import { getPlayersOrdered } from "redux/players/actions";
import Player from "sporten/player/Player";

class CompetitieSpelers extends React.Component {
  state = {
    title: [
      "Parantee Competitie Spelers",
      "Scholencompetitie Spelers",
      "Competitie Nederland Spelers"
    ],
    types: ["parantee", "scholen", "boccianederland"]
  };

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    this.props.getPlayersOrdered(types[league]);
  }

  render() {
    const { league, data, loading } = this.props;

    if (loading || !data)
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
        </div>
      );

    if (data.length === 0) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          <p>Geen spelers gevonden</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{this.state.title[league]}</h2>
        <div className="players">
          {data.map(type => (
            <div key={type.name}>
              <h3>{type.name}</h3>
              <div>
                {type.players &&
                  type.players.map(player => (
                    <Player
                      key={player.id}
                      name={player.name}
                      subtitle={player.subtitle}
                      image={player.image}
                    />
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
  getPlayersOrdered
};

const mapStateToProps = state => ({
  data: selectPlayersOrdered(state),
  loading: selectLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CompetitieSpelers);
