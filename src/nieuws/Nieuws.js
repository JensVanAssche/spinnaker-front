import React from 'react';
import Network from 'utils/network';
import Entry from './nieuwsentry/Entry';
import { Link } from 'react-router-dom';
import './nieuws.scss';

class Nieuws extends React.Component {
  state = {
    loading: true,
    data: null,
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

    Network.get('api/news/all/' + ((page - 1) * 10)).then((res) => {
      this.setState({ data: res, currentPage: page });
      Network.get('api/news/count/').then((res) => {
        var ele = []
        for (let i = 0; i < Math.ceil(res.length / 10); i++) {
          ele.push(i + 1);
        }
        this.setState({ loading: false, pages: ele });
      });
    });
  }

  componentDidUpdate() {   
    if (this.props.match.params.page !== this.state.currentPage) {
      const { match } = this.props;
      var page;

      if (match.params.page) {
        page = match.params.page
      } else {
        page = 1;
      }

      Network.get('api/news/all/' + ((page - 1) * 10)).then((res) =>
        this.setState({ data: res, currentPage: page})
      );
    }
  }

  render() {
    const { loading, data, pages, currentPage } = this.state;

    if (loading) return null;

    if (!loading && !pages.length) {
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
          {pages.map(page => (
            <Link className={page === parseInt(currentPage, 10) ? "active" : ""} key={page} to={"/nieuws/page/" + page}>{page}</Link>
          ))}
          {currentPage < pages.length && (<Link to={"/nieuws/page/" + (parseInt(currentPage, 10) + 1)}>Verder</Link>)}
        </div>
      </div>
    );
  }
}

export default Nieuws;
