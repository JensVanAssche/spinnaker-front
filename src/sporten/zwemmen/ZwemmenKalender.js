import React from 'react';
import Network from 'utils/network';

class ZwemmenKalender extends React.Component {
  state = {
    data: null,
    loading: true,
  }

  componentDidMount() {
    Network.get('api/calendar/zwemmen').then((res) =>
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { data, loading } = this.state;

    if (loading) return null;

    if (!loading && data.length === 0) {
      return (
        <div className="content">
          <h2>Zwemmen Kalender</h2>
          <p>Geen data gevonden</p>
        </div>
      );
    }

    return (
      <div className="content">
        <h2>Zwemmen Kalender</h2>
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

export default ZwemmenKalender;
