import React from 'react'
import styles from "./houseloan.module.css";
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const Houseloan = (props ,{t}) => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{props.title} </h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Home Loan </h4></li>
    </div>
    </ul>
    </div>
    
    <div className={styles.information}>
    <div className={styles.info1}>
    <h2>{i18n.t('Houseloan.HE')}</h2>
        <div className={styles.info2}>
          
            <div className={styles.info3}>
                <h2>{i18n.t('Houseloan.HP')}</h2>
                <div className={styles.info4}>
                    <h2>{i18n.t('Houseloan.HR')}</h2>

                    <div className={styles.info5}>
                        <h2>{props.tenure} - {props.interestrate}</h2>
                        <div className={styles.info6}>
                            <h2>{i18n.t('Houseloan.HI')}</h2>
                            <div className={styles.info7}>
                                <h2>{i18n.t('Houseloan.HC')}</h2>
                                <div className={styles.info8}>
                                        <h2>{i18n.t('Houseloan.HL')}</h2>
                                       
                                  
                                    <div className={styles.info13}>
                                        <h2>{i18n.t('Houseloan.HH')}</h2>
                                    </div>
                                    <div className={styles.info14}>
                                    <h2>{i18n.t('Houseloan.HA')}.</h2>
                                    </div>
                                    <div className={styles.info15}>
                                        <h2>{i18n.t('Houseloan.HF')}</h2>
                                    </div>
                                    <div className={styles.info16}>
                                    <h2>{i18n.t('Houseloan.HPP')}</h2>
                                    <h2>{i18n.t('Houseloan.HCC')}</h2> 
                                    <h2>{i18n.t('Houseloan.HPC')}</h2> 
                                    <h2>{i18n.t('Houseloan.HIPC')}</h2>
                                    <h2>{i18n.t('Houseloan.HKYC')}</h2>
                                    <h2>{i18n.t('Houseloan.HSP')}</h2>
                                    
                                    <h2>{i18n.t('Houseloan.HLC')}</h2>
                                    <h2>{i18n.t('Houseloan.HAA')} </h2>
                                    <h2>{i18n.t('Houseloan.HGP')}</h2>
                                    <h2>{i18n.t('Houseloan.HGI')}</h2>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={styles.info7}>
                            <h2>{i18n.t('Houseloan.HNN')}</h2>
                            <div className={styles.info8}>
                               <h2>{i18n.t('Houseloan.HSTV')}</h2>
                                   
                            
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

export default withTranslation()(Houseloan)