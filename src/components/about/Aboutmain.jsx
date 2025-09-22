import React from "react";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import MyImage from "./Myimage";
import Services from "./ServicesSection";
import WorksSection from "../WorksSection";
import Banner from '../BannersSection1';
import Footer from '../FooterSection1';
import ScrollCard from "../ScrollCard";
import ProvidedSection from "../../components/ProvidedSection";
import { LampDemo } from "../lamp-demo";
import StickyScrollGallery from '@/components/ui/StickyScrollGallery';  
import TeamManagement from './TeamManagement'; 
import DesignApproachSection from './DesignApproachSection';
import Image from './WorkImageSlider';
import WorkSection from './WorkSection'; 

import Page from "../page";  

export default function About() {
  // JSON-LD for AboutPage (hoisted to <head> by React 19)
  const aboutSchema = {
    "@context":"https://schema.org",
    "@type":"AboutPage",
    "name":"About — Tisha Kakkar | UX/UI Designer",
    "url":"https://tishakakkar.in/about",
    "description":"About Tisha Kakkar — UX/UI Designer specializing in fintech/trading products, research-first UX and production-ready UI systems.",
    "mainEntity":{
      "@type":"Person",
      "name":"Tisha Kakkar",
      "url":"https://tishakakkar.in",
      "sameAs":[
        "https://www.linkedin.com/in/tisha-kakkar-55b0a41a0/",
        "https://www.behance.net/tishakakkar"
      ]
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* schema only; App.jsx already sets title/description for /about */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* If you want the video hero on About page, keep AboutHero; otherwise remove (no SEO effect) */}
      {/* <ScrollCard><AboutHero /></ScrollCard> */}

     
      <ScrollCard>
        <AboutContent />
      </ScrollCard>
     
      <StickyScrollGallery />
      
      <ScrollCard>
        <TeamManagement />
      </ScrollCard>
      <Image />
      <DesignApproachSection />
      <WorkSection />
     

      <LampDemo />

      <ScrollCard>
        <Footer />
      </ScrollCard>
    </div>
  );
}
