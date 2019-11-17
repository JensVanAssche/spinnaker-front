import React from "react";
import { connect } from "react-redux";
import { getAll, deletePhoto } from "redux/photos/actions";
import { selectAlbums } from "redux/photos/selectors";
import { Tab, Button, Icon, Dimmer, Loader } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Network from "utils/network";

class Fotos extends React.Component {
  state = {
    lastPage: 1,
    currentPage: 1,
    pages: null,
    loading: true
  };

  async componentDidMount() {
    await this.props.getAll((this.state.currentPage - 1) * 9);
    Network.get("api/photos/count").then(res => {
      var ele = [];
      for (let i = 0; i < Math.ceil(res.length / 9); i++) {
        ele.push(i + 1);
      }
      this.setState({ loading: false, pages: ele });
    });
  }

  componentDidUpdate() {
    const { lastPage, currentPage } = this.state;
    if (lastPage !== currentPage) {
      this.props.getAll((currentPage - 1) * 9).then(() => {
        this.setState({ lastPage: currentPage });
      });
    }
  }

  pageSet = page => this.setState({ currentPage: page });

  pageUp = () => {
    this.setState(prevState => ({
      ...prevState.data,
      currentPage: prevState.currentPage + 1
    }));
  };

  pageDown = () => {
    this.setState(prevState => ({
      ...prevState.data,
      currentPage: prevState.currentPage - 1
    }));
  };

  deletePhoto = id => {
    this.props.deletePhoto(id);
  };

  render() {
    const { currentPage, pages } = this.state;
    const { openAlbumModal, openMultipleFileModal, albums } = this.props;

    if (this.state.loading)
      return (
        <Dimmer active inverted>
          <Loader inverted />
        </Dimmer>
      );

    if (!albums)
      return (
        <Dimmer active inverted>
          <Loader inverted />
        </Dimmer>
      );

    return (
      <Tab.Pane>
        <div className="dashboard-item small">
          <div className="dashboard-flex">
            <h1>Foto's</h1>
            <Button
              icon
              primary
              className="small-button"
              onClick={() => openAlbumModal("Fotoalbum toevoegen")}
            >
              <span>Album</span>
              <Icon name="add" />
            </Button>
          </div>
        </div>
        {!albums.length && <p>Geen fotoalbums</p>}
        {albums.map(album => (
          <div className="dashboard-item" key={album.id}>
            <div className="dashboard-flex">
              <h2>{album.title}</h2>
              <div>
                <Button
                  icon
                  className="small-button"
                  onClick={() => openAlbumModal("Fotoalbum aanpassen", album)}
                >
                  <Icon name="edit" />
                </Button>
                <Button
                  icon
                  primary
                  className="small-button"
                  onClick={() =>
                    openMultipleFileModal("Foto's toevoegen", album.id)
                  }
                >
                  <span>Foto</span>
                  <Icon name="add" />
                </Button>
              </div>
            </div>
            <div className="dashboard-photos">
              {!album.photos.length && <p>Dit album heeft nog geen foto's</p>}
              {album.photos.map(photo => (
                <div className="dashboard-photo" key={photo.id}>
                  <div
                    className="overlay"
                    onClick={() => this.deletePhoto(photo.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  <img
                    src={process.env.REACT_APP_API_HOST + photo.image}
                    alt="album foto"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="pagination">
          {currentPage > 1 && <p onClick={() => this.pageDown()}>Terug</p>}
          {pages.length > 1 &&
            pages.map(page => (
              <p
                className={page === parseInt(currentPage, 10) ? "active" : ""}
                key={page}
                onClick={() => this.pageSet(page)}
              >
                {page}
              </p>
            ))}
          {currentPage < pages.length && (
            <p onClick={() => this.pageUp()}>Verder</p>
          )}
        </div>
      </Tab.Pane>
    );
  }
}

const mapDispatchToProps = {
  getAll,
  deletePhoto
};

const mapStateToProps = state => ({
  albums: selectAlbums(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Fotos);
