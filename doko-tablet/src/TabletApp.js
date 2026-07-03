// src/tablet/TabletApp.js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Comp./Welcome'
import Form from './Comp./Form'
import Confirm from './Comp./Confirm'
import termsText from './Comp./Terms'
import FencingLog from './Comp./FencingLog'
import KarateLog from './Comp./KarateLog'

export default function TabletApp() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form" element={<Form />} />
          <Route path="/confirm" element={<Confirm />} />
           <Route path="/terms" element={<termsText />} /> 
          <Route path="/fencing-log" element={<FencingLog />} />
          <Route path="/karate-log" element={<KarateLog />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
