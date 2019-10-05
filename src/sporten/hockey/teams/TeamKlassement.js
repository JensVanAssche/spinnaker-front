import React from 'react';
import Network from 'utils/network';

class CompetitieStand extends React.Component {
  state = {
    title: ['Wheelblazers 1 Klassement', 'Wheelblazers 2 Klassement', 'Wheelblazers 3 Klassement', 'Wheelblazers 4 Klassement', 'Competitie Nederland Klassement'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
    loading: true,
    data: null
  }

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    Network.get('api/placements/' + types[team]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { team } = this.props;
    const { data, loading } = this.state;

    return (
      <div>
        <h2>{this.state.title[team]}</h2>
        {!loading && data.map(standing => (
          <div className="entry" key={standing.id}>
            <a href={process.env.REACT_APP_API_HOST + standing.pdf} target="_blank" rel="noopener noreferrer">{standing.title}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default CompetitieStand;
