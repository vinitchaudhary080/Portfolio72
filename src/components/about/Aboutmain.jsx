// src/components/projectdetails/projectdummy/ProjectDummy.jsx
import React from "react";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import MyImage from "./Myimage";
import Services from "./ServicesSection";
import WorksSection from "../WorksSection";
import Banner from '../BannersSection1';
import Footer from '../FooterSection1';
import ScrollCard from "../ScrollCard";


export default function ProjectDummy() {
  return (
    <div className="bg-black min-h-screen">  
      
      <ScrollCard>
       <AboutHero />
      </ScrollCard>
      <ScrollCard>
       <AboutContent />
      </ScrollCard>
      <ScrollCard>
       <MyImage />
      </ScrollCard>
      <ScrollCard>
       <Services />
      </ScrollCard>
      <ScrollCard>
       <WorksSection />
      </ScrollCard>
      <ScrollCard>
       <Banner />
      </ScrollCard>
      <ScrollCard>
       <Footer />
      </ScrollCard>
      
      
     
      
    </div>
  );
}
