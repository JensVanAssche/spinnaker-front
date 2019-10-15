import React from 'react';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import './modal.scss';

class StandingsTournamentModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    data: {
      id: null,
      name: null,
      points1: null,
      points2: null
    },
  };

  openModal = (title, data) => {
    this.setState({
      modalOpen: true,
      error: null,
      title,
      data: {
        id: data ? data.id : null,
        name: data ? data.name : '',
        points1: data ? data.points1 : '',
        points2: data ? data.points2 : '',
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

  handlePoints1Change = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        points1: value,
      },
    }));
  };

  handlePoints2Change = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        points2: value,
      },
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.name)) return false;
    if (!validateRequired(data.points1)) return false;
    if (!validateRequired(data.points2)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.data);
      this.closeModal();
    } else {
      this.setState({ error: "Gelieve alles in te vullen" });
    }
  }

  delete = () => {
    console.log(this.state.data.id);
    this.closeModal();
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
              <label>Naam</label>
              <input value={data.name} onChange={this.handleNameChange} />
            </Form.Field>
            <Form.Group inline>
              <Form.Field width={4}>
                <Form.Input fluid label='Totaal punten' value={data.points1} onChange={this.handlePoints1Change} />
              </Form.Field>
              <Form.Field width={4}>
                <Form.Input fluid label='Punten' value={data.points2} onChange={this.handlePoints2Change} />
              </Form.Field>
            </Form.Group>
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

export default StandingsTournamentModal;