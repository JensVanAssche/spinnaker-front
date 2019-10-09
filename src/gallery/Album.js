import React from 'react';
import Network from 'utils/network';
import { Link } from 'react-router-dom';
import AlbumModal from './AlbumModal';
import './gallery.scss';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: null };
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    Network.get('api/photos/' + this.props.match.params.id).then((res) =>
      this.setState({ loading: false, data: res })
    );
  }

  openModal = (data, i) => this.modalRef.current.openModal(data, i);

  render() {
    const { loading, data } = this.state;

    return (
      <div className="photo-album content ui container">
        <Link to="/fotos">Terug naar foto albums</Link>
        {data && (
          <>
            <h2>{data.title}</h2>
            <div>
              {!loading && data.content.map((photo, i) => (
                <div className="photo-thumbnail" key={photo.id} onClick={() => this.openModal(data.content, i)}>
                  <img src={process.env.REACT_APP_API_HOST + photo.image} alt="a o" />
                </div>
              ))}
            </div>
            <AlbumModal ref={this.modalRef} />
          </>
        )}
      </div>
    );
  }
}

export default Photos;
