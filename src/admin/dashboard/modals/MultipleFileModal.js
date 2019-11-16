import React from "react";
import {
  Modal,
  Form,
  Button,
  Message,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { validateRequired } from "utils/validate";
import { updateContent } from "redux/content/actions";
import { addPhotos } from "redux/photos/actions";
import { connect } from "react-redux";
import Network from "utils/network";
import "./modal.scss";

class FileModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    loading: false,
    title: null,
    albumId: null,
    data: null
  };

  openModal = (title, albumId) => {
    this.setState({
      modalOpen: true,
      error: null,
      loading: false,
      title,
      albumId,
      data: null
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false
    });

  handleImageChange = event => {
    event.persist();
    this.setState({
      data: event.target.files
    });
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { data } = this.state;
    if (isValid) {
      this.setState({ loading: true });
      var files = [];
      var names = [];
      for (let i = 0; i < data.length; i++) {
        files.push(data[i]);
        names.push(data[i].name);
      }
      Network.uploadImages("api/upload/multiple/900", files)
        .then(() => {
          this.props
            .addPhotos({ albumId: this.state.albumId, images: names })
            .then(() => this.closeModal());
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: "Gelieve PNG, JPG of JPEG bestanden te uploaden"
          });
        });
    } else {
      this.setState({ error: "Gelieve een bestand te uploaden" });
    }
  };

  render() {
    const { modalOpen, error, loading, title } = this.state;

    return (
      <Modal
        size="mini"
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
              <label>Meerdere foto's selecteren mogelijk</label>
              <input type="file" onChange={this.handleImageChange} multiple />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <div></div>
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
  updateContent,
  addPhotos
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  FileModal
);
