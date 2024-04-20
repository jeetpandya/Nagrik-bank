import React from 'react'
import styles from "./solar.module.css";
import { Link } from 'react-router-dom';
import i18n from "i18next";
import { withTranslation } from "react-i18next";
const Solar = ({t}) => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>  {i18n.t("navbar.SL")}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/  {i18n.t("navbar.SL")}</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
            <div className={styles.info4}>
            <h2>{i18n.t('Solar.SRI')}</h2>

<div className={styles.info5}>
    <h2>{i18n.t('Solar.SY')}</h2>
    <div className={styles.info6}>
        
        <div className={styles.info7}>
                <div className={styles.info9}>
                <div className={styles.info15}>
                <h2>{i18n.t('Solar.SFA')}</h2>
                </div>
                <div className={styles.info16}>
                   
                    <h2>{i18n.t('Solar.SCIR')}</h2> 
                   
                    <h2>{i18n.t('Solar.SEB')}</h2>
                    <h2>{i18n.t('Solar.SRAP')}</h2>
                    <h2>{i18n.t('Solar.SPRF')}</h2>
                    <h2>{i18n.t('Solar.SBSL')}</h2>
                    <h2>{i18n.t('Solar.SAC')}</h2>
                    <h2>{i18n.t('Solar.SQ')}</h2>
                </div>
                <div className={styles.info17}> 
                <div className={styles.info19}>
                    <h2>{i18n.t('Solar.SFG')}</h2>
                </div>
                <div className={styles.info20}>
                    <h2>{i18n.t('Solar.SP')}</h2>
                    <h2>{i18n.t('Solar.SIP')}</h2> 
                    <h2>{i18n.t('Solar.SRAP')}</h2> 
                    <h2>{i18n.t('Solar.SPRP')}</h2>
                </div>
            </div>
            <div className={styles.info7}>
            <h2>{i18n.t('Solar.SNS')}</h2>
                            
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

export default withTranslation()(Solar)