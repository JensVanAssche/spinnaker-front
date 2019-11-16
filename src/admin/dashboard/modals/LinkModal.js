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
import { updateLink, addLink, deleteLink } from "redux/links/actions";
import { validateRequired } from "utils/validate";
import "./modal.scss";

class LinkModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    loading: false,
    title: null,
    data: {
      id: null,
      url: null,
      footer: null,
      imageData: null,
      imageName: null
    }
  };

  openModal = (title, data) => {
    this.setState({
      modalOpen: true,
      error: null,
      loading: false,
      title,
      data: {
        id: data ? data.id : null,
        url: data ? data.url : "",
        footer: data ? data.footer : "none",
        imageData: null,
        imageName: data ? data.image : null
      }
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false
    });

  handleUrlChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        url: value
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

  handleFooterChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        footer: value
      }
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.url)) return false;
    if (!validateRequired(data.imageName)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { data } = this.state;
    const { updateLink, addLink } = this.props;
    if (isValid) {
      this.setState({ loading: true });
      if (data.id) {
        if (data.imageData) {
          Network.uploadImage("api/upload/single/300", data.imageData)
            .then(() => {
              updateLink(data).then(() => this.closeModal());
            })
            .catch(() => {
              this.setState({
                loading: false,
                error: "Gelieve een PNG, JPG of JPEG bestand te uploaden"
              });
            });
        } else {
          updateLink(data).then(() => this.closeModal());
        }
      } else {
        Network.uploadImage("api/upload/single/300", data.imageData)
          .then(() => {
            addLink(data).then(() => this.closeModal());
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
    this.props.deleteLink(this.state.data.id).then(() => this.closeModal());
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
              <label>URL</label>
              <input value={data.url} onChange={this.handleUrlChange} />
            </Form.Field>
            <Form.Field>
              <label>Foto</label>
              <input type="file" onChange={this.handleImageChange} />
            </Form.Field>
            <Form.Field>
              <label>Footer Categorie</label>
              <select value={data.footer} onChange={this.handleFooterChange}>
                <option value="none">Niet in de footer</option>
                <option value="steun">Met steun van</option>
                <option value="aangesloten">Aangesloten bij</option>
                <option value="onderdeel">Onderdeel van</option>
              </select>
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
  updateLink,
  addLink,
  deleteLink
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  LinkModal
);
