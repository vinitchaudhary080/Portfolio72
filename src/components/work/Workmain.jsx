// src/components/work/Workmain.jsx
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import ScrollCard from "../ScrollCard";
import BannerSection from "../BannersSection1";
import Footer from "../FooterSection1";

export default function Workmain() {
  return (
    <div className="bg-black min-h-screen">
      <section className="w-full bg-black text-white pt-24 pb-0 sm:px-20">
        {/* Heading + Divider */}
        <div className="flex items-center gap-4 px-6 mb-10">
          <h2 className="text-white text-base sm:text-lg font-normal whitespace-nowrap">
            Selected Project
          </h2>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Cards: single-column grid on mobile → full-width on md+ */}
        <div className=" md:py-8 grid grid-cols-1 gap-8 md:block">
          <ScrollCard>
              <Card1 />
            </ScrollCard>
          <ScrollCard>
              <Card2 />
            </ScrollCard>

          <ScrollCard>
              <Card1 />
            </ScrollCard>
          <ScrollCard>
              <Card2 />
            </ScrollCard>  

          <ScrollCard>
              <BannerSection />
            </ScrollCard> 

          <ScrollCard>
              <Footer />
            </ScrollCard> 

          
        </div>
      </section>
    </div>
  );
}
