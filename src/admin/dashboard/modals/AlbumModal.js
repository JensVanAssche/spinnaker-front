import React from 'react';
import { connect } from 'react-redux';
import { updateAlbum, addAlbum, deleteAlbum } from "redux/photos/actions";
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import './modal.scss';

class AlbumModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    data: {
      id: null,
      title: null,
    },
  };

  openModal = (title, data) => {
    this.setState({
      modalOpen: true,
      error: null,
      title,
      data: {
        id: data ? data.id : null,
        title: data ? data.title : ''
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

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.title)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { data } = this.state;
    if (isValid) {
      if (data.id) {
        this.props.updateAlbum(data);
      } else {
        this.props.addAlbum(data);
      }
      this.closeModal();
    } else {
      this.setState({ error: "Gelieve iets in te vullen" });
    }
  }

  delete = () => {
    this.props.deleteAlbum(this.state.data.id).then(() => this.closeModal());
  }

  render() {
    const { modalOpen, error, title, data } = this.state;
    
    return (
      <Modal size='tiny' open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
            <Form.Field>
              <label>Album Naam</label>
              <input value={data.title} onChange={this.handleTitleChange} />
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
  updateAlbum,
  addAlbum,
  deleteAlbum
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(AlbumModal);
