// src/App.jsx

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import KnowmMore from './components/KnowMoreSection'
import HeroSection1 from './components/HeroSection1'
import CounterSection from './components/CounterSection'
import WorkSection from './components/WorksSection'
import Footer from './components/FooterSection1'
import TrustedSection from './components/TrustedSection'
import FeatureSection from './components/FeaturedSection'
import Feature2Section from './components/Featured2Section'
import Feature3Section from './components/Featured3Section'
import Feature4Section from './components/Featured4Section'
import StayInfoSection from './components/StayInfoSection'
import TestinomailsSection from './components/TestimonialsSection'
import Pricing from './components/PricingSection'
import FAQS from './components/FAQSection'
import Banners from './components/BannersSection'
import Banner from './components/BannersSection1'
import FooterSection from './components/FooterSection'  // sirf ek baar import

import Terms from './components/Terms'
import Privacy from './components/Privacy'
import ContactFormModal from './components/ContactFormModal'

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <ScrollToTop />

      {isFormOpen && (
        <ContactFormModal onClose={() => setIsFormOpen(false)} />
      )}

      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>

              <Navbar1 />
              <HeroSection1 />
              <KnowmMore />
              <CounterSection />
              <WorkSection />
              <Banner />
              <Footer />
              <TrustedSection />
              <FeatureSection />
              <Feature2Section />
              <Feature3Section />
              <Feature4Section />
              <StayInfoSection />
              <TestinomailsSection />
              {/* <Pricing /> */}
              <FAQS />
              <Banners />
              <FooterSection onGetInTouch={() => setIsFormOpen(true)} />
            </>
          }
        />

        {/* Terms & Conditions */}
        <Route
          path="/terms"
          element={
            <>
              <Navbar />
              <Terms />
              <FooterSection />
            </>
          }
        />

        {/* Privacy Policy */}
        <Route
          path="/privacy"
          element={
            <>
              <Navbar />
              <Privacy />
              <FooterSection />
            </>
          }
        />
      </Routes>
    </>
  )
}
