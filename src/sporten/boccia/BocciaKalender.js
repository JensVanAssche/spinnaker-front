import React from "react";
import { connect } from "react-redux";
import { selectCalendar, selectLoading } from "redux/calendar/selectors";
import { getCalendar } from "redux/calendar/actions";

class BocciaKalender extends React.Component {
  componentDidMount() {
    this.props.getCalendar("boccia");
  }

  render() {
    const { data, loading } = this.props;

    if (loading || !data)
      return (
        <div className="content ui container">
          <h2>Boccia Kalender</h2>
        </div>
      );

    if (data.length === 0) {
      return (
        <div className="content ui container">
          <h2>Boccia Kalender</h2>
          <p>Geen data gevonden</p>
        </div>
      );
    }

    return (
      <div className="content ui container">
        <h2>Boccia Kalender</h2>
        <table className="calendar">
          <tbody>
            <tr>
              <th>Competitie</th>
              <th>Wanneer</th>
              <th>Wat</th>
              <th>Waar</th>
            </tr>
            {data.map(entry => (
              <tr key={entry.id}>
                <td>
                  {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                </td>
                <td>{entry.date}</td>
                <td>{entry.title}</td>
                <td>{entry.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCalendar
};

const mapStateToProps = state => ({
  data: selectCalendar(state),
  loading: selectLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(BocciaKalender);
