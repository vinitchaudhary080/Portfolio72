// src/pages/Services.tsx (use .jsx if not using TS)
import React from "react";
import Meta from "@/seo/Meta";
import { breadcrumbs, servicesSchema } from "@/seo/schema";
import { baseKeywords } from "@/seo/keywords";
import ProvidedSection from "@/components/about/ProvidedSection";

export default function Services() {
  const url = "https://vinitchaudhary.in/services";
  const title = "UX/UI Services in India — Website, App, SaaS Dashboard | Hire Vinit";
  const description =
    "Freelance services: website UX/UI, mobile app design, and SaaS dashboard UX for Indian startups & businesses. Hire a senior designer.";

  return (
    <>
      <Meta
        title={title}
        description={description}
        url={url}
        canonical={url}
        keywords={[
          ...baseKeywords,
          "freelance ui designer india",
          "freelance ux designer india",
          "product designer for startups india",
          "dashboard ux expert india",
        ]}
        jsonLd={[
          // Breadcrumbs for the page
          breadcrumbs([
            { name: "Home", url: "https://vinitchaudhary.in/" },
            { name: "Services", url },
          ]),
          // Rich services list schema for this page
          servicesSchema(),
        ]}
      />

      <main id="main-content">
        {/* Accessible H1 without changing your visual layout */}
        <h1 className="sr-only">UX/UI Services in India</h1>

        {/* Your services grid exactly as-is */}
        <ProvidedSection />
      </main>
    </>
  );
}
