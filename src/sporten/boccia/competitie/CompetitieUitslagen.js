import React from 'react';
import Network from 'utils/network';

class CompetitieUitslagen extends React.Component {
  state = {
    title: ['Parantee Competitie Uitslagen', 'Scholencompetitie Uitslagen', 'Interclub Uitslagen', 'Competitie Nederland Uitslagen'],
    types: ['parantee', 'scholen', 'interclub', 'boccianederland'],
    loading: true,
    data: null
  };

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    Network.get('api/results/' + types[league]).then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { league } = this.props;
    const { data, loading } = this.state;

    return (
      <div>
        <h2>{this.state.title[league]}</h2>
        {!loading && data.map(result => (
          <div className="entry" key={result.id}>
            <a href={process.env.REACT_APP_API_HOST + result.pdf} target="_blank" rel="noopener noreferrer">{result.title}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default CompetitieUitslagen;
