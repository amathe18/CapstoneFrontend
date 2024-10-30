import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import './App.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Reviews from './pages/Reviews.jsx'
import Signup from './pages/Signup.jsx'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path ='/reviews' element={ <Reviews />}/>
        <Route path= '/signup' element={<Signup />} />
      </Routes>  
    </BrowserRouter>
    
    </>
  )
}

export default App
