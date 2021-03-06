import React from "react";
import {
  Modal,
  Form,
  Button,
  Message,
  Dimmer,
  Loader
} from "semantic-ui-react";
import Network from "utils/network";
import { connect } from "react-redux";
import { updatePlayer, addPlayer, deletePlayer } from "redux/players/actions";
import { validateRequired } from "utils/validate";
import "./modal.scss";

class PlayerModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    loading: false,
    title: null,
    data: {
      id: null,
      type: null,
      name: null,
      subtitle: null,
      imageData: null,
      imageName: null
    }
  };

  openModal = (title, data, type) => {
    this.setState({
      modalOpen: true,
      error: null,
      loading: false,
      title,
      data: {
        id: data ? data.id : null,
        type: data ? data.type : type,
        name: data ? data.name : "",
        subtitle: data ? data.subtitle : "",
        imageData: null,
        imageName: data ? data.image : null
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

  handleSubtitleChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        subtitle: value
      }
    }));
  };

  handleImageChange = event => {
    const file = event.target.files[0];
    event.persist();
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        imageData: file,
        imageName: file.name
      }
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.name)) return false;
    if (!validateRequired(data.subtitle)) return false;
    if (!validateRequired(data.imageName)) return false;
    return true;
  };

  makeid = length => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  save = () => {
    const isValid = this.validate();
    const { data } = this.state;
    const { updatePlayer, addPlayer } = this.props;
    if (isValid) {
      this.setState({ loading: true });

      if (data.imageData) data.imageName = this.makeid(32) + ".jpg";

      if (data.id) {
        if (data.imageData) {
          Network.uploadImage(
            "api/upload/single/600",
            data.imageData,
            data.imageName
          )
            .then(() => {
              updatePlayer(data).then(() => this.closeModal());
            })
            .catch(() => {
              this.setState({
                loading: false,
                error: "Gelieve een PNG, JPG of JPEG bestand te uploaden"
              });
            });
        } else {
          updatePlayer(data).then(() => this.closeModal());
        }
      } else {
        Network.uploadImage(
          "api/upload/single/600",
          data.imageData,
          data.imageName
        )
          .then(() => {
            addPlayer(data).then(() => this.closeModal());
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: "Gelieve een PNG, JPG of JPEG bestand te uploaden"
            });
          });
      }
    } else {
      this.setState({ error: "Gelieve alle velden in te vullen" });
    }
  };

  delete = () => {
    this.setState({ loading: true });
    this.props.deletePlayer(this.state.data.id).then(() => this.closeModal());
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
            <Form.Field>
              <label>Subtitel</label>
              <input
                value={data.subtitle}
                onChange={this.handleSubtitleChange}
              />
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
  updatePlayer,
  addPlayer,
  deletePlayer
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  PlayerModal
);
