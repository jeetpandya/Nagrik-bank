import React from 'react'
import {Link} from "react-router-dom";
import styles from "./founder.module.css"
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';

 const Founder = () =>{
  return (
  <div className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1> {i18n.t('navbar.founder')}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{i18n.t('navbar.founder')}</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
        <div className={styles.photo}>
        <img src="./images/f1.png" alt="" />
       <h5> Late Chandulal Mansukhram Vyas <br></br>
 First president from 1950 to 1956</h5>
        </div>
    <p >
    {i18n.t('navbar.founderp')}


    </p>
    </div>
    <div className={styles.para1}>
    
    <p >
    {i18n.t('navbar.founderp1')}



    </p>
    <div className={styles.photo}>
        <img src="./images/f2.png" alt="" />
       <h5>Late Mangaldas Jagandas Parekh <br></br>
       First Managing Director 1949 to 1976</h5>
        </div>
   
    </div>
    </div>
  )
}

export default withTranslation()(Founder)