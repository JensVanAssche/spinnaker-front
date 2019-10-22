import React from 'react';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import { updateContent } from 'redux/content/actions';
import { addPhoto } from 'redux/photos/actions';
import { connect } from 'react-redux';
import Network from 'utils/network';
import './modal.scss';

class FileModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    api: null,
    albumId: null,
    data: null,
  };

  openModal = (title, api, albumId) => {
    this.setState({
      modalOpen: true,
      error: null,
      title,
      api,
      albumId,
      data: null
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
    });

  handleImageChange = event => {   
    const file = event.target.files[0];
    event.persist();
    this.setState({
      data: file,
    });
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { api, data } = this.state;
    if (isValid) {
      if (api) {
        this.props.updateContent(api, data).then(() => this.closeModal());
      } else {
        this.props.addPhoto({ albumId: this.state.albumId, image: data.name });
        Network.uploadImage('api/upload', data);
        this.closeModal();
      }
    } else {
      this.setState({ error: "Gelieve een bestand te uploaden" });
    }
  }

  render() {
    const { modalOpen, error, title } = this.state;

    return (
      <Modal size="mini" open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
            <Form.Field>
              <input type="file" onChange={this.handleImageChange} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <div></div>
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
  updateContent,
  addPhoto
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(FileModal);
