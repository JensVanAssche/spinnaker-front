import React from 'react';
import { Modal, Form, Button, Message } from 'semantic-ui-react';
import { validateRequired } from 'utils/validate';
import './modal.scss';

class InputModal extends React.Component {
  state = {
    modalOpen: false,
    error: null,
    title: null,
    data: {
      id: null,
      title: null,
      day: null,
      month: null,
      year: null,
    },
  };

  openModal = (title, data) => {
    if (data) {
      const arr = data.date.split(' ');
      var day;

      if (arr[0].length === 1) {
        day = '0' + arr[0];
      } else {
        day = arr[0];
      }

      var month = arr[1];
      var year = arr[2];
    }

    this.setState({
      modalOpen: true,
      error: null,
      title,
      data: {
        id: data ? data.id : null,
        title: data ? data.title : '',
        day: data ? day : '01',
        month: data ? month : 'januari',
        year: data ? year : '2000',
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

  handleDayChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        day: value,
      },
    }));
  };

  handleMonthChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        month: value,
      },
    }));
  };

  handleYearChange = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        year: value,
      },
    }));
  };

  validate = () => {
    const { data } = this.state;
    if (!validateRequired(data.title)) return false;
    return true;
  };

  save = () => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.data);
      this.closeModal();
    } else {
      this.setState({ error: "Gelieve de velden correct in te vullen" });
    }
  }

  delete = () => {
    console.log(this.state.data.id);
    this.closeModal();
  }

  render() {
    const { modalOpen, error, title, data } = this.state;
    
    return (
      <Modal size='tiny' open={modalOpen} onOpen={this.openModal} onClose={this.closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {error && (<Message error><p>{error}</p></Message>)}
          <Form>
            <Form.Field>
              <label>Naam Tornooi</label>
              <input value={data.title} onChange={this.handleTitleChange} />
            </Form.Field>
            <Form.Field>
              <label>Datum</label>
            </Form.Field>
            <Form.Group inline>
              <Form.Field width={3}>
                <select value={data.day} onChange={this.handleDayChange}>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </Form.Field>
              <Form.Field width={5}>
                <select value={data.month} onChange={this.handleMonthChange}>
                  <option value="januari">januari</option>
                  <option value="februari">februari</option>
                  <option value="maart">maart</option>
                  <option value="april">april</option>
                  <option value="mei">mei</option>
                  <option value="juni">juni</option>
                  <option value="juli">juli</option>
                  <option value="augustus">augustus</option>
                  <option value="september">september</option>
                  <option value="oktober">oktober</option>
                  <option value="november">november</option>
                  <option value="december">december</option>
                </select>
              </Form.Field>
              <Form.Field width={3}>
                <input value={data.year} onChange={this.handleYearChange} />
              </Form.Field>
            </Form.Group>
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

export default InputModal;