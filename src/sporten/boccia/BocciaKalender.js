import React from 'react';
import Network from 'utils/network';

class CompetitieKalender extends React.Component {
  state = {
    data: null,
    loading: true,
  }

  componentDidMount() {
    Network.get('api/calendar/boccia').then((res) =>
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div className="content">
        <h2>Boccia Kalender</h2>
        <div className="calendar">
          <h3 className="small">Competitie</h3>
          <h3 className="medium">Wanneer</h3>
          <h3>Wat</h3>
          <h3>Waar</h3>
          {!loading && data.map(entry => (
            <div className="entry" key={entry.id}>
              <p className="small">{entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}</p>
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
