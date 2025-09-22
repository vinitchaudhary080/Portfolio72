import React from "react";
import ProjectSEO from "./ProjectSEO";

// Update slug(s) as per real route
const metaMap = {
  "nestohub-web": {
    title: "Nestohub – Product Website UX/UI Case Study | Tisha Kakkar",
    description: "Clarity-first marketing pages with stronger information scent & CTAs.",
    og: "/og-cover.png",
    keywords: ["website","marketing","cta","information scent"]
  }
};

export default function NestohubSEO() {
  return <ProjectSEO base="nestohub" display="Nestohub" metaMap={metaMap} />;
}
