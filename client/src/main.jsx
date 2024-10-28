import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './Pages/App.jsx'
import './index.css'

// Downloadables
import CountryCodesListPage from "./Pages/Downloadables/CountryCodes/CountryCodes.jsx"
import CurrenciesListPage from "./Pages/Downloadables/Currenceis/Currencies.jsx"
import DemonymsListPage from "./Pages/Downloadables/Demonyms/Demonyms.jsx"
import TimeZonesListPage from "./Pages/Downloadables/TimeZones/TimeZones.jsx"
import LanguagesListPage from "./Pages/Downloadables/Languages/Languages.jsx"
import CapitalCitiesListPage from "./Pages/Downloadables/CapitalCities/CapitalCities.jsx"

import Credits from "./Pages/Credits/Credits.jsx"

function TablesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/downloadables/countrycodes" element={<CountryCodesListPage />} />
        <Route path="/downloadables/currencies" element={<CurrenciesListPage />} />
        <Route path="/downloadables/demonyms" element={<DemonymsListPage />} />
        <Route path="/downloadables/timezones" element={<TimeZonesListPage />} />
        <Route path="/downloadables/officiallanguages" element={<LanguagesListPage />} />
        <Route path="/downloadables/capitalcities" element={<CapitalCitiesListPage />} />

        <Route path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
}

// Render home page
createRoot(document.getElementById('root')).render(<TablesRouter />);