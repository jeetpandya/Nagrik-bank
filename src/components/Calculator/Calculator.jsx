import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './calculator.module.css';
import i18n from "i18next";
import { withTranslation } from "react-i18next";

const Calculator = () => {  
  const [loanAmount, setLoanAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(1);
  const [duration, setDuration] = useState('year');
  const [emi, setEmi] = useState('');

  const calculateEMI = () => {
    const p = Number(loanAmount);
    const r = Number(interestRate);
    const t = Number(loanTerm);
    const n = duration === 'year' ? t * 12 : t;

    const monthlyInterestRate = r / 12 / 100;
    const emi =
      (p * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -n));

    setEmi(`EMI: ₹${emi.toFixed(2)}`);
  };

  return (
    <section className={styles.image}>
      <div className={styles.h}>
        <ul className={styles.header}>
          <li>
            <h1>Loan Calculator</h1>
          </li>
          <div className={styles.hh}>
            <Link to="/">
              <li>
                <h4>{i18n.t('navbar.home')}</h4>
              </li>
            </Link>
            <li>
              <h4>/Loan Calculator</h4>
            </li>
          </div>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.inputwrapper}>
          <div className={styles.wrapper}>
            <label htmlFor="loanAmount">Loan Amount(₹):</label>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="interestRate">Interest Rate (%):</label>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="loanTerm">Loan Term:</label>
        <div className={styles.timewrapper}>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
          <select
            name="duration"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="year">Year</option>
            <option value="month">Month</option>
          </select>
        </div>
        <div className={styles.result}>
          <button id={styles.btn} onClick={calculateEMI}>Calculate EMI</button>
          <p>{emi}</p>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(Calculator);
