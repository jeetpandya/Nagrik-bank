import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import styles from "./contact.module.css";
import React from 'react'

 const Contact = () => {
  return (
    <>

    <div className={styles.contact}>
      <div className={styles.left}>
        <div >
      <header>
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      
        </header>
        <div className={styles.form} >
      <div className={styles.buttons}>
        
          <button><a href=" mailto:rajpiplansbl@gmail.com" target="_blank">Via Email</a></button>
          <button><a href="tel:+91 9909425040">Via Call</a></button>
      
      </div>
      
     
      <div className={styles.form_control}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      </div>
      <div className={styles.form_control}>
      <label htmlFor="name">E-mail</label>
      <input type="text" name="name" />
      </div>
      <div className={styles.form_control}>
      <label htmlFor="name">Message</label>
      <input type="text" name="name" />
      </div>
      <div className={styles.buttons}>
        <button>Submit</button>
    </div>
    </div>
      </div>
      </div>
      <div className={styles.right}>
      <img src="./images/Service 24_7-pana 1.svg" alt="" />
      </div>
      
    </div>
    </>
  )
}
export default Contact