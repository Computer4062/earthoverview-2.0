import React from "react"

import './App.css'

import HackerButton from "../Components/Buttons/HackerButton.jsx"
import NavBar from "../Components/NavBar/NavBar.jsx"
import Footer from "../Components/Footer/Footer.jsx"

import telephoneIcon from "../../public/Images/home/telephone-icon.png"
import moneyIcon from '../../public/Images/home/money-bag.png'
import demonymsIcon from '../../public/Images/home/people.png'
import alarmIcon from '../../public/Images/home/alarm.png'
import bookIcon from '../../public/Images/home/book.png'
import skyscraperIcon from '../../public/Images/home/skyscraper.png'
import countriesIcon from '../../public/Images/home/countries.png'
import countryFlagsIcon from '../../public/Images/home/flag.png'
import isoCodesIcon from "../../public/Images/home/isocodes.png"

function TableIconCards({img, text, href}){
  return (
    <div className="table-icon-card" onClick={() => window.location=href}>
      <img width="50" height="50" src={img} />
      <p>{text}</p>
    </div>
  );
}

const scrollToDownloadables = () => {
  const element = document.getElementById("downloadables-section-breaker");
  element.scrollIntoView({ behavior: 'smooth' });
}

function App() {
  return (
    <div>
      <NavBar />

      <div className="title-section container">
        <div>
          <h1>EarthOverView</h1>
          <p>Providing information about countries...</p>

          <div className="title-btn-array mt-4">
            <HackerButton text="Downloadables" width="200px" height="45px" borderRadius="3px" onClick={scrollToDownloadables} />
            <HackerButton text="API" width="200px" height="45px" borderRadius="3px" onClick={() => window.location.href="https://rapidapi.com/user/mihanedirisinghe"} />
          </div>
        </div>

        <div id="Earth"></div>
      </div>

      <div id="downloadables-section-breaker"></div>

      <div className="table-gen-section container mt-5">
        <h1 className="inv-title">Downloadables</h1>
        <p>Download CSV files containing information about country standards...</p>
        <hr className="divider" />
        
        <div className="icons-gallery">
            <TableIconCards img={telephoneIcon} text="Country Codes" href="/downloadables/countrycodes" />
            <TableIconCards img={moneyIcon} text="Currencies" href="/downloadables/currencies"/>
            <TableIconCards img={demonymsIcon} text="Demonyms" href="/downloadables/demonyms"/>
            <TableIconCards img={alarmIcon} text="Time Zones" href="/downloadables/timezones"/>
            <TableIconCards img={bookIcon} text="Official Languages" href="/downloadables/officiallanguages"/>
            <TableIconCards img={skyscraperIcon} text="Capital Cities" href="/downloadables/capitalcities"/>
            <TableIconCards img={countriesIcon} text="Country Names" href="/downloadables/countries"/>
            <TableIconCards img={countryFlagsIcon} text="Country Flags" href="/downloadables/countryflags"/>
            <TableIconCards img={isoCodesIcon} text="ISO Country Codes" href="/downloadables/isocodes"/>
        </div>
      </div>

      <div className="api-section container">
        <div className="api-info">
          <h1 className="inv-title">EarthOverView API</h1>
          <p>Providing information about countries through an API interface...</p>
        </div>

        <HackerButton 
          text="Read DOCS" 
          width="200px" height="45px" 
          borderRadius="3px" 
          onClick={() => window.location.href="https://rapidapi.com/user/mihanedirisinghe"} 
        />
      </div>

      <Footer />
    </div>
  );
}

export default App