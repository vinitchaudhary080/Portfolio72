// src/pages/algorooms/AlgoroomsDashboard.tsx
import React from "react";
import Meta from "@/seo/Meta";
import { breadcrumbs, articleSchema } from "@/seo/schema";

export default function AlgoroomsDashboardCaseStudy() {
  const url = "https://tishakakkar.in/algorooms/algorooms-dashboard";
  const title = "Algorooms Dashboard — Strategy Builder & Backtest | UX Case Study (India)";
  const description =
    "End-to-end UX for an algorithmic trading platform: discovery to design system, strategy builder, backtesting flows, and performance dashboards.";

  return (
    <>
      <Meta
        title={title}
        description={description}
        url={url}
        canonical={url}
        keywords={[
          "algorithmic trading ux",
          "trading strategy builder ui",
          "backtesting dashboard ux",
          "fintech ux case study",
          "freelance ux designer india",
        ]}
        jsonLd={[
          breadcrumbs([
            { name: "Home", url: "https://tishakakkar.in/" },
            { name: "Works", url: "https://tishakakkar.in/works" },
            { name: "Algorooms Dashboard", url },
          ]),
          articleSchema({
            headline: title,
            url,
            image: "https://tishakakkar.in/og-default.jpg", // replace if you have a project-specific OG
            description,
            datePublished: "2025-09-01", // update if you want real publish date
            dateModified: "2025-09-01",
          }),
        ]}
      />

      <main id="main-content" className="bg-black text-white">
        {/* Screen-reader H1 to strengthen page topic without changing your design */}
        <h1 className="sr-only">Algorooms Dashboard — Strategy Builder & Backtest Case Study</h1>

        {/* ↓ Yahan tum apna full case study body render karo (sections, images, flows, etc.) */}
        {/* <HeroBlock /> */}
        {/* <Problem /> */}
        {/* <Process /> */}
        {/* <Solution /> */}
        {/* <Outcomes /> */}
             <Heading />
                    <Showcaseimage />
                    <Summary />
                    <Ux />
                    <Visualhighlights />
                   <Showcase />
                    <Shcase />
      </main>
    </>
  );
}
