import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import Generating1 from './pages/Generating_value/Generating1';
import Page1 from './pages/Stakeholder_engagement/page1';
import Page2 from './pages/Stakeholder_engagement/page2';
import Carousel from './pages/SustainabilitySnapshot/Carousel';
import Excellence from './pages/Delivering_Excellence/Excellence';
import Safeguarding1 from './pages/Safeguarding_Stakeholders/Safeguarding1';
import Sustainable1 from './pages/Sustainable_future/Sustainable1';
import Empowering1 from './pages/Empowering/Empowering1';
// import About from './pages/About';
import BOD from './pages/BOD';
import AshokMessage from './pages/AshokMessage';
import BusinessOverview from './pages/BusinessOverview';
import Navbar from './Components/Navbar';
import Home from './pages/Home/Home';
import Footer from './Components/Footer';
import Technology from './pages/Technology';
import DigitalPowerhouse from './pages/DigitalPowerhouse';
import Talent from './pages/Talent';
import ScrollToTop from './Components/ScrollToTop';
import KPI from './Components/Home/KPI';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<About />} /> */}
        <Route path="/board-of-directors" element={<BOD />} />
        <Route path="/message-from-ashok-vaswani" element={<AshokMessage />} />
        <Route path="/business-overview" element={<BusinessOverview />} />\
        <Route path="/technology" element={<Technology/>} />
        <Route path="/digital" element={<DigitalPowerhouse/>} />
        <Route path="/talent" element={<Talent/>} />

        {/* Stakeholder Engagement */}
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/our-enablers/key-performance-indicators" element={<KPI />} />

        {/* Snapshot */}
        <Route path="/analytics/overview" element={<Carousel />} />
        <Route path="/analytics/transactions" element={<Carousel />} />
        <Route path="/analytics/reports" element={<Carousel />} />

        {/* Excellence */}
        <Route path="/generating-value" element={<Generating1 />} />
        <Route path="/delivering-excellence" element={<Excellence />} />
        <Route path="/safeguarding-stakeholders" element={<Safeguarding1 />} />
        <Route path="/sustainable-future" element={<Sustainable1 />} />
        <Route path="/empowering" element={<Empowering1 />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
