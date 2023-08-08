import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  handleOpenModal = () => {
    this.props.onOpenModal(this.props.largeImageURL);
  };

  render() {
    const { webformatURL } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={styles.ImageGalleryItemImage}
          onClick={this.handleOpenModal}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
