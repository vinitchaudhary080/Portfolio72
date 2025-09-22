import React from "react";
import ProjectSEO from "./ProjectSEO";

const metaMap = {
  "alpha-exchange": {
    title: "Alpha Exchange – Crypto Trading Web UX Case Study | Tisha kakkar",
    description: "Beginner-friendly crypto broker: clearer order states & simpler first-trade completion flows.",
    og: "/og-cover.png",
    keywords: ["crypto","broker","order flow","web ui"]
  }
};

export default function AlphaSEO() {
  return <ProjectSEO base="alpha" display="Alpha Exchange" metaMap={metaMap} />;
}
