import React from 'react';
import Network from 'utils/network';

class CompetitieStand extends React.Component {
  state = {
    title: ['Parantee Competitie Historiek', 'Scholencompetitie Historiek', 'Competitie Nederland Historiek'],
    types: ['parantee', 'scholen', 'nederland'],
    data: null,
    loading: true,
  }

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    Network.get('api/history/' + types[league]).then((res) =>
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { league } = this.props;
    const { data, loading } = this.state;

    if (loading) return null;

    if (!loading && data.length === 0) {
      return (
        <div>
          <h2>{this.state.title[league]}</h2>
          <p>Geen data gevonden</p>
        </div>
      );
    }

    return (
      <div className="historiek">
        <h2>{this.state.title[league]}</h2>
        <div dangerouslySetInnerHTML={{__html: data.value }} />
      </div>
    );
  }
}

export default CompetitieStand;
