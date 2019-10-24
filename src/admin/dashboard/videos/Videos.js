import React from 'react';
import { connect } from 'react-redux';
import { selectVideos } from "redux/videos/selectors";
import { getVideos } from "redux/videos/actions";
import { Tab, Button, Icon, Dimmer, Loader } from 'semantic-ui-react';

class Videos extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.props.getVideos();
    this.setState({ loading: false })
  }

  render() {
    const { openVideoModal, videos } = this.props;

    if (this.state.loading) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    if (!videos) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    return <Tab.Pane>
      <div className="dashboard-item small">
        <div className="dashboard-flex">
          <h1>Video's</h1>
          <Button icon primary className="small-button" onClick={() => openVideoModal('Video toevoegen')} >
            <span>Video</span>
            <Icon name="add" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        {!videos.length && ( <p>Geen video's</p> )}
        {videos.map(video => (
          <div className="dashboard-flex" key={video.id}>
            <div>
              <p>{video.title}</p>
              <a href={'https://www.youtube.com/watch?v=' + video.url} target="_blank" rel="noopener noreferrer">{'https://www.youtube.com/watch?v=' + video.url}</a>
            </div>
            <Button icon className="small-button" onClick={() => openVideoModal('Video aanpassen', video)}>
              <Icon name="edit" />
            </Button>
          </div>
        ))}
      </div>
    </Tab.Pane>;
  }
}

const mapDispatchToProps = {
  getVideos,
};

const mapStateToProps = state => ({
  videos: selectVideos(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Videos);
