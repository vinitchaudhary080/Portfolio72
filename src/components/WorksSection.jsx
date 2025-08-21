// src/components/WorksSection.jsx
import React from "react";
import WorkCard from "./WorkCard";
import img1 from "../assets/Algorooms/Dashboard dark.png";
import img2 from "../assets/Alpha/MacBook_Mockup_3.jpg";
import img3 from "../assets/CopartnerApp/copartner-1.jpg";
import img4 from "../assets/ChartingHQ/project1.jpg";
import img5 from "../assets/Cribonix/cribonix-1.jpg";
import img6 from "../assets/Nestohub/nestoHub1.jpg";

export default function WorksSection() {
  const posts = [
    {
      slug: "Algorooms",
      path: "/algorooms/Algorooms Dashboard",
      frontImage: img1,
      title: "Algorooms Dashboard",
      author: "Algorooms",
      content: "A next-gen algo trading platform that enables traders to design, backtest, and deploy their trading strategies seamlessly with their existing brokers.",
    },
    {
      slug: "Alpha Exchange Broker",
      path: "/alpha/Alpha Exchange",
      frontImage: img2,
      title: "Alpha Exchange Dashboard & Website",
      author: "Alpha Exchange",
     
      content: "A modern crypto trading broker built for beginners and professionals, offering a user-friendly interface, fast execution, and a simple way to buy, sell, and manage digital assets.",
    },
    {
      slug: "Copartner App",
      path: "/copartnerapp/Copartner App", // or change to a 3rd route if you have one
      frontImage: img3,
      title: "Copartner App",
      author: "Copartner App",
      
      content: "A finance product where professional research analysts and traders share actionable buy/sell tips and market insights, which users can access through a subscription model.",
    },

    {
      slug: "ChartingHQ Dashboard",
      path: "/chartinghq/ChartingHQ Dashboard",
      frontImage: img4,
      title: "ChartingHQ Dashboard",
      author: "ChartingHQ",
      
      content: "A trading platform that consolidates charts, market overview, stock sectors, and an insider strategy feature—helping traders analyze, backtest, and deploy strategies seamlessly without switching between multiple tools.",
    },
    {
      slug: "Cribonix",
      path: "/cribonix/Cribonix", // or change to a 3rd route if you have one
      frontImage: img5,
      title: "Cribonix Website",
      author: "Cribonix",
      
      content: "A modern and conversion-focused website designed for Cribonix, a marketing agency that provides end-to-end digital marketing services such as advertising campaigns, SEO, social media, and branding solutions.",
    },
    {
      slug: "Nestohub",
      path: "/nestohub/Nestohub",
      frontImage: img6,
      title: "Nestohub ",
      author: "Nestohub",
    
      content: "A comprehensive real estate platform designed to seamlessly connect buyers, builders, and brokers, enabling property discovery, sales, rentals, and financing—all in one ecosystem.",
    },
    
  ];

  return (
    <section className="w-full bg-black px-6 sm:px-20 py-20">
      {/* Heading + divider */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Work Samples
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <WorkCard key={idx} {...post} />
        ))}
      </div>
    </section>
  );
}
