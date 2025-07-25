// src/App.jsx

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollHero from "./components/ScrollHero";


import Navbar1 from './components/Navbar1';

import SlideMenu from './components/SlideMenu'; 
import KnowMore from './components/KnowMoreSection';
import HeroSection1 from './components/HeroSection1';
import CounterSection from './components/CounterSection';
import WorkSection from './components/WorksSection';
import Banner from './components/BannersSection1';
import Footer from './components/FooterSection1';
import ProjectDummy from './components/projectdetails/projectdummy/ProjectDummy'; // ya agar pura page ho toh uske main component ka import
import AboutMain from './components/about/Aboutmain';
import WorkMain from './components/work/Workmain';

 


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />

      {/* Sticky Navbar */}
      <Navbar1 onMenuClick={() => setIsMenuOpen(true)} />

      {/* Slide-out Menu */}
      <SlideMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Scrollable Content */}
      <div className="pt-0">
        <Routes>
          <Route
            path="/"
            element={
              <>
               
                <HeroSection1 />
                <KnowMore />
                <CounterSection />
                <WorkSection />
                <Banner />
                <Footer />
              </>
            }
          />
          <Route path="/project/:slug" element={<ProjectDummy />} />
          <Route path="/About" element={<AboutMain />} />
          <Route path="/Work" element={<WorkMain />} />
          <Route path="/projects/straps" element={<StrapsDetail />} />
        
          {/* <Route path="/works" element={<ProjectsPage />} /> */}
          
        </Routes>
      </div>
    </>
  );
}
