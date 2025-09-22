import React from "react";
import ProjectSEO from "./ProjectSEO";

// Update slug(s) as per real route
const metaMap = {
  "alphaapp-mobile": {
    title: "Alpha App – Mobile Trading UX Case Study | Tisha Kakkar",
    description: "Simplified mobile trading with clear affordances & frictionless order flows.",
    og: "/og-cover.png",
    keywords: ["mobile trading","app ux","orders"]
  }
};

export default function AlphaAppSEO() {
  return <ProjectSEO base="alphaapp" display="Alpha App" metaMap={metaMap} />;
}
