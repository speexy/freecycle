import React from "react"
import {CategoryButton} from "../components/CategoryButton"
import styles from "./index.module.css"

const categories = [["red", "Kleidung", "/textiles"], ["blue", "Elektro", "/electronics"], ["green", "Bücher", "/books"],["yellow", "Diverses", "/misc"]]

export default () => (

<div>
  {categories.map((item, index)=><CategoryButton color={item[0]} label={item[1]} link={item[2]} key={index}/>)}
</div>
)
