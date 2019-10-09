import React from 'react';
import Network from 'utils/network';
import { Link } from 'react-router-dom';
import './gallery.scss';

class Photos extends React.Component {
  state = { loading: true, data: null };

  componentDidMount() {
    Network.get('api/photos/').then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { match } = this.props;
    const { loading, data } = this.state;

    if (loading) return null;

    if (!loading && data.length === 0) {
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

export default Photos;
