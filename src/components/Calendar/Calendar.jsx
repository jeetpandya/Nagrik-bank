import React from 'react'
import {Link} from "react-router-dom";
import styles from "./Calendar.module.css";
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const List = () => {
  return (
    <>
    
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{i18n.t('navbar.list')}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{i18n.t('navbar.list')}</h4></li>
    </div>
    </ul>
    </div>
   <div className={styles.cover}>
    <div className={styles.list}>
    <div className={styles.content}><img src='./images/januery.jpg'/><text></text></div>
    <div className={styles.content}><img src='./images/fabruary.jpg'/></div>
    
    <div className={styles.content}><img src='./images/march.jpg'/></div>
    <div className={styles.content}><img src='./images/april.jpg'/></div>
    <div className={styles.content}><img src='./images/may.jpg'/></div>
    <div className={styles.content}><img src='./images/jun.jpg'/></div>
    <div className={styles.content}><img src='./images/july.jpg'/></div>
    <div className={styles.content}><img src='./images/auguest.jpg'/></div>
    <div className={styles.content}><img src='./images/suptember.jpg'/></div>
    <div className={styles.content}><img src='./images/octomber.jpg'/></div>
    <div className={styles.content}><img src='./images/november.jpg'/></div>
    <div className={styles.content}><img src='./images/december.jpg'/></div>
</div>
</div>
</>
  )
}

export default withTranslation()(List)