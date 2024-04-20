import React from 'react'
import styles from "./fd.module.css";
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const FD = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Fixed Deposits</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/Fixed Deposits</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.I}>
    <img src="./images/deposits.png" alt="" />
    </div>
    </>
  )
}

export default withTranslation()(FD)