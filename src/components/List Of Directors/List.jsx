import React from 'react'
import {Link} from "react-router-dom";
import styles from "./list.module.css";
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
    <div className={styles.content}><img src='./images/AMIT GANDHI(Chairman).png'/><text><h3>AMIT GANDHI</h3><p>Chairman</p><p>9879957305</p></text></div>
    <div className={styles.content}><img src='./images/HARISH GANDHI.png'/><h3>HARISH GANDHI</h3><p>Vice Chairman</p><p>9428322939</p></div>
    
    <div className={styles.content}><img src='./images/NIKHILBHAI MAHETA.png'/><h3>DR. NIKHILBHAI MEHTA</h3><p>Director</p><p>9879610168</p></div>
    <div className={styles.content}><img src='./images/SAMIR MAHETA.png'/><h3>DR. SAMIR MEHTA</h3><p>Director</p><p>8806106299</p></div>
    <div className={styles.content}><img src='./images/TEJASH GANDHI.png'/><h3>TEJASH GANDHI</h3><p>Director</p><p>9586895999</p></div>
    <div className={styles.content}><img src='./images/MANHAR MALI.png'/><h3>MANHAR MALI</h3><p>Director</p><p>9427332032</p></div>
    <div className={styles.content}><img src='./images/DHARMESHBHAI.png'/><h3>DHARMESH PANDYA</h3><p>Director</p><p>9825676829</p></div>
    <div className={styles.content}><img src='./images/PADMKANTBHAI.png'/><h3>PADMKANT KACHIYA</h3><p>Director</p><p>9726118166</p></div>
    <div className={styles.content}><img src='./images/NAISHDH PARMAR.png'/><h3>DR. NAISHDH PARMAR</h3><p>Director</p><p>9825048683</p></div>
    <div className={styles.content}><img src='./images/JIGNASHABEN PATEL(VC).png'/><h3>JIGNASHABEN PATEL</h3><p>Director</p><p>7016747551</p></div>
    <div className={styles.content}><img src='./images/KALPANABEN.png'/><h3>KALPANABEN KA.PATEL</h3><p>Director</p><p>7367468404</p></div>
    <div className={styles.content}><img src='./images/ASHWINABEN SHUKLA.png'/><h3>ASHWINABEN VYAS</h3><p>Director(Proffesional Co-op)</p><p>9825650031</p></div>
</div>
</div>
</>
  )
}

export default withTranslation()(List)