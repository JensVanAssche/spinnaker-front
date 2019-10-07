import React from 'react';
import Network from 'utils/network';

class CompetitieStand extends React.Component {
  state = {
    title: ['Wheelblazers 1 Stand', 'Wheelblazers 2 Stand', 'Wheelblazers 3 Stand', 'Wheelblazers 4 Stand', 'Competitie Nederland Stand'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
    loading: true,
    data: null
  }

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    Network.get('api/standings/' + types[team]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { team } = this.props;
    const { data, loading } = this.state;

    if (!loading && data.length === 0) {
      return (
        <div>
          <h2>{this.state.title[team]}</h2>
          <p>Geen standen gevonden</p>
        </div>
      );
    }

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
