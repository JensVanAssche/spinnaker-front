import React from 'react';
import { connect } from 'react-redux';
import { selectAlbums } from "redux/photos/selectors";
import { getAlbums } from "redux/photos/actions";
import { Link } from 'react-router-dom';
import './gallery.scss';

class Photos extends React.Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    const { match, data } = this.props;

    if (!data) return null;

    if (data.length === 0) {
      return (
        <div className="content ui container">
          <h2>Foto Albums</h2>
          <p>Geen albums gevonden</p>
        </div>
      );
    }

    return (
      <div className="content ui container">
        <h2>Foto Albums</h2>
        <div className="photo-albums">
          {data.map(photo => (
            <div key={photo.id} className="album">
              <Link to={match.path + `/` + photo.id}>{photo.title}</Link>
              <div className="thumbnail">
                <div className="backdrop2" />
                <div className="backdrop1" />
                <Link to={match.path + `/` + photo.id}>
                  <img src={process.env.REACT_APP_API_HOST + photo.thumbnail} alt="thumbnail" />
                </Link>
              </div>
            </div>
          ))}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Photos);
