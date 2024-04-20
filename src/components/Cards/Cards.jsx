
import React from 'react';
import styles from './cards.module.css';
import {Link} from "react-router-dom";
import Locker from '../Locker/Locker';
import Report from '../Report/Report';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
function Card({  title }) {
  return (
    <div className={styles.cards}>
        <div className={styles.card}>
      <img src="./images/locker.jpg" alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{i18n.t('home.locker')}</h2>
      <p className={styles.cardDescription}>{i18n.t('home.lockerp')}
</p>
<Link to="/Locker"><button className={styles.Button}>Read more</button></Link>
      </div>
      <div className={styles.card}>
      <img src="./images/solar.jpg" alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{i18n.t('home.solar')}</h2>
      <p className={styles.cardDescription}>{i18n.t('home.solarp')}
      </p>
      <Link to="/Solar"><button className={styles.Button}>Read more</button></Link>
      </div>
      <div className={styles.card}>
      <img src="./images/report.jpg" alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{i18n.t('navbar.report')}</h2>
      <p className={styles.cardDescription}>{i18n.t('home.rep')}</p>
      <Link to="/Report"> <button className={styles.Button}>Read more</button></Link>
      </div>
    </div>
  );
}

export default withTranslation()(Card);
