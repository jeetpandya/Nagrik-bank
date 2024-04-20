  import { useState } from 'react';
  import Navigation from '../Navigation/Navigation';
  import Footer from '../Footer/Footer';
  import MyCarousel from '../Carousel/Carousel';
  import Carousel from 'react-bootstrap/Carousel';
  import Card from '../Cards/Cards';
  import styles from "./home.module.css";
  import { useTranslation, withTranslation } from 'react-i18next';
  import i18n from 'i18next';
  import { useRef, useEffect } from 'react';

 
  function Home({ t }) {

    
    const imageContainerRef = useRef(null);
  
    function closeImage() {
      const imageContainer = imageContainerRef.current;
      imageContainer.style.display = "none";
    }
  
    useEffect(() => {
      document.body.addEventListener("click", (event) => {
        const clickedElement = event.target;
        if (imageContainerRef.current && clickedElement && !imageContainerRef.current.contains(clickedElement)) {
          closeImage();
        }
      });
    }, [imageContainerRef]);
  
    return (
      <>
       
        <div id="imagecontainer" className={styles.imageContainer} ref={imageContainerRef}>
      
            <button className={styles.closebtn}  onClick={closeImage}>Close</button>
            <img src="./images/NEW.png" alt="Opened Image" onClick={closeImage} />
          </div>
        

      <div className={styles.body}>
        
        <MyCarousel/>
        <img src="./images/1.jpg"  style={{
      width: "95%",
      height: "700px",
      margin: "50px auto",
      objectFit:"cover",
      display: "block", // Center horizontally
      borderRadius: "30px",
    }} alt=""   />
    <section className={styles.sect}>
      <div className={styles.text}>
        <header>
      <h2>{i18n.t('home.tb')}</h2>
      <h2>{i18n.t('home.tb1')}</h2>
      </header>
      <div className={styles.info}>
        <div >
        <h4>{i18n.t('navbar.NP')}</h4>
        <p>₹ 33,84,752.12</p>
        </div>
        <div >
        <h4>{i18n.t('navbar.RF')}</h4>
        <p>₹ 4,19,53,569</p>
        </div>
      
      
      
        <div >
        <h4>{i18n.t('navbar.D')}</h4>
        <p>₹ 68,30,26,702</p>
        </div>
      
        <div >
        <h4>{i18n.t('navbar.WC')}</h4>
        <p>₹ 84,71,47,468</p>
        </div>
        <div >
        <h4>{i18n.t('navbar.SC')}</h4>
        <p>₹ 1,03,09,150</p>
        </div>
        <div >
        <h4>{i18n.t('navbar.SH')}</h4>
        <p>12,422</p>
        </div>
        <div>
        <h4>{i18n.t('navbar.LD')}</h4>
        <p>₹ 38,91,92,777</p>
        </div>
      
      </div>
      </div>
      <div className={styles.slides}>
      <Carousel>
        <Carousel.Item>
        <img src="./images/NAGRIK BANK 75 YEAR.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img src="./images/28.jpg" alt="" />
        
        </Carousel.Item>
        <Carousel.Item>
        <img src="./images/29.jpg" alt="" />
          
        </Carousel.Item>
        <Carousel.Item>
        <img src="./images/21.jpg" alt="" />
          
        </Carousel.Item>
        <Carousel.Item>
        <img src="./images/22.jpg" alt="" />
          
        </Carousel.Item>
        <Carousel.Item>
        <img src="./images/3.jpg" alt="" />
          
        </Carousel.Item> <Carousel.Item>
        <img src="./images/24.jpg" alt="" />
          
        </Carousel.Item>
        <Carousel.Item>
        <img src="./images/25.jpg" alt="" />
          
        </Carousel.Item>
        <Carousel.Item>
        <img src="./images/26.jpg" alt="" />
          
        </Carousel.Item>
      </Carousel>
      </div>
    </section >
        <Card/>
        
      </div>
      </>
    );
  }

  export default withTranslation()(Home)
