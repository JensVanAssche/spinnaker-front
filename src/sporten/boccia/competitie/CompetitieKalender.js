import React from 'react';
import Network from 'utils/network';

class CompetitieKalender extends React.Component {
  state = {
    title: ['Parantee Competitie Kalender', 'Scholencompetitie Kalender', 'Competitie Nederland Kalender'],
    types: ['parantee', 'scholen', 'nederland'],
    data: null,
    loading: true,
  }

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    Network.get('api/calendar/' + types[league]).then((res) =>
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
      <div>
        <h2>{this.state.title[league]}</h2>
        <div className="calendar">
          <h3 className="medium">Wanneer</h3>
          <h3>Wat</h3>
          <h3>Waar</h3>
          {data.map(entry => (
            <div className="entry" key={entry.id}>
              <p className="medium">{entry.date}</p>
              <p>{entry.title}</p>
              <p>{entry.location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CompetitieKalender;
