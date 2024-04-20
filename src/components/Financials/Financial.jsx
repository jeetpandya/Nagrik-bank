import React from 'react'
import styles from "./financial.module.css";
import { Link } from 'react-router-dom';
import i18n from "i18next";
import { withTranslation } from "react-i18next";
const Financial = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Financial highlights</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/Financial Highlights</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.I}>
    <img  src="./images/FA.png" alt="" />
    </div>
    </>
  )
}

export default withTranslation()(Financial)