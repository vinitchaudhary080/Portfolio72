import React from "react";
import ProjectSEO from "./ProjectSEO";

const metaMap = {
  "bepro-app": {
    title: "BePro – Cricket Scoring & Tournaments UX Case Study | Vinit Chaudhary",
    description: "Local to semi-pro cricket: live scoring, team & tournament flows, faster setup, clearer roles.",
    og: "/og-cover.png",
    keywords: ["sports app","cricket","live scoring","ux"]
  }
};

export default function BeproSEO() {
  return <ProjectSEO base="bepro" display="BePro" metaMap={metaMap} />;
}
