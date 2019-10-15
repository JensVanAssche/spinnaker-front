import React from 'react';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import './modal.scss';

class FileModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    data: null,
  };

  openModal = (title) => {
    this.setState({
      modalOpen: true,
      error: null,
      title,
      data: {
        imageData: null,
        imageName: null,
      }
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
      data: {
        imageData: file,
        imageName: file.name,
      },
    });
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.imageData)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.data);
      this.closeModal();
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

export default FileModal;