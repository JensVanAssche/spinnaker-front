import React from 'react';
import { Modal, Form, Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import { updateContent } from 'redux/content/actions';
import { connect } from 'react-redux';
import './modal.scss';

class InputModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    loading: false,
    title: null,
    api: null,
    data: null,
  };

  openModal = (title, api, data) => {
    this.setState({
      modalOpen: true,
      error: null,
      loading: false,
      title,
      api,
      data: data ? data : null
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
    });

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ data: value });
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
      this.props.updateContent(api, { value: data }).then(() => this.closeModal())
    } else {
      this.setState({ error: "Gelieve iets in te vullen" });
    }
  }

  render() {
    const { modalOpen, error, loading, title, data } = this.state;
    
    return (
      <Modal open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
            {loading && (<Dimmer active inverted>
              <Loader inverted />
            </Dimmer>)}
            <Form.Field><input value={data} onChange={this.handleInputChange} /></Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <div></div>
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
  updateContent,
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(InputModal);
