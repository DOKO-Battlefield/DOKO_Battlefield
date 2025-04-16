// src/tablet/TabletApp.js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Form from './Form'
import Confirm from './Confirm'

export default function TabletApp() {
  return (
    <BrowserRouter basename="/tablet">
      <div className="bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form" element={<Form />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
