import { SearchBar } from './SearchBar/SearchBar';
import styles from './App.module.css';
import { Component } from 'react';
import  { getImages } from '../api/api.services'

export class App extends Component  {
  handleSubmit = value => {
    getImages(value)
  };



render(){
  return (
    <div className={styles.App}>
      <SearchBar onSubmit={this.handleSubmit}/>
    </div>
  );
}
};

