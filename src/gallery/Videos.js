import React from 'react';
import { connect } from 'react-redux';
import { selectVideos } from "redux/videos/selectors";
import { getVideos } from "redux/videos/actions";
import './gallery.scss';

class Videos extends React.Component {
  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    const { data } = this.props;

    if (!data) return null;

    if (data.length === 0) {
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

const mapDispatchToProps = {
  getVideos,
};

const mapStateToProps = state => ({
  data: selectVideos(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Videos);
