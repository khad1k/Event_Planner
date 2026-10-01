import './App.css'
import Welcome from './pages/Welcome'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Events from './pages/Events'
import ButtonAppBar from './components/Header'
import Review from './pages/Reviews'
import OtherPlans from './pages/OtherPlans'
import Login from './pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path='/' element={<Welcome />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/other_plans' element={<OtherPlans />}/>
          <Route path='/reviews' element={<Review />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

