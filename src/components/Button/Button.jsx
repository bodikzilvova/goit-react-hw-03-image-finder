import { Component } from "react";
import styles from "./Button.module.css"


export class Button extends Component {

   

    render(){
        return(
            <button onClick={this.props.handleLoadMore} type="button" className={styles.Button}>Load more...</button>
        )
    }
  
}