import React from 'react';

class CompetitieKalender extends React.Component {
  state = {
    title: ['Parantee Competitie Kalender', 'Scholencompetitie Kalender', 'Interclub Kalender', 'Competitie Nederland Kalender'],
    entries: [
      [
        { time: '16 oktober', name: 'parantee competitie 1', place: 'Antwerpen'},
        { time: '17 oktober', name: 'parantee competitie  2', place: 'Antwerpen'},
      ],
      [
        { time: '28 november', name: 'scholencompetitie 1', place: 'In een school'},
      ],
      [
        { time: '17 december', name: 'interclub competitie 1', place: 'Berchem'},
        { time: '18 december', name: 'interclub competitie 2', place: 'Berchem'},
        { time: '19 december', name: 'interclub competitie 3', place: 'Berchem'},
      ],
      [
        { time: '5 januari', name: 'nederlandse competitie 1', place: 'Nederland duh'},
      ],
    ]
  }

  render() {
    const { league } = this.props;
    return (
      <div className="calendar">
        <h2>{this.state.title[league]}</h2>
        <div>
          <h3>Wanneer</h3>
          <h3>Wat</h3>
          <h3>Waar</h3>
          {this.state.entries[league].map(entry => (
            <div className="entry" key={entry.time}>
              <p>{entry.time}</p>
              <p>{entry.name}</p>
              <p>{entry.place}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CompetitieKalender;
