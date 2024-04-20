import React from 'react';
import styles from "./vision.module.css";
import {Link} from "react-router-dom";
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const Vision = () => {
  return (
    <>

    <section className={styles.image} >
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{i18n.t('navbar.vision')}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{i18n.t('navbar.vision')}</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
    <p >
    {i18n.t('navbar.visionp')}
    </p>
    </div>
    </section>
   
    </>
  )
}

export default withTranslation()(Vision)