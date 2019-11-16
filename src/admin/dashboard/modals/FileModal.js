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
import { connect } from "react-redux";
import Network from "utils/network";
import "./modal.scss";

class FileModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    loading: false,
    title: null,
    api: null,
    data: null
  };

  openModal = (title, api) => {
    this.setState({
      modalOpen: true,
      error: null,
      loading: false,
      title,
      api,
      data: null
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false
    });

  handleImageChange = event => {
    const file = event.target.files[0];
    event.persist();
    this.setState({
      data: file
    });
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    const { api, data } = this.state;
    if (isValid) {
      this.setState({ loading: true });

      if (
        api === "content/data/logoImg" ||
        api === "content/data/wheelblazersImg"
      ) {
        Network.uploadImage("api/upload/single/300", data)
          .then(() => {
            this.props
              .updateContent(api, { value: data.name })
              .then(() => this.closeModal());
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: "Gelieve een PNG, JPG of JPEG bestand te uploaden"
            });
          });
      }

      if (
        api === "content/data/bocciaImg" ||
        api === "content/data/dansenImg" ||
        api === "content/data/handbalImg" ||
        api === "content/data/hockeyImg" ||
        api === "content/data/zwemmenImg"
      ) {
        Network.uploadImage("api/upload/single/1200", data)
          .then(() => {
            this.props
              .updateContent(api, { value: data.name })
              .then(() => this.closeModal());
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: "Gelieve een PNG, JPG of JPEG bestand te uploaden"
            });
          });
      }

      if (api === "content/data/headerImg") {
        Network.uploadImage("api/upload/single/2000", data)
          .then(() => {
            this.props
              .updateContent(api, { value: data.name })
              .then(() => this.closeModal());
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: "Gelieve een PNG, JPG of JPEG bestand te uploaden"
            });
          });
      }
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
              <input type="file" onChange={this.handleImageChange} />
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
  updateContent
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  FileModal
);
