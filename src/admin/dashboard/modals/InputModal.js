import React from 'react';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import { updateContent } from 'app/actions';
import { connect } from 'react-redux';
import './modal.scss';

class InputModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    api: null,
    data: null,
  };

  openModal = (title, api, data) => {
    this.setState({
      modalOpen: true,
      error: null,
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
      this.props.updateContent(api, { value: data }).then(() => this.closeModal())
    } else {
      this.setState({ error: "Gelieve iets in te vullen" });
    }
  }

  render() {
    const { modalOpen, error, title, data } = this.state;
    
    return (
      <Modal open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
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
