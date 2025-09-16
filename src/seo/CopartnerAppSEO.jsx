import React from "react";
import ProjectSEO from "./ProjectSEO";

const metaMap = {
  "copartner-app": {
    title: "Copartner – Research Ideas & Signals App UX Case Study | Vinit Chaudhary",
    description: "Actionable buy/sell ideas with subscription; reduced 'where to act' confusion & support pings.",
    og: "/og-cover.png",
    keywords: ["finance app","subscriptions","signals"]
  }
};

export default function CopartnerAppSEO() {
  return <ProjectSEO base="copartnerapp" display="Copartner" metaMap={metaMap} />;
}
