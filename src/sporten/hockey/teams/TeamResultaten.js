import React from 'react';
import Network from 'utils/network';

class TeamUitslagen extends React.Component {
  state = {
    title: ['Wheelblazers 1 Resultaten', 'Wheelblazers 2 Resultaten', 'Wheelblazers 3 Resultaten', 'Wheelblazers 4 Resultaten', 'Competitie Nederland Resultaten'],
    types: ['blazers1', 'blazers2', 'blazers3', 'blazers4', 'hockeynederland'],
    loading: true,
    data: null
  }

  componentDidMount() {
    const { types } = this.state;
    const { team } = this.props;
    Network.get('api/results/' + types[team]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { team } = this.props;
    const { data, loading } = this.state;

    return (
      <div>
        <h2>{this.state.title[team]}</h2>
        {!loading && data.map(result => (
          <div className="entry" key={result.id}>
            <a href={process.env.REACT_APP_API_HOST + result.pdf} target="_blank" rel="noopener noreferrer">{result.title}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default TeamUitslagen;
