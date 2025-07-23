// src/App.jsx

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Navbar1 from './components/Navbar1'
import KnowMore from './components/KnowMoreSection'
import HeroSection1 from './components/HeroSection1'
import CounterSection from './components/CounterSection'
import WorkSection from './components/WorksSection'
import Banner from './components/BannersSection1'
import Footer from './components/FooterSection1'

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar1 />
              <HeroSection1 />
              <KnowMore />
              <CounterSection />
              <WorkSection />
              <Banner />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}
