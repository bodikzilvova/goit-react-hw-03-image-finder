import { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.handleLoadMore}
        type="button"
        className={styles.Button}
      >
        Load more...
      </button>
    );
  }
}

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
