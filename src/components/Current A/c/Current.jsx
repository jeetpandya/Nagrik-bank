import React from 'react'
import styles from "./current.module.css";
import { Link } from 'react-router-dom';
import i18n from "i18next";
import { withTranslation } from "react-i18next";
const Current = ({t}) => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1> {i18n.t("navbar.CA")}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/ {i18n.t("navbar.CA")}</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
<div className={styles.info1}>
<h2>{i18n.t('Current.CI')}</h2>
    <div className={styles.info2}>
        <h2>• Rs.2500</h2>
        <div className={styles.info3}>
            <h2>{i18n.t('Current.CRI')}</h2>
            <div className={styles.info4}>
                <h2>0%</h2>

                <div className={styles.info5}>
                    <h2>{i18n.t('Current.CB')}</h2>
                    <div className={styles.info6}>
                    
                            <h2>{i18n.t('Current.CNF')}</h2>
                            <h2>{i18n.t('Current.CFS')}</h2>
                            <h2>{i18n.t('Current.CCB')}</h2>
                            <h2>{i18n.t('Current.CSI')} </h2>
                            <h2>{i18n.t('Current.CAC')}</h2>
                        <div className={styles.info7}>
                            <h2>{i18n.t('Current.CDS')}</h2>
                            <div className={styles.info8}>
                            <h2>{i18n.t('Current.CIL')}</h2>
                                    <h2>{i18n.t('Current.CTP')} </h2>
                                    <h2>{i18n.t('Current.CCA')}</h2>
                                    <h2>{i18n.t('Current.CCP')}</h2>
                                    <h2>{i18n.t('Current.CNI')}</h2>
                                    <h2>{i18n.t('Current.CMSM')}</h2>
                                <div className={styles.info9}>
                                <h2>{i18n.t('Current.CJA')}</h2>
                                        <h2>{i18n.t('Current.CTPC')} </h2>
                                        <h2>{i18n.t('Current.CCC')}</h2>
                                    <h2>{i18n.t('Current.CCPC')}</h2>
                                        <h2>{i18n.t('Current.CNIS')}</h2>
                                        <h2>{i18n.t('Current.CMSM')}</h2>
                                       
                                </div>
                             
                       
                            </div>
                            <div className={styles.info7}>
                            <h2>{i18n.t('Current.CN')}</h2>
                            <div className={styles.info8}>
                               <h2>{i18n.t('Current.CSV')} </h2>

                                   
                            
                            </div>
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

export default Current