import { Component } from "react";
import styles from './Modal.module.css';


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
    
      render() {
        const { image, onCloseModal } = this.props;
        return (
          <div className={styles.Overlay} onClick={onCloseModal}>
            <div className={styles.Modal}>
              <img src={image} alt="ModalImage" />
            </div>
          </div>
        );
      }
    }