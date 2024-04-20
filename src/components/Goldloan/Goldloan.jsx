import React from 'react'
import styles from "./goldloan.module.css";
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from "react-i18next";
import i18n from "i18next";
const Goldloan = ({t}) => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
      <li><h1>{i18n.t("Goldloan.LA")}</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Loan against gold</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
<div className={styles.info1}>
    <h2>{i18n.t("Goldloan.LD")}</h2>
    <div className={styles.info2}>
        <h2>{i18n.t("Goldloan.LM")}</h2>
        <h2>{i18n.t("Goldloan.LN")}</h2>
        <div className={styles.info3}>
            <h2>{i18n.t("Goldloan.LP")}</h2>
            <div className={styles.info4}>
                <h2>{i18n.t("Goldloan.LR")}</h2>

                
                            </div>
                            <div className={styles.info4}>
                <h2>{i18n.t("Goldloan.LS")}</h2>
                
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
    </>
  )
}

export default withTranslation()(Goldloan)