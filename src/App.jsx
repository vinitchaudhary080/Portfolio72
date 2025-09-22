// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollCard from "./components/ScrollCard";

import Navbar1      from './components/Navbar1';
import SlideMenu    from './components/SlideMenu';
import HeroSection1 from './components/HeroSection1';
import HeroSection  from './components/HeroSection';
import KnowMore     from './components/KnowMoreSection';
import Design     from './components/about/DesignPhilosophy'; 
import TeamPhotocase from './components/TeamPhoto';

import CounterSection from './components/CounterSection';
import WorkSection  from './components/WorksSection';
import Banner       from './components/BannersSection1';
import Footer       from './components/FooterSection1';
import ContactPage  from './components/ContactPage';
import Try          from './components/Try';

import AboutMain    from './components/about/Aboutmain';
import WorkMain     from './components/work/Workmain';
import ProvidedSection from './components/ProvidedSection';

import ChartingHqmain   from './components/ChartingHQ/Chartinghqmain';
import Alphamain        from './components/alpha/Alphamain';
import Ramain           from './components/radashboard/Ramain';
import Algomain         from './components/algorooms/Algomain';
import Alphaappmain     from './components/alphaapp/Alphaappmain';
import Nestohubmain     from './components/nestohub/Nestohubmain';
import Cribonixmain     from './components/cribonix/Cribonixmain';
import Copartnerappmain from './components/copartnerapp/Copartnerappmain';
import Budgettreemain   from './components/budgettree/Budgettreemain';
import Bepromain        from './components/bepro/Bepromain';
import Investockmain    from './components/investock/Investockmain';
import Cryptomatymain        from './components/cryptomaty/Cryptomatymain';
import Page             from './components/page';


import { LampDemo } from "./components/lamp-demo";

// ✅ React 19 metadata component (no helmet needed)
import SEO19, { personSchema, websiteSchema, breadcrumb } from "./components/SEO19";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FAQs for rich results on Contact
  const contactFAQ = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {
        "@type":"Question",
        "name":"What services do you deliver?",
        "acceptedAnswer":{"@type":"Answer","text":"User flows, wireframes, UI, interactive prototypes, design systems, and dev-ready handoff with states."}
      },
      {
        "@type":"Question",
        "name":"How quickly can you start?",
        "acceptedAnswer":{"@type":"Answer","text":"Typically within 48 hours after scope and first sprint planning."}
      },
      {
        "@type":"Question",
        "name":"Which industries do you specialize in?",
        "acceptedAnswer":{"@type":"Answer","text":"Fintech/trading, SaaS, and sports—focused on task-first flows and measurable product outcomes."}
      }
    ]
  };

  return (
    <>
      <ScrollToTop />

      <Navbar1 onMenuClick={() => setIsMenuOpen(true)} />
      <SlideMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="pt-0">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <SEO19
                  path="/"
                  title=" Vinit Chaudhary | UX/UI Designer in India | App & Web Design "
                  description="Research-driven UX/UI for apps, websites & design systems. See case studies & hire me."
                  ogImage="/og-cover.png"
                  schema={[personSchema, websiteSchema]}
                />

                <ScrollCard>
                  <Try />
                </ScrollCard>

                {/* <ScrollCard>
                  <HeroSection />
                </ScrollCard> */}

                <ScrollCard>
                  <KnowMore />
                </ScrollCard>

                <ScrollCard>
                  <CounterSection />
                </ScrollCard>

                <Design />
                <TeamPhotocase />

                <ScrollCard>
                  <ProvidedSection />
                </ScrollCard>

                <ScrollCard>
                  <WorkSection />
                </ScrollCard>

                <LampDemo />

                <ScrollCard>
                  <Footer />
                </ScrollCard>
              </>
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <>
                <SEO19
                  path="/about"
                  title="About — UX/UI Designer | Vinit Chaudhary"
                  description="About Vinit Chaudhary — Senior UX/UI Designer & Team Lead. Fintech/trading app specialist. Process-first, research-driven design."
                  schema={[
                    breadcrumb([
                      { name:"Home", item:"https://vinitchaudhary.in" },
                      { name:"About", item:"https://vinitchaudhary.in/about" }
                    ])
                  ]}
                />
                <AboutMain />
              </>
            }
          />

          {/* WORKS */}
          <Route
            path="/works"
            element={
              <>
                <SEO19
                  path="/works"
                  title="Works & Case Studies — Vinit Chaudhary | UX/UI Designer "
                  description="Selected UX/UI case studies across fintech, trading, sports & SaaS—research, IA, flows, UI, and dev handoff."
                  schema={[
                    breadcrumb([
                      { name:"Home", item:"https://vinitchaudhary.in" },
                      { name:"Works", item:"https://vinitchaudhary.in/works" }
                    ])
                  ]}
                />
                <WorkMain />
              </>
            }
          />

          {/* PROJECT ROUTES (Add SEO19 inside each component based on slug) */}
          <Route path="/chartinghq/:slug" element={<ChartingHqmain />} />
          <Route path="/alpha/:slug" element={<Alphamain />} />
          <Route path="/raDashboard/:slug" element={<Ramain />} />
          <Route path="/algorooms/:slug" element={<Algomain />} />
          <Route path="/alphaapp/:slug" element={<Alphaappmain />} />
          <Route path="/nestohub/:slug" element={<Nestohubmain />} />
          <Route path="/cribonix/:slug" element={<Cribonixmain />} />
          <Route path="/copartnerapp/:slug" element={<Copartnerappmain />} />
          <Route path="/budgettree/:slug" element={<Budgettreemain />} />
          <Route path="/bepro/:slug" element={<Bepromain />} />
          <Route path="/investock/:slug" element={<Investockmain />} />
           <Route path="/cryptomaty/:slug" element={<Cryptomatymain />} />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <>
                <SEO19
                  path="/contact"
                  title="Contact — Hire a UX/UI Designer | Vinit Chaudhary"
                  description="Have a brief? I’ll map scope, risks, and a first sprint plan in 48 hours. Contact for app & web UX/UI, design systems & handoff."
                  schema={[
                    breadcrumb([
                      { name:"Home", item:"https://vinitchaudhary.in" },
                      { name:"Contact", item:"https://vinitchaudhary.in/contact" }
                    ]),
                    contactFAQ
                  ]}
                />
                <ContactPage />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}
