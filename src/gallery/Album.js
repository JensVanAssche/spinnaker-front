import React from 'react';
import { connect } from 'react-redux';
import { selectPhotos, selectLoading } from "redux/photos/selectors";
import { getPhotos } from "redux/photos/actions";
import { Link } from 'react-router-dom';
import AlbumModal from './AlbumModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './gallery.scss';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    this.props.getPhotos(this.props.match.params.id)
  }

  openModal = (data, i) => this.modalRef.current.openModal(data, i);

  render() {
    const { data, loading } = this.props;

    if (loading || !data) return null;

    return (
      <div className="photo-album content ui container">
        <Link to="/fotos"><FontAwesomeIcon icon={faArrowLeft} /> Terug naar foto albums</Link>
        {data && (
          <>
            <h2>{data.title}</h2>
            <div>
              {data.content.map((photo, i) => (
                <div className="photo-thumbnail" key={photo.id} onClick={() => this.openModal(data.content, i)}>
                  <img src={process.env.REACT_APP_API_HOST + photo.image} alt="a o" />
                </div>
              ))}
              {data.content.length === 0 && (<p>Dit album heeft geen foto's</p>)}
            </div>
            <AlbumModal ref={this.modalRef} />
          </>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getPhotos,
};

const mapStateToProps = state => ({
  data: selectPhotos(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Photos);
