import { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleCloseClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleCloseClick}>
        <div className={styles.Modal}>
          <img src={image} alt="ModalImage" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
