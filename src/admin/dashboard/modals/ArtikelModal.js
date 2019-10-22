import React from 'react';
import { connect } from 'react-redux';
import { updateArticle, addArticle, deleteArticle } from "redux/news/actions";
import Network from 'utils/network';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import './modal.scss';

class ArtikelModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    data: {
      id: null,
      title: null,
      body: null,
      imageData: null,
      imageName: null,
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
        body: data ? this.convertToString(data.body) : '',
        imageData: null,
        imageName: data ? data.image : null,
      },
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
    });

  handleTitleChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        title: value,
      },
    }));
  };

  handleImageChange = event => {   
    const file = event.target.files[0];
    event.persist();
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        imageData: file,
        imageName: file.name,
      },
    }));
  };

  handleBodyChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        body: value,
      },
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.title)) return false;
    if (!validateRequired(data.body)) return false;
    if (!validateRequired(data.imageName)) return false;
    return true;
  };

  convertToString = data => {
    const arr = data.split('<p');
    const newArr = [];
    for (let i = 1; i < arr.length; i++) {
      if (i === arr.length - 1) {
        if (arr[i].indexOf('class="underline"') >= 0) {
          newArr.push('[underline]' + arr[i].slice(19, arr[i].length - 4));
        } else if (arr[i].indexOf('class="bold"') >= 0) {
          newArr.push('[bold]' + arr[i].slice(14, arr[i].length - 4));
        } else {
          newArr.push(arr[i].slice(1, arr[i].length - 4));
        }
      } else {
        if (arr[i].indexOf('class="underline"') >= 0) {
          newArr.push('[underline]' + arr[i].slice(19, arr[i].length - 4) + '\n');
        } else if (arr[i].indexOf('class="bold"') >= 0) {
          newArr.push('[bold]' + arr[i].slice(14, arr[i].length - 4) + '\n');
        } else {
          newArr.push(arr[i].slice(1, arr[i].length - 4) + '\n');
        }
      }
    }
    return newArr.join('');
  }

  convertToHtml = data => {
    const arr = data.split('\n');
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf('[underline]') >= 0) {
        newArr.push('<p class="underline">' + arr[i].slice(11) + '</p>');
      } else if (arr[i].indexOf('[bold]') >= 0) {
        newArr.push('<p class="bold">' + arr[i].slice(6) + '</p>');
      } else {
        newArr.push('<p>' + arr[i] + '</p>');
      }
    }
    return newArr.join('');
  }

  save = () => {
    const isValid = this.validate();
    if (isValid) {
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          body: this.convertToHtml(prevState.data.body),
        },
      }), this.send);
    } else {
      this.setState({ error: "Gelieve alles in te vullen" });
    }
  }

  send = () => {
    const { data } = this.state;
    if (data.id) {
      this.props.updateArticle(data);
      if (data.imageData) Network.uploadImage('api/upload', data.imageData);
    } else {
      this.props.addArticle(data);
      Network.uploadImage('api/upload', data.imageData);
    }
    this.closeModal();
  }

  delete = () => {
    this.props.deleteArticle(this.state.data.id).then(() => this.closeModal());
  }

  render() {
    const { modalOpen, error, title, data } = this.state;
    
    return (
      <Modal open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
            <Form.Field>
              <label>Titel</label>
              <input value={data.title} onChange={this.handleTitleChange} />
            </Form.Field>
            <Form.Field>
              <label>Foto</label>
              <input type="file" onChange={this.handleImageChange} />
            </Form.Field>
            <Form.Field><textarea value={data.body} onChange={this.handleBodyChange} /></Form.Field>
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
  updateArticle,
  addArticle,
  deleteArticle
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(ArtikelModal);
