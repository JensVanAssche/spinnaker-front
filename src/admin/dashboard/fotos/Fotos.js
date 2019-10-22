import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, deletePhoto } from "redux/photos/actions";
import { selectPhotos } from "redux/photos/selectors";
import { Tab, Button, Icon, Dimmer, Loader } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Fotos extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.props.getPhotos();
    this.setState({ loading: false })
  }

  deletePhoto = id => {
    this.props.deletePhoto(id);
  }

  render() {
    const { openAlbumModal, openFileModal, albums } = this.props;

    if (this.state.loading) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    if (!albums) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    return <Tab.Pane>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h1>Foto's</h1>
          <Button icon primary className="small-button" onClick={() => openAlbumModal('Fotoalbum toevoegen')}>
            <span>Album</span>
            <Icon name="add" />
          </Button>
        </div>
      </div>
      {!albums.length && ( <p>Geen albums</p> )}
      {albums.map(album => (
        <div className="dashboard-item" key={album.id}>
          <div className="dashboard-flex">
            <h2>{album.title}</h2>
            <div>
              <Button icon className="small-button" onClick={() => openAlbumModal('Fotoalbum aanpassen', album)}>
                <Icon name="edit" />
              </Button>
              <Button icon primary className="small-button" onClick={() => openFileModal('Foto toevoegen', null, album.id)}>
                <span>Foto</span>
                <Icon name="add" />
              </Button>
            </div>
          </div>
          <div className="dashboard-photos">
            {!album.photos.length && ( <p>Dit album heeft geen foto's</p> )}
            {album.photos.map(photo => (
              <div className="dashboard-photo" key={photo.id}>
                <div className="overlay" onClick={() => this.deletePhoto(photo.id)} >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <img src={process.env.REACT_APP_API_HOST + photo.image} alt="eumm" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Tab.Pane>;
  }
}

const mapDispatchToProps = {
  getPhotos,
  deletePhoto
};

const mapStateToProps = state => ({
  albums: selectPhotos(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Fotos);
