import React from "react";
import ProjectSEO from "./ProjectSEO";

// Slugs example: update when you finalize
const metaMap = {
  "chartinghq-app": {
    title: "ChartingHQ – Trading Analytics & Unified Tools UX Case Study | Vinit Chaudhary",
    description: "Unified charts, brokers & analytics—save time and improve accessibility for traders.",
    og: "/og-cover.png",
    keywords: ["trading analytics","charts","unified tools"]
  }
};

export default function ChartingHQSEO() {
  return <ProjectSEO base="chartinghq" display="ChartingHQ" metaMap={metaMap} />;
}
