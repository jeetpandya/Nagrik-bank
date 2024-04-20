import React from 'react'
import styles from "./business.module.css";
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const Business = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Business Loan</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/Business Loan</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
        <div className={styles.info3}>
           
        <div className={styles.info4}>
                <h2>{i18n.t('business.RI')}</h2>

                <div className={styles.info5}>
                    <h2>{i18n.t('business.Ye')}</h2>
                    <div className={styles.info6}>
                        
                        <div className={styles.info7}>
                                <div className={styles.info9}>
                                <div className={styles.info15}>
                                    <h2>{i18n.t('business.FA')}</h2>
                                </div>
                                <div className={styles.info16}>
                                <h2>{i18n.t('business.MSM')}</h2>
                                <h2>{i18n.t('business.CI')}</h2> 
                                    <h2>{i18n.t('business.VR')}</h2> 
                                    <h2>{i18n.t('business.TP')}</h2>
                                    <h2>{i18n.t('business.BI')}</h2>
                                    <h2>{i18n.t('business.AC')}</h2>
                                </div>
                                <div className={styles.info17}> 
                                <div className={styles.info19}>
                                    <h2>{i18n.t('business.G')}</h2>
                                </div>
                                <div className={styles.info20}>
                                <h2>{i18n.t('business.F')}</h2>
                                <h2>{i18n.t('business.ITR')}</h2> 
                                  <h2>{i18n.t('business.AC')}</h2>
                                </div>
                              
                            </div>
                            <div className={styles.info7}>
                            <h2>{i18n.t('business.NO')}</h2>
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

export default withTranslation()(Business)