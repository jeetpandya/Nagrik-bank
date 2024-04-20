import React from 'react'
import {Link} from "react-router-dom";
import styles from "./locker.module.css";
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const Locker = () => {
  return (
    <>
    <section className={styles.image} img src="./images/locker.jpg" alt="tgrtgrgt">
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{i18n.t("navbar.SD")}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{i18n.t("navbar.SD")}</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
    <p >
    {i18n.t('navbar.SDp')}
    </p>
    </div>
    </section>
    </>
  )
}

export default withTranslation()(Locker)