import React from "react";
import styles from "./downloads.module.css";
import { Link } from "react-router-dom";
import { useTranslation, withTranslation } from "react-i18next";
import i18n from "i18next";
const Downloads = ({ t }) => {
  return (
    <>
      <section className={styles.image}>
        <div className={styles.h}>
          <ul className={styles.header}>
            <li>
              <h1> {t("navbar.downloads")}</h1>
            </li>
            <div className={styles.hh}>
              <Link to="/">
                <li>
                  <h4>{i18n.t("navbar.home")}</h4>
                </li>
              </Link>
              <li>
                <h4>/ {t("navbar.downloads")}</h4>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.downloads}>
          <div className={styles.report}>
            <h2 className={styles.topic}>
              {i18n.t("Downloads.Savings A/c form")}
            </h2>
            <div className={styles.links}>
              <a
                href="/images/account opning form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n.t("Downloads.View PDF")}
              </a>
              <a
                href="/images/account opning form.pdf"
                target="_blank"
                download
              >
                {" "}
                {t("Downloads.D")}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{i18n.t("Downloads.CA")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/account opning form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Downloads.View PDF")}
              </a>
              <a
                href="/images/account opning form.pdf"
                target="_blank"
                download
              >
                {t("Downloads.D")}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{i18n.t("Downloads.RA")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/account opning form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n.t("Downloads.View PDF")}
              </a>
              <a
                href="/images/account opning form.pdf"
                target="_blank"
                download
              >
                {i18n.t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{t("Downloads.Ac")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/account closing form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Downloads.View PDF")}
              </a>
              <a
                href="/images/account closing form.pdf"
                target="_blank"
                download
              >
                {i18n.t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{i18n.t("Downloads.Cv")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/cash vidroal form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n.t("Downloads.View PDF")}
              </a>
              <a href="/images/cash vidroal form.pdf" target="_blank" download>
                {t("Downloads.D")}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>CO/CC/OF/HYP</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/CO  CC  OF  HYP.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n.t("Downloads.View PDF")}
              </a>
              <a href="/images/CO  CC  OF  HYP.pdf" target="_blank" download>
                {t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2> {i18n.t("Downloads.Gl")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/gold loan form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n.t("Downloads.View PDF")}
              </a>
              <a href="/images/gold loan form.pdf" target="_blank" download>
                {t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{t("Downloads.Hl")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/home loan, business loan and cash cradit form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Downloads.View PDF")}
              </a>
              <a
                href="/images/home loan, business loan and cash cradit form.pdf"
                target="_blank"
                download
              >
                {t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{t("Downloads.CC")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/home loan, business loan and cash cradit form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Downloads.View PDF")}
              </a>
              <a
                href="/images/home loan, business loan and cash cradit form.pdf"
                target="_blank"
                download
              >
                {t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{i18n.t("Downloads.Ky")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/kyc form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Downloads.View PDF")}
              </a>
              <a href="/images/kyc form.pdf" target="_blank" download>
                {t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{t("Downloads.SB")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/reciving slip SB  CA  RD.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n.t("Downloads.View PDF")}
              </a>
              <a
                href="/images/reciving slip SB  CA  RD.pdf"
                target="_blank"
                download
              >
                {i18n.t("Downloads.D")}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{i18n.t("Downloads.RT")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/rtgs neft form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Downloads.View PDF")}
              </a>
              <a href="/images/rtgs neft form.pdf" target="_blank" download>
                {t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{t("Downloads.SP")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/share purchase form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Downloads.View PDF")}
              </a>
              <a
                href="/images/share purchase form.pdf"
                target="_blank"
                download
              >
                {t("Downloads.D")}{" "}
              </a>
            </div>
          </div>

          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{t("Downloads.CS")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/form for changos in share.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n.t("Downloads.View PDF")}
              </a>
              <a
                href="/images/form for changos in share.pdf"
                target="_blank"
                download
              >
                {i18n.t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
          <div className={styles.report}>
            <div className={styles.topic}>
              <h2>{i18n.t("Downloads.LF")}</h2>
            </div>
            <div className={styles.links}>
              <a
                href="/images/locar aggriment.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18n.t("Downloads.View PDF")}
              </a>
              <a href="/images/locar aggriment.pdf" target="_blank" download>
                {i18n.t("Downloads.D")}{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withTranslation()(Downloads);
