import React from 'react';
import { Tab, Button, Icon } from 'semantic-ui-react';
import Network from 'utils/network';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Fotos extends React.Component {
  state = {
    albums: null,
  }

  componentDidMount() {
    Network.get('api/photos/all').then((res) => 
      this.setState({ albums: res })
    );
  }

  deletePhoto = id => {
    console.log(id);
  }

  render() {
    const { albums } = this.state;
    const { openFileModal, openAlbumModal } = this.props;

    if (!albums) return null;

    return <Tab.Pane>
      <h1>Foto's</h1>
      {!albums.length && ( <p>Geen albums</p> )}
      {albums.map(album => (
        <div className="dashboard-item" key={album.id}>
          <div className="dashboard-flex">
            <h2>{album.title}</h2>
            <div>
              <Button icon className="small-button" onClick={() => openAlbumModal('Fotoalbum', album)}>
                <Icon name="edit" />
              </Button>
              <Button icon primary className="small-button" onClick={() => openFileModal('Foto toevoegen')}>
                <span>Foto Toevoegen</span>
                <Icon name="add" />
              </Button>
            </div>
          </div>
          <div className="dashboard-photos">
            {!album.photos.length && ( <p>Geen foto's</p> )}
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
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <div />
          <Button icon primary className="small-button" onClick={() => openAlbumModal('Fotoalbum toevoegen')}>
            <span>Album Toevoegen</span>
            <Icon name="add" />
          </Button>
        </div>
      </div>
    </Tab.Pane>;
  }
}

export default Fotos;
