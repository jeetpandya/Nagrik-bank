
import React from 'react';
import styles from "./report.module.css";
import {Link} from "react-router-dom";
const Report = () => {
  return (
    <>

    <section className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Annual Report</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Annual Report</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.downloads}>
    <div className={styles.report}>
      <h2>Annual Report 2022-2023</h2>
      <a href="/images/Report.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/Report.pdf" target="_blank" download>Download</a>
    </div>
    <div className={styles.report}>
      <h2>Annual Report 2021-2022</h2>
      <a href="/images/pdf/2021 22 aheval.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/2021 22 aheval.pdf" target="_blank" download>Download</a>
    </div>
    <div className={styles.report}>
      <h2>Annual Report 2020-2021</h2>
      <a href="/images/pdf/2020 21 aheval.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/2020 21 aheval.pdf" target="_blank" download>Download</a>
    </div>
    <div className={styles.report}>
      <h2>Annual Report 2019-2020</h2>
      <a href="/images/pdf/2019 20 aheval.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/2019 20 aheval.pdf" target="_blank" download>Download</a>
    </div>
    <div className={styles.report}>
      <h2>Annual Report 2018-2019</h2>
      <a href="/images/pdf/annual report 2019.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/annual report 2019.pdf" target="_blank" download>Download</a>
    </div>
    </div>
   </section>
   </>
  );
}

export default Report