import React from 'react'
import styles from "./nsckvp.module.css";
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const Nsckvp = ({t}) => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{i18n.t("navbar.NS")}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{i18n.t("navbar.NS")}</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
            <div className={styles.info4}>
            <h2>{i18n.t('Nsckvp.NR')}</h2>

<div className={styles.info5}>
    <h2>• 12%</h2>

    <div className={styles.info6}>
        <h2>{i18n.t('Nsckvp.NRI')}</h2>
    </div>
        <div className={styles.info7}>
            <h2>• 14%</h2>
        </div>
    <div className={styles.info6}>
        
        <div className={styles.info7}>
                <div className={styles.info9}>
                <div className={styles.info15}>
                    <h2>{i18n.t('Nsckvp.NFA')}</h2>
                </div>
                <div className={styles.info16}>
                    
                    <h2>{i18n.t('Nsckvp.NSAC')}</h2>
                                </div>
                                <div className={styles.info17}> 
                               
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

export default Nsckvp