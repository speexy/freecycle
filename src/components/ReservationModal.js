import React, {Component} from "react";
import axios from 'axios';
import styles from "./reservation-modal.module.css"
import Button from "./Button.js"


export default class ReservationModal extends Component {

  state = {
    name: "",
    email: "",
    telegram: "",
    message: ""
  }

  getFormValue = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  sendMail = e => {

    if (this.state.email==="") {alert("bitte gib deine emailadresse ein")} else {

      alert("Nachricht erfolgreich gesendet")
      this.props.reserve();
      this.props.close()
      const {itemTitle, image, category} = this.props

      axios({
        method: 'post',
        url: 'http://localhost:3000/api/send',
        data: {
          title: itemTitle,
          image: image,
          category: category,
          userName: this.state.name,
          userEmail: this.state.email,
          userTelegram: this.state.telegram,
          userMessage: this.state.message
        }
        }).then(res => {
        const resdata = res.data;
      });
    }
  }


  testFormInput = ()=>{
        console.log("this is what's happening", this.state)
  }

  render(){
    const modal = (
      <div className={styles.modalBackground}>
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>
            <p>Um zu reservieren, kannst mir mit diesem Formular eine Email schicken. Du musst unbedingt deine email-adresse mit angeben, sonst kann ich dich nicht erreichen.
          Abholungen in der Regel möglich Di/Mi/Do am Potsdam Hbf, Berlin Zoo oder Schlesischen Tor. Details per Email oder Telegram. </p>
            <div className={styles.form}>
              <div><p>Name</p> <input type="text" name="name" value={this.state.name} onChange={(e) => this.getFormValue(e)}/></div>
              <div><p>Email (Pflichtfeld)</p> <input type="text" name="email" value={this.state.email} onChange={(e,name) => this.getFormValue(e)}/></div>
              <div><p>Telegram</p> <input type="text" name="telegram" value={this.state.telegram} onChange={(e,name) => this.getFormValue(e)}/></div>
              <div><p>Deine Nachricht</p> <textarea name="message" value={this.state.message} onChange={(e,name) => this.getFormValue(e)}/></div>
              <div className={styles.buttonPosition}><Button caption={"Verbindlich reservieren"} onClick={this.sendMail}/></div>
            </div>
            <div className={styles.closeIcon} onClick={this.props.close}><span></span><span></span></div>
          </div>
        </div>
      </div>
    )
    return (
      this.props.isOpen ? modal : null
    )
  }
}
