import React from 'react';
import Calculator from '../Calculator/Calculator';
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// In your main CSS or JavaScript file
import '@fortawesome/fontawesome-free/css/all.min.css';
import Gallery from '../Gallery/Gallery';
import Downloads from '../Downloads/Downloads';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1 order-1 order-lg-1-md-1" id={styles.left}>
                        <h1>{i18n.t('home.bp')}</h1>
                        <p>{i18n.t('home.bp1')}</p>
                       <img src='./images/maps.png'
                onClick={() => window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1309.081754064973!2d73.50247885044217!3d21.871327298132748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396000d2d2c96261%3A0x28cf93e5401f808a!2sRAJPIPLA%20NAGRIK%20SAHAKARI%20BANK%20LTD!5e0!3m2!1sen!2sin!4v1697369012422!5m2!1sen!2sin', '_blank')}
            />
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2 order-2 order-lg-2" id={styles.middle}>
                        <h2 className="fs-3">{i18n.t('home.add')}</h2>
                        <h6>{i18n.t('home.addr')} </h6>
                        <FontAwesomeIcon icon={faPhone} /><a href="tel:02640-220040">02640-220040</a><br />
                        <FontAwesomeIcon icon={faPhone} /><a href="tel:+91 9909425040">+91 9909425040</a><br />
                        
                        <h4>{i18n.t('home.gst')}</h4>
                        <h5>24AAABT0230D1Z9</h5>
                        <h4>IFSC CODE:</h4>
                        <h5>GSCB0URNSBL</h5>
                      
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3" id={styles.right}>
                        <h3>{i18n.t('home.ql')}</h3>
                        <Link to="/Downloads"> {i18n.t('navbar.downloads')}<br /></Link>
                        <Link to="/Calculator">{i18n.t('navbar.calculator')}<br/></Link>
                        <Link to="/Report"> {i18n.t('navbar.report')}<br /></Link>
                        <Link to="/Gallery">{i18n.t('navbar.gallery')}<br /></Link>
                        <h4>{i18n.t('home.Rno.')}</h4>
                        <h5>13152/49</h5>
                        <h4>R.B.I.lic.no:</h4>
                        <h5>U.B.D.G.J.876P</h5>
                        
                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Footer);
