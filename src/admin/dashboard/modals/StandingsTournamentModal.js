import React from 'react';
import { connect } from 'react-redux';
import { updateTournamentStanding, addTournamentStanding, deleteTournamentStanding } from 'redux/standings/actions';
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
      type: null,
      title: null,
      subtitle: null
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
        title: data ? data.title : '',
        subtitle: data ? data.subtitle : '',
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

  handleSubtitleChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        subtitle: value,
      },
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.title)) return false;
    if (!validateRequired(data.subtitle)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { data } = this.state;
    if (isValid) {
      if (data.id) {
        this.props.updateTournamentStanding(data).then(() => this.closeModal());
      } else {
        this.props.addTournamentStanding(data).then(() => this.closeModal());
      }
    } else {
      this.setState({ error: "Gelieve alles in te vullen" });
    }
  }

  delete = () => {
    this.props.deleteTournamentStanding(this.state.data.id).then(() => this.closeModal());
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
              <label>Naam Tornooi</label>
              <input value={data.title} onChange={this.handleTitleChange} />
            </Form.Field>
            <Form.Field>
              <label>Subtitel</label>
              <input value={data.subtitle} onChange={this.handleSubtitleChange} />
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
  updateTournamentStanding,
  addTournamentStanding,
  deleteTournamentStanding
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(StandingsTournamentModal);
