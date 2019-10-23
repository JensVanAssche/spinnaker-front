import React from 'react';
import { connect } from 'react-redux';
import { updateVideo, addVideo, deleteVideo } from "redux/videos/actions";
import { Modal, Form, Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import { validateRequired, validateUrl } from 'utils/validate';
import './modal.scss';

class VideoModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    loading: false,
    title: null,
    data: {
      id: null,
      title: null,
      url: null,
    },
  };

  openModal = (title, data) => {
    this.setState({
      modalOpen: true,
      error: null,
      loading: false,
      title,
      data: {
        id: data ? data.id : null,
        title: data ? data.title : '',
        url: data ? this.convertToUrl(data.url) : ''
      },
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
    });

  handleTitleChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        title: value,
      },
    }));
  };

  handleUrlChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        url: value,
      },
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.title)) return false;
    if (!validateRequired(data.url)) return false;
    if (!validateUrl(data.url)) return false;
    return true;
  };

  convertToId = url => {
    const id = url.split('?v=')[1];
    return id;
  }

  convertToUrl = id => {
    return "https://www.youtube.com/watch?v=" + id;
  }

  save = () => {
    const isValid = this.validate();
    if (isValid) {
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          url: this.convertToId(prevState.data.url),
        },
        loading: true
      }), this.send);
      
    } else {
      this.setState({ error: "Gelieve alle velden correct in te vullen" });
    }
  }

  send = () => {
    const { data } = this.state;
    if (data.id) {
      this.props.updateVideo(data).then(() => this.closeModal());
    } else {
      this.props.addVideo(data).then(() => this.closeModal());
    }
  }

  delete = () => {
    this.setState({ loading: true });
    this.props.deleteVideo(this.state.data.id).then(() => this.closeModal());
  }

  render() {
    const { modalOpen, error, loading, title, data } = this.state;
    
    return (
      <Modal size='tiny' open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
            {loading && (<Dimmer active inverted>
              <Loader inverted />
            </Dimmer>)}
            <Form.Field>
              <label>Video Naam</label>
              <input value={data.title} onChange={this.handleTitleChange} />
            </Form.Field>
            <Form.Field>
              <label>Youtube URL</label>
              <div className="video-flex">
                <input value={data.url} onChange={this.handleUrlChange} />
              </div>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <div>
            {data.id && (
              <Button color="red" onClick={() => this.delete()}>Verwijderen</Button>
            )}
          </div>
          <div>
            <Button onClick={() => this.closeModal()}>Annuleren</Button>
            <Button primary onClick={() => this.save()}>Bevestig</Button>
          </div>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  updateVideo,
  addVideo,
  deleteVideo
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(VideoModal);
