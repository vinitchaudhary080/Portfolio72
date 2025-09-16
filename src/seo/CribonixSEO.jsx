import React from "react";
import ProjectSEO from "./ProjectSEO";

const metaMap = {
  "cribonix": {
    title: "Cribonix – Marketing Agency Website UX/UI Case Study | Vinit Chaudhary",
    description: "Conversion-focused website with cleaner funnels attracting more qualified leads.",
    og: "/og-cover.png",
    keywords: ["marketing site","seo","conversion","web ux"]
  }
};

export default function CribonixSEO() {
  return <ProjectSEO base="cribonix" display="Cribonix" metaMap={metaMap} />;
}
