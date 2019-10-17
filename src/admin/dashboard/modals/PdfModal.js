import React from 'react';
import { connect } from 'react-redux';
import { updatePdf } from 'redux/content/actions';
import { updatePdfResult, addPdfResult, deletePdfResult } from 'redux/results/actions';
import { updatePdfStanding, addPdfStanding, deletePdfStanding } from 'redux/standings/actions';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import './modal.scss';

class PdfModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    api: null,
    data: {
      id: null,
      type: null,
      title: null,
      pdfData: null,
      pdfName: null,
    },
  };

  openModal = (title, api, data, type) => {
    this.setState({
      modalOpen: true,
      error: null,
      title,
      api,
      data: {
        id: data ? data.id : null,
        type: data ? data.type : type,
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
    const { api, data } = this.state;
    if (isValid) {
      if (api === 'content/pdf') {
        this.props.updatePdf(api, data).then(() => this.closeModal());
      }

      if (data.id) {
        // PUT
        if (api === 'results/pdf') {
          this.props.updatePdfResult(data).then(() => this.closeModal());
        } 
        
        if (api === 'standings/pdf') {
          this.props.updatePdfStanding(data).then(() => this.closeModal());
        }
      } else {
        // POST
        if (api === 'results/pdf') {
          this.props.addPdfResult(data).then(() => this.closeModal());
        } 
        
        if (api === 'standings/pdf') {
          this.props.addPdfStanding(data).then(() => this.closeModal());
        }
      }
      
    } else {
      this.setState({ error: "Gelieve alles in te vullen" });
    }
  }

  delete = () => {
    if (this.state.api === 'results/pdf') {
      this.props.deletePdfResult(this.state.data.id).then(() => this.closeModal());
    }
    
    if (this.state.api === 'standings/pdf') {
      this.props.deletePdfStanding(this.state.data.id).then(() => this.closeModal());
    }
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

const mapDispatchToProps = {
  updatePdf,
  updatePdfResult,
  addPdfResult,
  deletePdfResult,
  updatePdfStanding,
  addPdfStanding,
  deletePdfStanding
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(PdfModal);
