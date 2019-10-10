import React from 'react';
import Network from 'utils/network';

class CompetitieStand extends React.Component {
  state = {
    data: null,
    loading: true,
  }

  componentDidMount() {
    Network.get('api/history/hockey').then((res) =>
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { data, loading } = this.state;

    if (loading) return null;

    if (!loading && data.length === 0) {
      return (
        <div className="historiek content">
          <h2>Hockey Historiek</h2>
          <p>Geen data gevonden</p>
        </div>
      );
    }

    return (
      <div className="historiek content ui container">
        <h2>Hockey Historiek</h2>
        <div dangerouslySetInnerHTML={{__html: data.value }} />
      </div>
    );
  }
}

export default CompetitieStand;
