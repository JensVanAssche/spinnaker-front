import React from 'react';
import Network from 'utils/network';
import './gallery.scss';

class Videos extends React.Component {
  state = { loading: true, data: null };

  componentDidMount() {
    Network.get('api/videos/').then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { loading, data } = this.state;

    if (loading) return null;

    if (!loading && data.length === 0) {
      return (
        <div className="content ui container">
          <h2>Video's</h2>
          <p>Geen video's gevonden</p>
        </div>
      );
    }

    return (
      <div className="videos content ui container">
        <h2>Video's</h2>
        {data.map(video => (
          <div key={video.id}>
            <h1>{video.title}</h1>
            <iframe title={video.title} width="560" height="315" src={`https://www.youtube.com/embed/` + video.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        ))}
      </div>
    );
  }
}

export default Videos;
