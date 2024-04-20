import { useState } from 'react'
import Navigation from './components/Navigation/Navigation';
// import Footer from './components/Footer/Footer';
// import MyCarousel from './components/Carousel/Carousel'
// import Card from './components/Cards/Cards';
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router, Route,Routes,Outlet} from 'react-router-dom';
import Contact  from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import * as React from "react";
import Calendar from './components/Calendar/Calendar';
import * as ReactDOM from "react-dom";
import History from './components/History/History';
import Locker from './components/Locker/Locker';
import Founder  from './components/Founders/Founder';
import Vision from './components/Vision/Vision';
import Deposits from './Deposits/Deposits';
import Financial from './components/Financials/Financial';
import FD from './components/Fixeddeposit/FD';
import Goldloan from './components/Goldloan/Goldloan';
import Vehicleloan from './components/VehicleLoan/Vehicleloan';
import Houseloan from './components/HouseLoan/Houseloan';
import Business from './components/Business loan/business';
import Education from './components/Edcuation loan/Education';
import RTGS from './components/RTGS/RTGS';
import Calculator from './components/Calculator/Calculator';
import Savings from './components/Savings A/c/Savings';
import Current from './components/Current A/c/Current';
import Solar from './components/Solar/Solar';
import Nsckvp from './components/NSCKVP/Nsckvp';
import Recurring from './components/Recurring Desposit/Recurring';
import List from './components/List Of Directors/List';
import LIR from './components/Loan interest rates/LIR';
import Gallery from './components/Gallery/Gallery';
import Report from './components/Report/Report';
import Downloads from './components/Downloads/Downloads';
import Why from './components/WBU/Why';
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n instance
import enTranslation from './components/en.json';
import gujaratiTranslation from './components/gujarati.json';
import Rgallery from './Rajpipla photos/Rgallery';


function App() {
  const { t, i18n } = useTranslation(); 
  const toggleLanguage = () => {
    // Toggle between Gujarati and English
    i18n.changeLanguage(i18n.language === 'English' ? 'Gujarati' : 'Gujarati');
  };
  return (
    <I18nextProvider i18n={i18n}>
       <Router>
        {/* Define your routes */}
       
        <Navigation toggleLanguage={i18n.changeLanguage}/>
        <Routes>
          <Route path="/"  element={<Home t={t} />}  />
          <Route path="/History" element={<History/>}/>
          <Route path="/Founder" element={<Founder/>}/>
          <Route path="/Vision" element={<Vision/>}/>
          <Route path="/List" element={<List/>}/>
          <Route path="/Deposits" element={<Deposits/>}/>
          <Route path="/Savings" element={<Savings/>}/>
          <Route path="/Current" element={<Current/>}/>
          <Route path="/Recurring" element={<Recurring/>}/>
          <Route path="/Goldloan" element={<Goldloan/>}/>
          <Route path="/Vehicleloan" element={<Vehicleloan/>}/>
          <Route path="/Nsckvp" element={<Nsckvp/>}/>
          <Route path="/Houseloan" element={<Houseloan  title={i18n.t("navbar.HL1")} tenure="20 Years" interestrate="11.50%"/>}/>
          <Route path="/Houseloan1" element={<Houseloan  title=  {i18n.t("navbar.HL2")}tenure="20 Years" interestrate="9.5%"/>}/>
          <Route path="/Houseloan2" element={<Houseloan  title=   {i18n.t("navbar.HL3")} tenure="10 Years" interestrate="11%"/>}/>
          <Route path="/Business" element={<Business/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/Solar" element={<Solar/>}/>
          <Route path="/FD" element={<FD/>}/>
          <Route path="/LIR" element={<LIR/>}/>
          <Route path="/Contact"  element={<Contact/>} />
          <Route path="/Locker"  element={<Locker/>} />
          <Route path="/Financial"  element={<Financial/>} />
          <Route path="/RTGS"  element={<RTGS/>} />
          <Route path="/Gallery"  element={<Gallery/>} />
          <Route path="/Rgallery"  element={<Rgallery/>} />
          <Route path="/Calculator"  element={<Calculator/>} />
          <Route path="/Calendar"  element={<Calendar/>} />
          <Route path="/Report"  element={<Report/>} />
          <Route path="/Downloads"  element={<Downloads/>} />
          <Route path="/Why"  element={<Why/>} />
        </Routes>
        <Footer/>
        <Outlet/>
    </Router>
    </I18nextProvider>
  )
}

export default App
