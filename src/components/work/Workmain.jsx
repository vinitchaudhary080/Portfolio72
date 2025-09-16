// src/components/work/Workmain.jsx
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";
import Card9 from "./Card9";
import Bepro from "./Bepro";
import ScrollCard from "../ScrollCard";
import BannerSection from "../BannersSection1";
import Footer from "../FooterSection1";
import Investock from "./Investock";
import Heading from "../work/Heading";
import { LampDemo }from "../lamp-demo";

export default function Workmain() {
  return (
    <div className="bg-black min-h-screen">
      <section className="w-full bg-black text-white pt-24 pb-0 sm:px-20">
        {/* Heading + Divider */}
        <div className="flex items-center gap-4 px-6 mb-10">
          <h2 className="text-white text-base sm:text-lg font-normal whitespace-nowrap">
            Projects
          </h2>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Cards: single-column grid on mobile → full-width on md+ */}
        <div className=" md:py-8 grid grid-cols-1 gap-8 md:block">
          
            <ScrollCard>
              <Investock />
            </ScrollCard>
             <ScrollCard>
              <Bepro />
            </ScrollCard>
            <ScrollCard>
              <Card4 />
            </ScrollCard>

          <ScrollCard>
              <Card1 />
            </ScrollCard>

           <ScrollCard>
              <Card8 />
            </ScrollCard> 

          <ScrollCard>
              <Card2 />
            </ScrollCard>
        

          <ScrollCard>
              <Card7 />
            </ScrollCard>  

          <ScrollCard>
              <Card6 />
            </ScrollCard> 

            <ScrollCard>
              <Card9 />
            </ScrollCard> 

          
              <LampDemo />
            

          <ScrollCard>
              <Footer />
            </ScrollCard> 

          
        </div>
      </section>
    </div>
  );
}
