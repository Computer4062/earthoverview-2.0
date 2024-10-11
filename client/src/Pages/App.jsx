import './App.css'

import HackerButton from "../Components/Buttons/HackerButton.jsx"
import NavBar from "../Components/NavBar/NavBar.jsx"

import telephoneIcon from '../Assets/images/home/telephone icon.png'
import moneyIcon from '../Assets/images/home/money-bag.png'
import demonymsIcon from '../Assets/images/home/people.png'
import alarmIcon from '../Assets/images/home/alarm.png'
import bookIcon from '../Assets/images/home/book.png'
import flagIcon from '../Assets/images/home/flag.png'
import skyscraperIcon from '../Assets/images/home/skyscraper.png'

// Redirect to a different URL when an icon is pressed
function redirectTo(location){
  window.location = `/Countries/${location}`;
}

// Icon array movement function
let images = [telephoneIcon, moneyIcon, demonymsIcon, alarmIcon, bookIcon, flagIcon, skyscraperIcon];
let labels = ["Country Codes", "Currencies", "Demonyms", "Time Conversions", "Languages", "Country Flags", "Capital Cities"];

function TableIconCards({img, text}){
  return (
    <div className="table-icon-card">
      <img width="50" height="50" src={img} />
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />

      <div className="title-section container">
        <div>
          <h1>EarthOverView</h1>
          <p>Providing information about countries...</p>

          <div className="title-btn-array">
            <HackerButton text="CSV file Generator" width="200px" height="45px" borderRadius="3px" />
            <HackerButton text="API" width="200px" height="45px" borderRadius="3px" />
          </div>
        </div>

        <div id="Earth"></div>
      </div>

      <div className="table-gen-section container">
        <h1 className="inv-title">Generate CSV files</h1>
        <p>Generate CSV files containing information about country standards...</p>
        <hr className="divider" />

        <div className="icons-gallery">
            <TableIconCards img={images[0]} text={labels[0]} />
            <TableIconCards img={images[1]} text={labels[1]} />
            <TableIconCards img={images[2]} text={labels[2]} />
            <TableIconCards img={images[3]} text={labels[3]} />
            <TableIconCards img={images[4]} text={labels[4]} />
            <TableIconCards img={images[5]} text={labels[5]} />
            <TableIconCards img={images[6]} text={labels[6]} />
        </div>
      </div>

      <div className="api-section container">
        <div className="api-info">
          <h1 className="inv-title">EarthOverView API</h1>
          <p>Providing information about countries through an API interface...</p>
        </div>

        <HackerButton text="Read DOCS" width="200px" height="45px" borderRadius="3px" />
      </div>
    </div>
  );
}

export default App
