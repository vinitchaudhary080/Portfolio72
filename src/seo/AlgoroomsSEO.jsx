import React from "react";
import ProjectSEO from "./ProjectSEO";

const metaMap = {
  "algorooms-dashboard": {
    title: "Algorooms – Algo Trading Dashboard UX Case Study | Tisha Kakkar",
    description: "Design, backtest & deploy algos in one place—simplified params, faster runs, fewer context switches.",
    og: "/og-cover.png",
    keywords: ["algo trading","dashboard ux","fintech"]
  }
};

export default function AlgoroomsSEO() {
  return <ProjectSEO base="algorooms" display="Algorooms" metaMap={metaMap} />;
}
