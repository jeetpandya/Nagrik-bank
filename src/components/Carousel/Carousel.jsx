import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "./carousel.module.css";
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const MyCarousel = () => {
  return (
    <>
<div className={styles.slides}>
<Carousel>
{/* <Carousel.Item>
      <img src="./images/NAGRIC SA.jpg" alt="" />
        
      </Carousel.Item> */}
      <Carousel.Item>
       <img src="./images/banner.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/NAG A copy copy.jpg" alt="" />
      
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/NAG A copy.jpg" alt="" />
        
      </Carousel.Item>
    
    </Carousel>
    </div>
    <div className={styles.image}>
    <div className={styles.images}>
        <img src="/images/bank.jpeg"  alt="" />
        </div>
        <div className={styles.text}>
        <h2>{i18n.t('home.greeting')}</h2>
        <p>{i18n.t('home.para')}</p>
        </div>
        <div className={styles.images}>
        <img src="/images/NAGRIK BANK 75 YEAR.png" alt="" />
        </div>
    </div>
    </>
  )}
  export default withTranslation()(MyCarousel)