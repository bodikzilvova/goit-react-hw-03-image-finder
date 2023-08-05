import { SearchBar } from './SearchBar/SearchBar';
import styles from './App.module.css';
import { Component } from 'react';
import  { getImages } from '../api/api.services'
import  { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from './Button/Button';
import { Audio } from 'react-loader-spinner';
import { Modal } from './Modal/Modal'

export class App extends Component  {
state = {
  images: [],
  currentPage: 1,
  value: '',
  isLoading: false,
  isShown: false,
  largeImage: '',
}

  handleSubmit = value => {
    this.setState({ isLoading: true });
    getImages(value).then(images => {
      this.setState({ images: images, currentPage: 1, isLoading: false, });
    })
  };


  handleLoadMore = () => {
    const { value, currentPage } = this.state;
    this.setState({ isLoading: true });
    getImages(value, currentPage + 1).then(newImages  => {
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        currentPage: prevState.currentPage + 1,
        isLoading: false,
      })).catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
    });
    })
  }

  handleOpenModal = largeImage => {
    this.setState({ isShown: true, largeImage: largeImage });
  };

  handleCloseModal = () => {
    this.setState({ isShown: false, largeImage: '' });
  };

render(){
  const { images, isLoading, isShown, largeImage } = this.state;
  return (
    <div className={styles.App}>
      <SearchBar onSubmit={this.handleSubmit}/>
      <ImageGallery images={images} onOpenModal={this.handleOpenModal}/>
      {images.length > 0 && <Button handleLoadMore={this.handleLoadMore}/>}
      {isLoading && <Audio />}
      {isShown && <Modal image={largeImage} onCloseModal={this.handleCloseModal} />}
    </div>
  );
}
};

