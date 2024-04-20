import React from 'react'
import styles from "./recurring.module.css";
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const Recurring = ({t}) => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{t("navbar.RA")}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{t("navbar.RA")}</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
<div className={styles.info1}>
<h2>{t('Recurring.RIA')}</h2>
    <div className={styles.info2}>
        <h2>• Rs.100</h2>
        <div className={styles.info3}>
            <h2>{t('Recurring.RI')}</h2>
            <div className={styles.info4}>
                <h2>{t('Recurring.RO')}</h2>
                <h2>{t('Recurring.RT')}</h2>
                <h2>{t('Recurring.RTH')}</h2>
                <h2>{t('Recurring.RF')}</h2>
                <h2>{t('Recurring.RFI')}</h2>

                <div className={styles.info5}>
                    <h2>{t('Recurring.RB')}</h2>
                    <div className={styles.info6}>
                        <h2>{t('Recurring.RP')}</h2>
                         
                         
                            <h2>{t('Recurring.RSI')}</h2>
                            <h2>{t('Recurring.RVF')}</h2>
                        <div className={styles.info7}>
                            <h2>{t('Recurring.RDS')}</h2>
                            <div className={styles.info8}>
                               <h2>{t('Recurring.RSAC')}</h2>
                                   
                            
                            </div>
                        </div>
                        
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

export default withTranslation()(Recurring)