import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";
import { selectCalendar, selectLoading } from "redux/calendar/selectors";
import { getCalendar } from "redux/calendar/actions";

class HockeyKalender extends React.Component {
  componentDidMount() {
    this.props.getCalendar("hockey");
  }

  render() {
    const { content, data, loading } = this.props;

    if (loading || !data)
      return (
        <div className="content ui container">
          <div className="content-flex">
            <div>
              <h2>Hockey Kalender</h2>
            </div>
            <img
              src={process.env.REACT_APP_API_HOST + content.wheelblazersImg}
              alt="wheelblazers logo"
            />
          </div>
        </div>
      );

    if (data.length === 0) {
      return (
        <div className="content ui container">
          <div className="content-flex">
            <div>
              <h2>Hockey Kalender</h2>
              <p>Geen data gevonden</p>
            </div>
            <img
              src={process.env.REACT_APP_API_HOST + content.wheelblazersImg}
              alt="wheelblazers logo"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="content ui container">
        <div className="content-flex">
          <div>
            <h2>Hockey Kalender</h2>
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
          <img
            src={process.env.REACT_APP_API_HOST + content.wheelblazersImg}
            alt="wheelblazers logo"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCalendar
};

const mapStateToProps = state => ({
  content: selectData(state),
  data: selectCalendar(state),
  loading: selectLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(HockeyKalender);
