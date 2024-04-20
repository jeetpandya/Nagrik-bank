import React from 'react'
import styles from "./deposits.module.css";
import { Link } from 'react-router-dom';

const Deposits = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Account Deposits</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Account Deposits</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.I}>
    <img style={{width:"80%",height:"80%",margin:"auto",alignItems:"center",justifyContent:"center"}} src="./images/deposits.png" alt="" />
    </div>
    </>
  )
}

export default Deposits