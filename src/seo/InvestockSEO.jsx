import React from "react";
import ProjectSEO from "./ProjectSEO";

const metaMap = {
  "investock-app": {
    title: "Investock.ai – Trading & Investing App UX Case Study | Tisha Kakkar",
    description: "AI-powered trading/investing platform: advanced charting, strategy builder, backtesting & real-time insights.",
    og: "/og-cover.png",
    keywords: ["fintech ux","trading app","ai","backtesting","charting"]
  }
};

export default function InvestockSEO() {
  return <ProjectSEO base="investock" display="Investock" metaMap={metaMap} />;
}
