import React from 'react';
import { Modal, Form, Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import { updateContent } from 'redux/content/actions';
import { connect } from 'react-redux';
import { validateRequired } from 'utils/validate';
import './modal.scss';

class TextareaModal extends React.Component {
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
      data: data ? this.convertToString(data) : null
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
    });

  handleTextareaChange = event => {
    const { value } = event.target;
    this.setState({ data: value });
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data)) return false;
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
    const { api, data } = this.state;
    if (isValid) {
      this.setState({ loading: true });
      this.props.updateContent(api, { value: this.convertToHtml(data) }).then(() => this.closeModal())
    } else {
      this.setState({ error: "Gelieve het veld in te vullen" });
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
            <label>[bold] = vet / [underline] = onderlijnd</label>
            <Form.Field><textarea value={data} onChange={this.handleTextareaChange} /></Form.Field>
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
)(TextareaModal);
