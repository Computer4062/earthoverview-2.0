import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './Pages/App.jsx'
import './index.css'

// Downloadables
import CountryCodesDownloadablesPage from "./Pages/Downloadables/CountryCodes/CountryCodes.jsx"
import CurrenciesDownloadablesPage from "./Pages/Downloadables/Currenceis/Currencies.jsx"
import DemonymsDownloadablesPage from "./Pages/Downloadables/Demonyms/Demonyms.jsx"
import TimeZonesDownloadablesPage from "./Pages/Downloadables/TimeZones/TimeZones.jsx"
import LanguagesDownloadablesPage from "./Pages/Downloadables/Languages/Languages.jsx"
import CapitalCitiesDownloadablesPage from "./Pages/Downloadables/CapitalCities/CapitalCities.jsx"
import CountryNamesDownloadablesPage from "./Pages/Downloadables/CountryNames/CountryNames.jsx"

import Credits from "./Pages/Credits/Credits.jsx"

function TablesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/downloadables/countrycodes" element={<CountryCodesDownloadablesPage />} />
        <Route path="/downloadables/currencies" element={<CurrenciesDownloadablesPage />} />
        <Route path="/downloadables/demonyms" element={<DemonymsDownloadablesPage />} />
        <Route path="/downloadables/timezones" element={<TimeZonesDownloadablesPage />} />
        <Route path="/downloadables/officiallanguages" element={<LanguagesDownloadablesPage />} />
        <Route path="/downloadables/capitalcities" element={<CapitalCitiesDownloadablesPage />} />
        <Route path="/downloadables/countries" element={<CountryNamesDownloadablesPage />} />

        <Route path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
}

// Render home page
createRoot(document.getElementById('root')).render(<TablesRouter />);