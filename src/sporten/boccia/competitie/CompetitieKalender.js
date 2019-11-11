import React from "react";
import { connect } from "react-redux";
import { selectCalendar, selectLoading } from "redux/calendar/selectors";
import { getCalendar } from "redux/calendar/actions";

class CompetitieKalender extends React.Component {
  state = {
    title: [
      "Parantee Competitie Kalender",
      "Scholencompetitie Kalender",
      "Competitie Nederland Kalender"
    ],
    types: ["parantee", "scholen", "nederland"]
  };

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
        <table className="calendar">
          <tbody>
            <tr>
              <th>Wanneer</th>
              <th>Wat</th>
              <th>Waar</th>
            </tr>
            {data.map(entry => (
              <tr key={entry.id}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompetitieKalender);
