import React from 'react';
import styles from "./why.module.css";
import {Link} from "react-router-dom";
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const Why = () => {
  return (
    <>

    <section className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Why banking with us?</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Why banking with us?</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
    <p >
   
    {i18n.t('navbar.whyp')}
    </p>
    </div>
    </section>
   
    </>
  )
}

export default withTranslation()(Why)