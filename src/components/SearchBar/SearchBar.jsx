import { Component } from 'react';
import styles from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({
        value: target.value,
    });
  };

  handleSubmit = e => {
e.preventDefault();
const { value } = this.state;
this.props.onSubmit(value)
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
