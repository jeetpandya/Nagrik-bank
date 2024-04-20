import React from 'react'
import styles from "./edu.module.css";
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from "react-i18next";
import i18n from "i18next";
const Education = ({t}) => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{i18n.t('Education.ED')}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{i18n.t('Education.ED')}</h4></li>
    </div>
    </ul>
    </div>
    <div class={styles.information}>
            <div class={styles.info4}>
            <h2>{i18n.t('Education.RI')}</h2>

<div class={styles.info5}>
    <h2>{i18n.t('Education.YE')}</h2>


    <div class={styles.info6}>
        
        <div class={styles.info7}>
                <div class={styles.info9}>
                <div class={styles.info15}>
                    <h2>{i18n.t('Education.APP')}</h2>
                </div>
                <div class={styles.info16}>
                <h2>{i18n.t('Education.ID')}</h2>
                    <h2>{i18n.t('Education.PR')}</h2> 
                    <h2>{i18n.t('Education.AR')}</h2> 
                    <h2>{i18n.t('Education.RE')}</h2>
                    <h2>{i18n.t('Education.CE')}</h2>
                    <h2>{i18n.t('Education.FF')}</h2>
                    <h2>{i18n.t('Education.FJ')}</h2>
                    <h2>{i18n.t('Education.FR')}</h2>
                    <h2>{i18n.t('Education.FO')}</h2>
                    <h2>{i18n.t('Education.FI')}</h2>
                    
                </div>
                <div class={styles.info17}> 
                <div class={styles.info19}>
                    <h2>{i18n.t('Education.FD')}</h2>
                </div>
                <div class={styles.info20}>
                    <h2>{i18n.t('Education.FP')}</h2>
                    <h2>{i18n.t('Education.FW')}</h2> 
                    <h2>{i18n.t('Education.FG')}</h2> 
                    <h2>{i18n.t('Education.FB')}</h2>
                </div>
               
            </div>
            <div className={styles.info7}>
            <h2>{i18n.t('Education.FN')}</h2>
                           
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>



    </>
  )
}

export default withTranslation()(Education)