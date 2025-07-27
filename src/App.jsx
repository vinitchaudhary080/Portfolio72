// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollCard from "./components/ScrollCard";

import Navbar1      from './components/Navbar1';
import SlideMenu    from './components/SlideMenu';
import HeroSection1 from './components/HeroSection1';
import KnowMore     from './components/KnowMoreSection';
import CounterSection from './components/CounterSection';
import WorkSection  from './components/WorksSection';
import Banner       from './components/BannersSection1';
import Footer       from './components/FooterSection1';
import ContactPage  from './components/ContactPage';

import AboutMain    from './components/about/Aboutmain';
// ← corrected import
import WorkMain     from './components/work/Workmain';

import ProjectDummy from './components/projectdetails/projectdummy/ProjectDummy';
import ChartingHqmain from './components/ChartingHQ/Chartinghqmain';
import Alphamain from './components/alpha/Alphamain';
import Ramain from './components/radashboard/Ramain';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />

      <Navbar1 onMenuClick={() => setIsMenuOpen(true)} />
      <SlideMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="pt-0">
        <Routes>
          <Route path="/" element={
            <>
              
               <ScrollCard>
                <HeroSection1 />
               </ScrollCard>
               <ScrollCard>
                <KnowMore />
               </ScrollCard>
               <ScrollCard>
                <CounterSection />
               </ScrollCard>
               <ScrollCard>
                <WorkSection />
               </ScrollCard>
               <ScrollCard>
                <Banner />
               </ScrollCard>
               <ScrollCard>
                <Footer />
               </ScrollCard>
              
            </>
          }/>

          <Route path="/about" element={<AboutMain />} />

          {/* now points at your Workmain.jsx */}
          <Route path="/works" element={<WorkMain />} />

          <Route path="/chartinghq/:slug" element={<ChartingHqmain />} />
          <Route path="/alpha/:slug" element={<Alphamain />} />
          <Route path="/raDashboard/:slug" element={<Ramain />} />

          <Route path="/contact" element={<ContactPage />} />

         
        </Routes>
      </div>
    </>
  );
}
