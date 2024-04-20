import React from 'react'
import styles from "./Vehicleloan.module.css";
import { Link } from 'react-router-dom';
import i18n from "i18next";
import { withTranslation } from "react-i18next";
const Vehicleloan = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{i18n.t('Vehicleloan.VL')} </h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>{i18n.t('navbar.home')}</h4></li></Link><li><h4>/{i18n.t('Vehicleloan.VL')} </h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
        <div className={styles.info3}>
            <h2>{i18n.t('Vehicleloan.VPS')} </h2>
            <div className={styles.info4}>
                <h2>{i18n.t('Vehicleloan.VRI')} 
                </h2>
                <div className={styles.info5}>
                    <h2>{i18n.t('Vehicleloan.VY')} </h2>
                    <div className={styles.info6}>
                        <div className={styles.info7}>
                            <h2>{i18n.t('Vehicleloan.VRIP')} </h2>
                            <div className={styles.info8}>
                                    <h2>{i18n.t('Vehicleloan.VYT')} </h2>
                                <div className={styles.info9}>
                                    <h2>{i18n.t('Vehicleloan.VRIF')} </h2>
                                <div className={styles.info10}>
                                    <h2>{i18n.t('Vehicleloan.VYTH')} </h2>
                                    </div>  
                                    <div className={styles.info9}>
                                    <h2>{i18n.t('Vehicleloan.VRIFT')} </h2>
                                    </div>
                                <div className={styles.info12}>
                                    <h2>{i18n.t('Vehicleloan.VYF')} </h2>
                                    </div>     
                                <div className={styles.info15}>
                                    <h2>{i18n.t('Vehicleloan.VFA')} </h2>
                                </div>
                                <div className={styles.info16}>
                                   
                                    <h2>{i18n.t('Vehicleloan.VCIT')} </h2> 
                                   
                                    <h2>{i18n.t('Vehicleloan.VCD')} </h2>
                                    <h2>{i18n.t('Vehicleloan.VRA')} </h2>
                                    <h2>{i18n.t('Vehicleloan.VPRP')} </h2>
                                    <h2>{i18n.t('Vehicleloan.VBAC')} </h2>
                                    <h2>{i18n.t('Vehicleloan.VCIBL')} </h2>
                                    <h2>{i18n.t('Vehicleloan.VSA')} </h2>
                                </div>
                                <div className={styles.info17}> 
                                <div className={styles.info19}>
                                    <h2>{i18n.t('Vehicleloan.VFG')} </h2>
                                </div>
                                <div className={styles.info20}>
                                    <h2>{i18n.t('Vehicleloan.VP')} </h2>
                                    <h2>{i18n.t('Vehicleloan.VI')} </h2> 
                                    <h2>{i18n.t('Vehicleloan.VRAP')} </h2> 
                                    <h2>{i18n.t('Vehicleloan.VPPT')} </h2>
                                </div>
                               
                            </div>
                            <div className={styles.info7}>
                            <h2>{i18n.t('Vehicleloan.VN')} </h2>
                            
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

export default withTranslation()(Vehicleloan)