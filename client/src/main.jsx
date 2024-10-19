import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './Pages/App.jsx'
import './index.css'

import CountryCodesTable from "./Pages/InfoTables/CountryCodes/CountryCodes.jsx"

function TablesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/tables/CountryCodes" element={<CountryCodesTable />} />
      </Routes>
    </BrowserRouter>
  );
}

// Render home page
createRoot(document.getElementById('root')).render(<TablesRouter />);