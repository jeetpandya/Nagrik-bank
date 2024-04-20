import React from 'react'
import styles from "./lir.module.css";
import { Link } from 'react-router-dom';

const LIR = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Loan Interest Rates</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Loan Interest Rates</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.I}>
    <img src="./images/DHIRAN DARO.jpg" alt="" />
    </div>
    </>
  )
}

export default LIR