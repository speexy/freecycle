import React from "react"
import Link from "gatsby-link"
import styles from "./footer.module.css"


export const Footer = () => (

  <div className={styles.footer}>
    <ul>
    <li><Link to="/imprint">Impressum</Link></li>
    <li><Link to="/privacy">Datenschutz</Link></li>
    </ul>
  </div>

)
