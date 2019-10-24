import React from 'react';
import { connect } from 'react-redux';
import { selectVideos, selectLoading } from "redux/videos/selectors";
import { getByOffset } from "redux/videos/actions";
import Network from 'utils/network';
import { Link } from 'react-router-dom';
import VideoThumbnail from './VideoThumbnail';
import './gallery.scss';

class Videos extends React.Component {
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
    this.props.getByOffset((page - 1) * 5);
    Network.get('api/videos/count').then((res) => {
      var ele = []
      for (let i = 0; i < Math.ceil(res.length / 5); i++) {
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
      this.props.getByOffset((page - 1) * 5);
      this.setState({ currentPage: page });
    }
  }

  render() {
    const { pages, currentPage } = this.state;
    const { data, loading } = this.props;

    if (!data || !pages || loading) return null;

    if (!pages.length) {
      return (
        <div className="content ui container">
          <h2>Video's</h2>
          <p>Geen video's gevonden</p>
        </div>
      );
    }

    if (currentPage > pages.length) return (
      <div className="content ui container">
        <h2>Geen video's op deze pagina...</h2>
        <Link to="/videos">Ga terug naar de video pagina</Link>
      </div>
    );

    return (
      <div className="videos content ui container">
        <h2>Video's</h2>
        {data.map(video => (
          <div key={video.id}>
            <h1>{video.title}</h1>
            <VideoThumbnail video={video} />
          </div>
        ))}
        <div className="pagination">
          {currentPage > 1 && (<Link to={"/videos/page/" + (parseInt(currentPage, 10) - 1)}>Terug</Link>)}
          {pages.length > 1 && pages.map(page => (
            <Link className={page === parseInt(currentPage, 10) ? "active" : ""} key={page} to={"/videos/page/" + page}>{page}</Link>
          ))}
          {currentPage < pages.length && (<Link to={"/videos/page/" + (parseInt(currentPage, 10) + 1)}>Verder</Link>)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getByOffset,
};

const mapStateToProps = state => ({
  data: selectVideos(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Videos);
