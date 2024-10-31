import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Axios from 'axios'
import Navbar from './components/Navbar.jsx'
import './App.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Reviews from './pages/Reviews.jsx'
import Signup from './pages/Signup.jsx'




function App() {
  // const Reviews = () => {

  //   const [clubs, setClubs] = useState

  //   const getClub = () => {
  //       fetch('api/clubs')
  //       .then(res => res.json)
  //       .then(json =>console.log(json))
  //     }

  //     useEffect(()=> {
  //       getClub()
  //     }, [])

     return (
    <>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path ='/reviews' element= {<Reviews />} /> 
        <Route path= '/signup' element={<Signup />} />
      </Routes>  
    </BrowserRouter>
    
    </>
  )
}

export default App
