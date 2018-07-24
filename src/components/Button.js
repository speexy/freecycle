import React, {Component} from "react"
import styles from "./button.module.css"

export default class Button extends Component {

  render(){

    const {itemTitle, image, category, caption} = this.props;
    let buttonStyle;
    if (this.props.reserved){
      buttonStyle = styles.buttonInactive
    } else {
      buttonStyle = styles.button
    }

    return (
      <button className={buttonStyle} onClick={this.props.onClick}>{caption}</button>
    )
  }

}
