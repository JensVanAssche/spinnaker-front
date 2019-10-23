import React from 'react';
import { connect } from 'react-redux';
import { selectCalendar, selectLoading } from "redux/calendar/selectors";
import { getCalendar } from "redux/calendar/actions";

class HandbalKalender extends React.Component {
  componentDidMount() {
    this.props.getCalendar('handbal');
  }

  render() {
    const { data, loading } = this.props;

    if (loading || !data) return null;
    
    if (data.length === 0) {
      return (
        <div className="content">
          <h2>Rolstoelhandbal Kalender</h2>
          <p>Geen data gevonden</p>
        </div>
      );
    }

    return (
      <div className="content">
        <h2>Rolstoelhandbal Kalender</h2>
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
)(HandbalKalender);