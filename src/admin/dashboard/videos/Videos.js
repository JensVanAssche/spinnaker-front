import React from 'react';
import { Tab, Button, Icon, Grid } from 'semantic-ui-react';
import Network from 'utils/network';

class Videos extends React.Component {
  state = {
    videos: null,
  }

  componentDidMount() {
    Network.get('api/videos').then((res) => 
      this.setState({ videos: res })
    );
  }

  render() {
    const { videos } = this.state;
    const { openVideoModal } = this.props;

    if (!videos) return null;

    return <Tab.Pane>
      <h1>Video's</h1>
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
        <div className="dashboard-flex">
          <div />
          <Button icon primary className="small-button" onClick={() => openVideoModal('Video')} >
            <span>Video</span>
            <Icon name="add" />
          </Button>
        </div>
      </div>
    </Tab.Pane>;
  }
}

export default Videos;
