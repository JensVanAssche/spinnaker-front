import React from 'react';
import { connect } from 'react-redux';
import { selectAlbums, selectLoading } from "redux/photos/selectors";
import { getAlbums } from "redux/photos/actions";
import Network from 'utils/network';
import { Link } from 'react-router-dom';
import './gallery.scss';

class Photos extends React.Component {
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
    this.props.getAlbums((page - 1) * 9);
    Network.get('api/photos/count').then((res) => {
      var ele = []
      for (let i = 0; i < Math.ceil(res.length / 9); i++) {
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
      this.props.getAlbums((page - 1) * 9);
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
          <h2>Foto Albums</h2>
          <p>Geen albums gevonden</p>
        </div>
      );
    }

    if (currentPage > pages.length) return (
      <div className="content ui container">
        <h2>Geen albums op deze pagina...</h2>
        <Link to="/fotos">Ga terug naar de fotoalbum pagina</Link>
      </div>
    );

    return (
      <div className="content ui container">
        <h2>Foto Albums</h2>
        <div className="photo-albums">
          {data.map(photo => (
            <div key={photo.id} className="album">
              <Link to={`/fotos/album/` + photo.id}>{photo.title}</Link>
              <div className="thumbnail">
                <div className="backdrop2" />
                <div className="backdrop1" />
                {photo.thumbnail && (<Link to={`/fotos/album/` + photo.id}>
                  <img src={process.env.REACT_APP_API_HOST + photo.thumbnail} alt="thumbnail" />
                </Link>)}
                {!photo.thumbnail && (<Link to={`/fotos/album/` + photo.id}>
                  <p>Dit album heeft geen foto's</p>
                </Link>)}
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
            {currentPage > 1 && (<Link to={"/fotos/page/" + (parseInt(currentPage, 10) - 1)}>Terug</Link>)}
            {pages.length > 1 && pages.map(page => (
              <Link className={page === parseInt(currentPage, 10) ? "active" : ""} key={page} to={"/fotos/page/" + page}>{page}</Link>
            ))}
            {currentPage < pages.length && (<Link to={"/fotos/page/" + (parseInt(currentPage, 10) + 1)}>Verder</Link>)}
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAlbums,
};

const mapStateToProps = state => ({
  data: selectAlbums(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Photos);
