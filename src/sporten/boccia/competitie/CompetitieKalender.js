import React from 'react';
import { connect } from 'react-redux';
import { selectCalendar, selectLoading } from "redux/calendar/selectors";
import { getCalendar } from "redux/calendar/actions";

class CompetitieKalender extends React.Component {
  state = {
    title: ['Parantee Competitie Kalender', 'Scholencompetitie Kalender', 'Competitie Nederland Kalender'],
    types: ['parantee', 'scholen', 'nederland'],
  }

  componentDidMount() {
    const { types } = this.state;
    const { league } = this.props;
    this.props.getCalendar(types[league]);
  }

  render() {
    const { league, data, loading } = this.props;

    if (loading || !data) return null;

    if (data.length === 0) {
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
          <h3 className="medium">Waar</h3>
          {data.map(entry => (
            <div className="entry" key={entry.id}>
              <p className="medium">{entry.date}</p>
              <p>{entry.title}</p>
              <p className="medium">{entry.location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCalendar,
};

const mapStateToProps = state => ({
  data: selectCalendar(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompetitieKalender);