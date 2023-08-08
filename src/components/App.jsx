import { SearchBar } from './SearchBar/SearchBar';
import styles from './App.module.css';
import { Component } from 'react';
import { getImages } from '../api/api.services';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Audio } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    per_page: 12,
    value: '',
    isLoading: false,
    isShown: false,
    largeImage: '',
    searchValue: '',
  };

  handleSubmit = value => {
    this.setState({ isLoading: true });
    getImages(value).then(images => {
      console.log(images)
      this.setState({
        images: images,
        page: 1,
        isLoading: false,
        searchValue: value,
      });
    });
  };

  handleLoadMore = () => {
    const { searchValue, page, } = this.state;
    this.setState({ isLoading: true });
    getImages(searchValue, page + 1).then(newImages  => {
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        page: prevState.page + 1,
        isLoading: false,
      }))
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
    });
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
