import React from 'react';
import { connect } from 'react-redux';
import { selectNews } from "redux/news/selectors";
import { getNews } from "redux/news/actions";
import Network from 'utils/network';
import Entry from './nieuwsentry/Entry';
import { Link } from 'react-router-dom';
import './nieuws.scss';

class Nieuws extends React.Component {
  state = {
    pages: null,
    currentPage: null
  };

  componentDidMount() {
    const { match } = this.props;
    var page;

    if (match.params.page) {
      page = match.params.page
    } else {
      page = 1;
    }

    this.setState({ currentPage: page });
    this.props.getNews((page - 1) * 10);
    Network.get('api/news/count/').then((res) => {
      var ele = []
      for (let i = 0; i < Math.ceil(res.length / 10); i++) {
        ele.push(i + 1);
      }
      this.setState({ pages: ele });
    });
  }

  componentDidUpdate() {
    const { match } = this.props;
    var page;

    if (match.params.page) {
      page = match.params.page
    } else {
      page = 1;
    }
    
    if (page !== this.state.currentPage) {
      this.props.getNews((page - 1) * 10);
      this.setState({ currentPage: page });
    }
  }

  render() {
    const { pages, currentPage } = this.state;
    const { data } = this.props;

    if (!data || !pages) return null;

    if (!pages.length) {
      return (
        <div className="content ui container">
          <h2>Nieuws</h2>
          <p>Geen nieuws gevonden</p>
        </div>
      );
    }

    if (currentPage > pages.length) return (
      <div className="content ui container">
        <h2>Geen artikels op deze pagina...</h2>
        <Link to="/nieuws">Ga terug naar de nieuwspagina</Link>
      </div>
    );

    return (
      <div className="nieuws content ui container">
        <h2>Nieuws</h2>
        {data.map(entry => (
          <Entry id={entry.id} title={entry.title} date={entry.date} body={entry.body} key={entry.id} />
        ))}
        <div className="pagination">
          {currentPage > 1 && (<Link to={"/nieuws/page/" + (parseInt(currentPage, 10) - 1)}>Terug</Link>)}
          {pages.length > 1 && pages.map(page => (
            <Link className={page === parseInt(currentPage, 10) ? "active" : ""} key={page} to={"/nieuws/page/" + page}>{page}</Link>
          ))}
          {currentPage < pages.length && (<Link to={"/nieuws/page/" + (parseInt(currentPage, 10) + 1)}>Verder</Link>)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getNews,
};

const mapStateToProps = state => ({
  data: selectNews(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nieuws);
