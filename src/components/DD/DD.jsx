import React from 'react'
import {Link} from "react-router-dom";
import styles from "./dd.module.css";
const DD = () => {
  return (
    <section className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Demand Draft</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Demand Draft</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
    <p >
    A demand draft is more secure than a normal cheque as it can only be credited to a specific payee's account, and a customer can only be reimbursed on request under indemnity if the draft is lost or stolen.
    </p>
    </div>
    </section>
  )
}

export default DD