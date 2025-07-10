import React from 'react';
import './App.css';
import Generating1 from './pages/Generating_value/Generating1';
import Page1 from './pages/Stakeholder_engagement/page1'
import Page2 from './pages/Stakeholder_engagement/page2';
import Carousel from './pages/SustainabilitySnapshot/Carousel';
import Excellence from './pages/Delivering_Excellence/Excellence';
import Safeguarding1 from './pages/Safeguarding_Stakeholders/Safeguarding1';
import Sustainable1 from './pages/Sustainable_future/Sustainable1';
import Empowering1 from './pages/Empowering/Empowering1';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home/Home';
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Page1 /> */}
          <Route path='/company' element={<Page2 />}/>
          
          {/* <Carousel />
          <Generating1 />
          <Excellence />
          <Safeguarding1 />
          <Sustainable1 />
          <Empowering1 /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
