import React from 'react';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import './modal.scss';

class PdfModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    data: {
      id: null,
      title: null,
      pdfData: null,
      pdfName: null,
    },
  };

  openModal = (title, data) => {
    this.setState({
      modalOpen: true,
      error: null,
      title,
      data: {
        id: data ? data.id : null,
        title: data ? data.title : '',
        pdfData: null,
        pdfName: data ? data.pdf : null,
      },
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
    });

  handleInputChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        title: value,
      },
    }));
  };

  handlePdfChange = event => {   
    const file = event.target.files[0];
    event.persist();
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        pdfData: file,
        pdfName: file.name,
      },
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.title)) return false;
    if (!validateRequired(data.pdfName)) return false;
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
      <Modal size="tiny" open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
            <Form.Field>
              <label>Title</label>
              <input value={data.title} onChange={this.handleInputChange} />
            </Form.Field>
            <Form.Field>
              <label>PDF Upload</label>
              <input type="file" onChange={this.handlePdfChange} />
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

export default PdfModal;