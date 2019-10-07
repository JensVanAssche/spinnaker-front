import React from 'react';
import Network from 'utils/network';

class CompetitieStand extends React.Component {
  state = {
    title: ['Parantee Competitie Stand', 'Scholencompetitie Stand', 'Competitie Nederland Stand'],
    types: ['parantee', 'scholen', 'boccianederland'],
    loading: true,
    data: null
  }

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    Network.get('api/standings/' + types[league]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { league } = this.props;
    const { data, loading } = this.state;

    if (!loading && data.length === 0) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          <p>Geen standen gevonden</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{this.state.title[league]}</h2>
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
