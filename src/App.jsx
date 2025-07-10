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
import About from './pages/About';
import BOD from './pages/BOD';
import AshokMessage from './pages/AshokMessage';
import BusinessOverview from './pages/BusinessOverview';
function App() {


  return (
    <>
    <About/>
    <BOD/>
    <AshokMessage/>
    <BusinessOverview/>
     <Page1/>
     <Page2/>
     <Carousel/>
     <Generating1/>
     <Excellence/>
     <Safeguarding1/>
     <Sustainable1/>
     <Empowering1/>
    </>
  )
}

export default App
