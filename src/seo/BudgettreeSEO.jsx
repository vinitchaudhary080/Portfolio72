import React from "react";
import ProjectSEO from "./ProjectSEO";

// Update slug(s) as per real route
const metaMap = {
  "budgettree-app": {
    title: "BudgetTree – Personal Finance App UX Case Study | Tisha Kakkar",
    description: "Calm, guided money flows with better category clarity and insights.",
    og: "/og-cover.png",
    keywords: ["personal finance","budgeting","mobile ux"]
  }
};

export default function BudgettreeSEO() {
  return <ProjectSEO base="budgettree" display="BudgetTree" metaMap={metaMap} />;
}
