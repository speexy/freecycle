import React from "react"
import styles from "./category_button.module.css"
import Link from "gatsby-link"


export const CategoryButton = (props) => {

let buttonStyle;

switch(props.color){
  case "red":
    buttonStyle = styles.redButton;
    break;
  case "blue":
    buttonStyle = styles.blueButton;
    break;
  case "green":
    buttonStyle = styles.greenButton;
    break;
  case "yellow":
    buttonStyle = styles.yellowButton;
    break;
}

return (
  <Link to={props.link} className={buttonStyle}>
    <h2>{props.label}</h2>
  </Link>
)

}
