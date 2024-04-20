import React from "react";
import styles from "./savings.module.css";
import { Link } from "react-router-dom";
import { useTranslation, withTranslation } from "react-i18next";
import i18n from "i18next";
const Savings = ({ t }) => {
  return (
    <>
      <div className={styles.h}>
        <ul className={styles.header}>
          <li>
            <h1>{i18n.t("Savings.SA")}</h1>
          </li>
          <div className={styles.hh}>
            <Link to="/">
              <li>
                <h4>{i18n.t('navbar.home')}</h4>
              </li>
            </Link>
            <li>
              <h4>/{i18n.t("Savings.SA")}</h4>
            </li>
          </div>
        </ul>
      </div>
      <div className={styles.information}>
        <div className={styles.info1}>
          <h2>{i18n.t("Savings.SIF")}</h2>
          <div className={styles.info2}>
            <h2>• Rs.500 | Rs.1000</h2>
            <div className={styles.info3}>
              <h2>{i18n.t("Savings.SRI")}</h2>
              <div className={styles.info4}>
                <h2>• 3%</h2>

                <div className={styles.info5}>
                  <h2>{i18n.t("Savings.SB")}</h2>
                  <div className={styles.info6}>
                    <h2>{i18n.t("Savings.SNEF")}</h2>
                    <h2>{i18n.t("Savings.SFSM")}</h2>
                    <h2>{i18n.t("Savings.SSI")}</h2>
                    <h2>{i18n.t("Savings.SAC")}</h2>
                    <div className={styles.info7}>
                      <h2>{i18n.t("Savings.SDS")}</h2>
                      <div className={styles.info8}>
                        <h2>{i18n.t("Savings.SI")}</h2>
                        <h2>{i18n.t("Savings.STP")} </h2>
                        <h2>{i18n.t("Savings.SCC")}</h2>
                        <h2>{i18n.t("Savings.SCPC")}</h2>
                        <h2>{i18n.t("Savings.SNIC")}</h2>
                        <div className={styles.info9}>
                          <h2>{i18n.t("Savings.SJA")}</h2>
                          <h2>{i18n.t("Savings.STPC")} </h2>
                          <h2>{i18n.t("Savings.SCCE")}</h2>
                          <h2>{i18n.t("Savings.SCPC")}</h2>
                          <h2>{i18n.t("Savings.SNIC")}</h2>
                        </div>
                      </div>
                    </div>
                    <div className={styles.info7}>
                      <h2>{i18n.t("Savings.SN")}</h2>
                      <div className={styles.info8}>
                        <h2>{i18n.t("Savings.SSV")}</h2>
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
  );
};

export default withTranslation()(Savings);
