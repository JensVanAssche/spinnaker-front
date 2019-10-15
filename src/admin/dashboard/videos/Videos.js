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
      <Grid columns={4}>
        <Grid.Row className="grid-header">
          <Grid.Column width={5}>
            <p>Naam</p>
          </Grid.Column>
          <Grid.Column width={5}>
            <p>URL</p>
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
        </Grid.Row>
        {!videos.length && ( <p>Geen videos</p> )}
        {videos.map(video => (
          <Grid.Row key={video.id}>
            <Grid.Column width={5}>
              <p>{video.title}</p>
            </Grid.Column>
            <Grid.Column width={9}>
              <p>{'https://www.youtube.com/watch?v=' + video.url}</p>
            </Grid.Column>
            <Grid.Column width={2} className="grid-button">
              <Button icon className="small-button" onClick={() => openVideoModal('Video', video)}>
                <Icon name="edit" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        ))}
        <Grid.Row>
          <Grid.Column width={16} className="grid-button">
            <Button icon primary className="small-button" onClick={() => openVideoModal('Video toevoegen')}>
              <span>Video Toevoegen</span>
              <Icon name="add" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Tab.Pane>;
  }
}

export default Videos;
