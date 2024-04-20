import React from 'react';
import styles from "./history.module.css";
import {Link} from "react-router-dom";
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const History = () => {
  return (
    <>

    <section className={styles.image}  >
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{i18n.t('navbar.History')}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{i18n.t('navbar.History')}</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
      
      <p>{i18n.t('navbar.Historyp')}</p>
    <p >
    {i18n.t('navbar.Historyp1')}
    </p>
    </div>
    </section>
   
    </>
  )
}

export default withTranslation()(History)