import React, {Component} from "react"
import styles from "./card.module.css"
import { withPrefix } from 'gatsby-link'
import Button from "./Button.js"
import ReservationModal from "./ReservationModal.js"



export default class Card extends Component {

  state = {
    modalOpen: false,
    reserved: false,
    buttonCaption: "Reservieren"
  }

  toggleModal = e => {
    if (!this.state.reserved){
      this.setState({modalOpen:!this.state.modalOpen})
      console.log(this.state)
    }
  }

  reserve = e => {
    this.setState({reserved: true, buttonCaption: "reserviert"})
  }

  render (){

    let cardBackground;
    switch (this.props.category){
      case "books":
        cardBackground = styles.bgGreen;
        break;
      case "electronics":
        cardBackground = styles.bgBlue;
        break;
      case "misc":
        cardBackground = styles.bgYellow;
        break;
      case "textiles":
          cardBackground = styles.bgRed;
          break;
    }


    return (
      <div className={cardBackground}>
        <div className={styles.card}>
          <div className={styles.cardImage} style={{backgroundImage: `url(${this.props.imagePath})`}}></div>
          <h1>{this.props.title}</h1>
          <p  dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
          <Button  caption={this.state.buttonCaption}  reserved={this.state.reserved} onClick={this.toggleModal}/>
          <ReservationModal isOpen={this.state.modalOpen} close={this.toggleModal} reserve={this.reserve} itemTitle={this.props.title} image={this.props.imagePath} category={this.props.category} />
        </div>
      </div>
    )
  }
}
