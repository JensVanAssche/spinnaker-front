import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'redux/content/selectors';
import { selectCalendar, selectLoading } from "redux/calendar/selectors";
import { getCalendar } from "redux/calendar/actions";

class HockeyKalender extends React.Component {
  componentDidMount() {
    this.props.getCalendar('hockey');
  }

  render() {
    const { content, data, loading } = this.props;

    if (loading || !data) return null;

    if (data.length === 0) {
      return (
        <div className="content ui container">
          <div className="content-flex">
          <div>
            <h2>Hockey Kalender</h2>
            <p>Geen data gevonden</p>
          </div>
          <img src={process.env.REACT_APP_API_HOST + content.wheelblazersImg} alt="wheelblazers logo" />
        </div>
        </div>
      );
    }

    return (
      <div className="content ui container">
        <div className="content-flex">
          <div>
            <h2>Hockey Kalender</h2>
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
          <img src={process.env.REACT_APP_API_HOST + content.wheelblazersImg} alt="wheelblazers logo" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCalendar,
};

const mapStateToProps = state => ({
  content: selectData(state),
  data: selectCalendar(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HockeyKalender);
