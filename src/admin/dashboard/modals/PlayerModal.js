import React from 'react';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import Network from 'utils/network';
import { connect } from 'react-redux';
import { updatePlayer, addPlayer, deletePlayer } from "redux/players/actions";
import { validateRequired } from 'utils/validate';
import './modal.scss';

class PlayerModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    data: {
      id: null,
      type: null,
      name: null,
      subtitle: null,
      imageData: null,
      imageName: null,
    },
  };

  openModal = (title, data, type) => {
    this.setState({
      modalOpen: true,
      error: null,
      title,
      data: {
        id: data ? data.id : null,
        type: data ? data.type : type,
        name: data ? data.name : '',
        subtitle: data ? data.subtitle : '',
        imageData: null,
        imageName: data ? data.image : null,
      },
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
    });

  handleNameChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        name: value,
      },
    }));
  };

  handleSubtitleChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        subtitle: value,
      },
    }));
  };

  handleImageChange = event => {   
    const file = event.target.files[0];
    event.persist();
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        imageData: file,
        imageName: file.name,
      },
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.name)) return false;
    if (!validateRequired(data.subtitle)) return false;
    if (!validateRequired(data.imageName)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { data } = this.state;
    const { updatePlayer, addPlayer } = this.props;
    if (isValid) {
      if (data.id) {
        updatePlayer(data);
        if (data.imageData) Network.uploadImage('api/upload', data.imageData);
      } else {
        addPlayer(data);
        Network.uploadImage('api/upload', data.imageData);
      }
      this.closeModal();
    } else {
      this.setState({ error: "Gelieve alles in te vullen" });
    }
  }

  delete = () => {
    this.props.deletePlayer(this.state.data.id).then(() => this.closeModal());
  }

  render() {
    const { modalOpen, error, title, data } = this.state;
    
    return (
      <Modal size="tiny" open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
            <Form.Field>
              <label>Naam</label>
              <input value={data.name} onChange={this.handleNameChange} />
            </Form.Field>
            <Form.Field>
              <label>Subtitel</label>
              <input value={data.subtitle} onChange={this.handleSubtitleChange} />
            </Form.Field>
            <Form.Field>
              <label>Foto</label>
              <input type="file" onChange={this.handleImageChange} />
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
  updatePlayer,
  addPlayer,
  deletePlayer
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(PlayerModal);