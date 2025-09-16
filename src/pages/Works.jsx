// src/pages/Works.tsx
import React from "react";
import Meta from "@/seo/Meta";
import { breadcrumbs } from "@/seo/schema";
import { baseKeywords } from "@/seo/keywords";
import Workmain from "@/components/work/Workmain";

export default function Works() {
  const url = "https://vinitchaudhary.in/works";
  const title = "UX/UI Case Studies — Websites, Apps & SaaS Dashboards (India)";
  const description =
    "Selected UX/UI case studies: fintech dashboards, trading platforms, mobile apps, and web products designed for Indian startups & businesses.";

  return (
    <>
      <Meta
        title={title}
        description={description}
        url={url}
        canonical={url}
        keywords={[...baseKeywords, "ux case studies india", "ui portfolio india"]}
        jsonLd={[
          breadcrumbs([
            { name: "Home", url: "https://vinitchaudhary.in/" },
            { name: "Works", url },
          ]),
        ]}
      />

      <main id="main-content">
        {/* Accessible H1 for SEO without changing visual layout */}
        <h1 className="sr-only">UX/UI Case Studies & Projects</h1>
        <Workmain />
      </main>
    </>
  );
}
