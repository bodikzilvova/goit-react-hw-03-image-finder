import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  handleOpenModal = () => {
    this.props.onOpenModal(this.props.largeImageURL);
  };

  render() {
    const { webformatURL } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} onClick={this.handleOpenModal} />
      </li>
    );
  }
}
