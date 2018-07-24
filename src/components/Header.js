import React from "react"
import Link from "gatsby-link";
import styles from "./header.module.css"

export const Header = ()=> <div className={styles.header}> <Link to={"/"}><h1>speexy's freecycle</h1></Link></div>
