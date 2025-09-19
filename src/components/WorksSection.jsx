// src/components/WorksSection.jsx
import React from "react";
import WorkCardFX from "./WorkCardFX"; // ⬅️ animated card

import img1 from "../assets/Algorooms/Mockuplight.webp";
import img2 from "../assets/Alpha/MacBook_Mockup_3.webp";


import img5 from "../assets/Cribonix/cribonix-1.webp";
import img from "../assets/Bepro/homemockup.webp";
import imgs from "../assets/Investock/lightmockup.webp";
import cryptomaty from "../assets/Cryptomaty/mobile.webp";

export default function WorksSection() {
  const posts = [
    {
      slug: "cryptomaty-dashboard",
      path: "/cryptomaty/cryptomaty-dashboard",
      frontImage: cryptomaty,
      title: "Cryptomaty Dashboard",
      author: "Cryptomaty",
      content:
        "A free crypto trading platform where users can explore RA-curated strategy templates, backtest them on historical data, and deploy live via Delta Exchange. Includes visual analytics and detailed PnL reports to learn and reduce losses.",
      role: "UX flows • Web/App • Crypto",
      result:
        "Enabled beginners to start safely with backtests, helped pros optimize faster, and reduced trial-and-error losses by providing clear analytics and reporting.",
      tags: ["Crypto", "Web/App", "Backtesting", "Analytics"],
    },
    {
      slug: "investock",
      path: "/investock/investock-app",
      frontImage: imgs,
      title: "Investock.ai App",
      author: "Investock.ai",
      content:
        "An AI-powered trading and investing platform—advanced charting, strategy building, backtesting, and real-time market insights in one place.",
      role: "Product UX • Web & Mobile",
      result:
        "Unified platform reduced tool-hopping, improved strategy testing speed, and enhanced trader decision-making.",
      tags: ["Fintech", "Trading", "AI"],
    },
    {
      slug: "bepro",
      path: "/bepro/bepro-app",
      frontImage: img,
      title: "BePro App",
      author: "BePro",
      content:
        "Cricket for local & semi-pro teams—create matches, live scoring, tournaments, and performance records.",
      role: "Product UX • Mobile",
      result: "Live score flows, team mgmt; faster match setup & clearer roles.",
      tags: ["Sports", "Mobile", "MVP"],
    },
    {
      slug: "algorooms",
      path: "/algorooms/algorooms-dashboard",
      frontImage: img1,
      title: "Algorooms Dashboard",
      author: "Algorooms",
      content:
        "Design, backtest, and deploy algos with existing brokers in one place.",
      role: "UX/UI • Design System",
      result:
        "Simplified params & presets; quicker backtests; fewer context switches.",
      tags: ["Fintech", "Trading", "Web", "Dashboard"],
    },
    {
      slug: "alpha-exchange",
      path: "/alpha/alpha-exchange",
      frontImage: img2,
      title: "Alpha Exchange Dashboard & Website",
      author: "Alpha Exchange",
      content:
        "Beginner-friendly crypto broker for fast execution and simple order flows.",
      role: "Product UI • Web",
      result: "Clearer order states; improved first-trade completion.",
      tags: ["Crypto", "Web", "Growth", "Dashboard", "Mobile"],
    },

    {
      slug: "cribonix",
      path: "/cribonix/cribonix",
      frontImage: img5,
      title: "Cribonix Website",
      author: "Cribonix",
      content: "Conversion-focused site for a full-stack marketing agency.",
      role: "UX + Web",
      result: "Cleaner funnels; more qualified leads.",
      tags: ["Web", "Marketing", "SEO"],
    },
  ];

  return (
    <section className="w-full bg-black px-6 sm:px-20 py-20" aria-labelledby="work-samples-heading">
      {/* Heading + divider */}
      <div className="flex items-center gap-4 mb-10">
        <h2 id="work-samples-heading" className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Work Samples
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <WorkCardFX key={idx} {...post} />
        ))}
      </div>
    </section>
  );
}
