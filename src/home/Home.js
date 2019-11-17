import React from "react";
import { connect } from "react-redux";
import { selectNews, selectLoading } from "redux/news/selectors";
import { getLatest } from "redux/news/actions";
import { Link } from "react-router-dom";
import Sport from "./sport/Sport";
import Nieuws from "./nieuws/Nieuws";
import Wave from "assets/images/wave.png";
import "./home.scss";

class Home extends React.Component {
  componentDidMount() {
    this.props.getLatest();
  }

  render() {
    const { news, loading } = this.props;

    return (
      <div className="home">
        <div className="welcome">
          <div>
            <h1>Welkom bij Spinnaker</h1>
            <Link to="/spinnaker">Ontdek wie we zijn</Link>
          </div>
          <img src={Wave} alt="golf" />
        </div>
        <div className="ui container content">
          <div className="sports">
            <h2>Onze Sporten</h2>
            <div>
              <Sport name="boccia" />
              <Sport name="hockey" />
            </div>
            <div>
              <Sport name="rolstoel handbal" />
              <Sport name="dansen" />
              <Sport name="zwemmen" />
            </div>
          </div>
          <div className="nieuws">
            <h2>Nieuws</h2>
            {!loading &&
              news &&
              (!news.length && <p>Geen nieuws om te weergeven</p>,
              news.map(item => (
                <Nieuws
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  key={item.id}
                />
              )))}
            <div className="cta">
              <Link to="/nieuws">Meer nieuws</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getLatest
};

const mapStateToProps = state => ({
  news: selectNews(state),
  loading: selectLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
