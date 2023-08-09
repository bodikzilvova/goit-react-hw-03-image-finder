import { SearchBar } from './SearchBar/SearchBar';
import styles from './App.module.css';
import { Component } from 'react';
import { getImages } from '../api/api.services';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Audio } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    per_page: 12,
    value: '',
    isLoading: false,
    isShown: false,
    largeImage: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      const { value, page } = this.state;
      this.setState({ isLoading: true });
      getImages(value, page).then(({ hits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          isLoading: false,
        }));
      });
    }
  }

  handleSubmit = value => {
    this.setState({ value: value, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = largeImage => {
    this.setState({ isShown: true, largeImage: largeImage });
  };

  handleCloseModal = () => {
    this.setState({ isShown: false, largeImage: '' });
  };

  render() {
    const { images, isLoading, isShown, largeImage, per_page, page } =
      this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onOpenModal={this.handleOpenModal} />
        {images.length >= per_page * page && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
        {isLoading && <Audio />}
        {isShown && (
          <Modal image={largeImage} onCloseModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
