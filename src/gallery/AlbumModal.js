import React from "react";
import { Modal } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import "./gallery.scss";

class Photos extends React.Component {
  state = {
    modalOpen: false,
    data: null,
    currentSlide: 0
  };

  openModal = (data, i) =>
    this.setState({
      modalOpen: true,
      error: null,
      data,
      currentSlide: i
    });

  closeModal = () =>
    this.setState({
      modalOpen: false
    });

  slideUp = () => {
    if (this.state.currentSlide < this.state.data.length - 1) {
      this.setState(prevState => {
        return { currentSlide: prevState.currentSlide + 1 };
      });
    }
  };

  slideDown = () => {
    if (this.state.currentSlide > 0) {
      this.setState(prevState => {
        return { currentSlide: prevState.currentSlide - 1 };
      });
    }
  };

  render() {
    const { modalOpen, data, currentSlide } = this.state;

    if (!data) return null;

    return (
      <Modal
        open={modalOpen}
        onOpen={this.openModal}
        onClose={this.closeModal}
        className="album-modal"
      >
        <Modal.Content>
          <img
            src={process.env.REACT_APP_API_HOST + data[currentSlide].image}
            alt="album foto"
          />
        </Modal.Content>
        <Modal.Actions>
          <div>
            {currentSlide > 0 && (
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={() => this.slideDown()}
              />
            )}
            {currentSlide === 0 && (
              <FontAwesomeIcon icon={faArrowLeft} className="hidden" />
            )}
            {currentSlide < data.length - 1 && (
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={() => this.slideUp()}
              />
            )}
          </div>
          <div>
            <p>
              Foto {currentSlide + 1} van {data.length}
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTimes} onClick={() => this.closeModal()} />
          </div>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Photos;
