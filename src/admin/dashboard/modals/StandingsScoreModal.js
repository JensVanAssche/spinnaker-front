import React from "react";
import { connect } from "react-redux";
import {
  updateScoreStanding,
  addScoreStanding,
  deleteScoreStanding
} from "redux/standings/actions";
import {
  Modal,
  Form,
  Button,
  Message,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { validateRequired } from "utils/validate";
import "./modal.scss";

class StandingsTournamentModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    loading: false,
    title: null,
    data: {
      id: null,
      tournamentId: null,
      name: null,
      points1: null,
      points2: null,
      points3: null
    }
  };

  openModal = (title, data, tournamentId, p3) => {
    this.setState({
      modalOpen: true,
      error: null,
      loading: false,
      title,
      data: {
        id: data ? data.id : null,
        tournamentId: data ? data.tournamentId : tournamentId,
        name: data ? data.name : "",
        points1: data ? data.points1 : "",
        points2: data ? data.points2 : "",
        points3: p3 ? (data ? data.points3 : "") : null
      }
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false
    });

  handleNameChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        name: value
      }
    }));
  };

  handlePoints1Change = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        points1: value
      }
    }));
  };

  handlePoints2Change = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        points2: value
      }
    }));
  };

  handlePoints3Change = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        points3: value
      }
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.name)) return false;
    if (!validateRequired(data.points1)) return false;
    if (!validateRequired(data.points2)) return false;
    if (this.props.p3) {
      if (!validateRequired(data.points3)) return false;
    }
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { data } = this.state;
    if (isValid) {
      this.setState({ loading: true });
      if (data.id) {
        this.props.updateScoreStanding(data).then(() => this.closeModal());
      } else {
        this.props.addScoreStanding(data).then(() => this.closeModal());
      }
    } else {
      this.setState({ error: "Gelieve alle velden in te vullen" });
    }
  };

  delete = () => {
    this.setState({ loading: true });
    this.props
      .deleteScoreStanding(this.state.data.id)
      .then(() => this.closeModal());
  };

  render() {
    const { modalOpen, error, loading, title, data } = this.state;

    return (
      <Modal
        size="tiny"
        open={modalOpen}
        onOpen={this.openModal}
        onClose={this.closeModal}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (
            <Message error>
              <p>{error}</p>
            </Message>
          )}
          <Form>
            {loading && (
              <Dimmer active inverted>
                <Loader inverted />
              </Dimmer>
            )}
            <Form.Field>
              <label>Naam</label>
              <input value={data.name} onChange={this.handleNameChange} />
            </Form.Field>
            <Form.Group inline>
              <Form.Field width={4}>
                <Form.Input
                  fluid
                  label={data.points3 !== null ? "Gespeeld" : "Totaal punten"}
                  value={data.points1}
                  onChange={this.handlePoints1Change}
                />
              </Form.Field>
              <Form.Field width={4}>
                <Form.Input
                  fluid
                  label={data.points3 !== null ? "Goal Verschil" : "Punten"}
                  value={data.points2}
                  onChange={this.handlePoints2Change}
                />
              </Form.Field>
              {data.points3 !== null && (
                <Form.Field width={4}>
                  <Form.Input
                    fluid
                    label="Punten"
                    value={data.points3}
                    onChange={this.handlePoints3Change}
                  />
                </Form.Field>
              )}
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <div>
            {data.id && (
              <Button color="red" onClick={() => this.delete()}>
                Verwijderen
              </Button>
            )}
          </div>
          <div>
            <Button onClick={() => this.closeModal()}>Annuleren</Button>
            <Button primary onClick={() => this.save()}>
              Bevestig
            </Button>
          </div>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  updateScoreStanding,
  addScoreStanding,
  deleteScoreStanding
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  StandingsTournamentModal
);
