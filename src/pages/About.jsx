// src/pages/About.tsx
import React from "react";
import Meta from "@/seo/Meta";
import { breadcrumbs, personSchema } from "@/seo/schema";
import { baseKeywords } from "@/seo/keywords";

import AboutContent from "@/components/about/AboutContent";
import MyImage from "@/components/about/Myimage";
import WorksSection from "@/components/WorksSection";
import Footer from "@/components/FooterSection1";
import ScrollCard from "@/components/ScrollCard";
import ProvidedSection from "@/components/about/ProvidedSection";
import { LampDemo } from "@/components/lamp-demo";
import Page from "@/components/page";

export default function About() {
  const url = "https://tishakakkar.in/about";
  const title = "About — Tisha Kakkar | UX/UI Designer (India)";
  const description =
    "UX/UI designer with 5+ years experience shaping websites, mobile apps, and SaaS dashboards for Indian startups & businesses.";

  // Structured data for the About page (merged via Meta -> <head>)
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About — Tisha Kakkar| UX/UI Designer",
    url,
    description:
      "About Tisha Kakkar — UI/UX Designer specializing in fintech/trading products, research-first UX and production-ready UI systems.",
    mainEntity: {
      "@type": "Person",
      name: "Tisha Kakkar",
      url: "https://tishakakkar.in",
      sameAs: [
        "https://www.linkedin.com/in/tisha-kakkar-55b0a41a0/",
        "https://www.behance.net/tishakakkar",
      ],
    },
  };

  return (
    <>
      <Meta
        title={title}
        description={description}
        url={url}
        canonical={url}
        keywords={[...baseKeywords, "ux ui designer india", "team lead ux ui india"]}
        jsonLd={[
          breadcrumbs([
            { name: "Home", url: "https://tishakkakr.in/" },
            { name: "About", url },
          ]),
          personSchema(),
          aboutPageSchema,
        ]}
      />

      <main id="main-content" className="bg-black min-h-screen">
        {/* Accessible H1 for SEO without changing visual layout */}
        <h1 className="sr-only">About Tisha Kakkar — UX/UI Designer</h1>

        {/* Your original sections (unchanged visuals) */}
        <ScrollCard>
          <Page />
        </ScrollCard>
        <ScrollCard>
          <AboutContent />
        </ScrollCard>
        <ScrollCard>
          <MyImage />
        </ScrollCard>
        <ScrollCard>
          <ProvidedSection />
        </ScrollCard>
        <ScrollCard>
          <WorksSection />
        </ScrollCard>

        <LampDemo />

        <ScrollCard>
          <Footer />
        </ScrollCard>
      </main>
    </>
  );
}
