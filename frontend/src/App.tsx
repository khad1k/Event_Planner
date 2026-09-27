import './App.css'
import Welcome from './pages/Welcome'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Events from './pages/Events'
import ButtonAppBar from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path='/welcome' element={<Welcome />}/>
          <Route path='/events' element={<Events />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

