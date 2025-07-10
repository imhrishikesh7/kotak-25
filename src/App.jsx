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
import About from './pages/About';
import BOD from './pages/BOD';
import AshokMessage from './pages/AshokMessage';
import BusinessOverview from './pages/BusinessOverview';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/bod" element={<BOD />} />
        <Route path="/ashok-message" element={<AshokMessage />} />
        <Route path="/company" element={<BusinessOverview />} />

        {/* Stakeholder Engagement */}
        <Route path="/stakeholder-engagement/page1" element={<Page1 />} />
        <Route path="/stakeholder-engagement/page2" element={<Page2 />} />

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
    </Router>
  );
}

export default App;
