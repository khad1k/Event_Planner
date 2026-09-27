import './App.css'
import Welcome from './pages/Welcome'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/Welcome' element={<Welcome />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

