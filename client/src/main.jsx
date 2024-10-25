import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './Pages/App.jsx'
import './index.css'

import CountryCodesListPage from "./Pages/Lists/CountryCodes/CountryCodes.jsx"
import CurrenciesListPage from './Pages/Lists/Currencies/Currencies.jsx'

function TablesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/lists/countrycodes" element={<CountryCodesListPage />} />
        <Route path="/lists/currencies" element={<CurrenciesListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Render home page
createRoot(document.getElementById('root')).render(<TablesRouter />);