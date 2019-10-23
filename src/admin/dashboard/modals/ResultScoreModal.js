import React from 'react';
import { connect } from 'react-redux';
import { updateScoreResult, addScoreResult, deleteScoreResult } from 'redux/results/actions';
import { Modal, Form, Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import { validateRequired, validateNumber } from 'utils/validate';
import './modal.scss';

class ResultScoreModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    loading: false,
    title: null,
    data: {
      id: null,
      tournamentId: null,
      team1: null,
      team1Score: null,
      team2: null,
      team2Score: null,
    },
  };

  openModal = (title, data, tournamentId) => {
    this.setState({
      modalOpen: true,
      error: null,
      loading: false,
      title,
      data: {
        id: data ? data.id : null,
        tournamentId: data ? data.tournamentId : tournamentId,
        team1: data ? data.team1 : '',
        team1Score: data ? data.team1Score : '',
        team2: data ? data.team2 : '',
        team2Score: data ? data.team2Score : '',
      },
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
  });

  handleTeam1Change = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        team1: value,
      },
    }));
  };

  handleTeam1ScoreChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        team1Score: value,
      },
    }));
  };

  handleTeam2Change = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        team2: value,
      },
    }));
  };

  handleTeam2ScoreChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        team2Score: value,
      },
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.team1)) return false;
    if (!validateRequired(data.team1Score)) return false;
    if (!validateNumber(data.team1Score)) return false;
    if (!validateRequired(data.team2)) return false;
    if (!validateRequired(data.team2Score)) return false;
    if (!validateNumber(data.team2Score)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { data } = this.state;
    if (isValid) {
      this.setState({ loading: true });
      if (data.id) {
        this.props.updateScoreResult(data).then(() => this.closeModal());
      } else {
        this.props.addScoreResult(data).then(() => this.closeModal());
      }
    } else {
      this.setState({ error: "Gelieve alle velden correct in te vullen" });
    }
  }

  delete = () => {
    this.setState({ loading: true });
    this.props.deleteScoreResult(this.state.data.id).then(() => this.closeModal());
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
            <Form.Group inline>
              <Form.Field width={12}>
                <Form.Input fluid label='Team 1' value={data.team1} onChange={this.handleTeam1Change} />
              </Form.Field>
              <Form.Field width={4}>
                <Form.Input fluid label='Team 1 Score' value={data.team1Score} onChange={this.handleTeam1ScoreChange} />
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <Form.Field width={12}>
                <Form.Input fluid label='Team 2' value={data.team2} onChange={this.handleTeam2Change} />
              </Form.Field>
              <Form.Field width={4}>
                <Form.Input fluid label='Team 2 Score' value={data.team2Score} onChange={this.handleTeam2ScoreChange} />
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

const mapDispatchToProps = {
  updateScoreResult,
  addScoreResult,
  deleteScoreResult
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(ResultScoreModal);
