import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

class VideoThumbnail extends React.Component {
  state = {
    loadVideo: false
  };

  loadVideo = () => this.setState({ loadVideo: true });

  render() {
    const { video } = this.props;
    const { loadVideo } = this.state;
    return (
      <div>
        {!loadVideo && (
          <div className="video-thumbnail" onClick={this.loadVideo}>
            <FontAwesomeIcon icon={faPlay} />
            <img
              src={`https://img.youtube.com/vi/${video.url}/0.jpg`}
              alt="video thumbnail"
            />
          </div>
        )}
        {loadVideo && (
          <iframe
            title={video.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/` + video.url + `?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    );
  }
}

export default VideoThumbnail;
