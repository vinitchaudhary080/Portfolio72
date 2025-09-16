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
import Page from "../page";

export default function About() {
  // JSON-LD for AboutPage (hoisted to <head> by React 19)
  const aboutSchema = {
    "@context":"https://schema.org",
    "@type":"AboutPage",
    "name":"About — Vinit Chaudhary | UX/UI Designer",
    "url":"https://vinitchaudhary.in/about",
    "description":"About Vinit Chaudhary — Senior UI/UX Designer specializing in fintech/trading products, research-first UX and production-ready UI systems.",
    "mainEntity":{
      "@type":"Person",
      "name":"Vinit Chaudhary",
      "url":"https://vinitchaudhary.in",
      "sameAs":[
        "https://www.linkedin.com/in/vinitc69/",
        "https://www.behance.net/vinitchaudhary1"
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
        <Page />
      </ScrollCard>
      <ScrollCard>
        <AboutContent />
      </ScrollCard>
      <ScrollCard>
        <MyImage />
      </ScrollCard>
      <ScrollCard>
        <ProvidedSection />
      </ScrollCard>
      <ScrollCard>
        <WorksSection />
      </ScrollCard>

      <LampDemo />

      <ScrollCard>
        <Footer />
      </ScrollCard>
    </div>
  );
}
