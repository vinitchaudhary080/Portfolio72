// src/pages/Contact.tsx
import React from "react";
import Meta from "@/seo/Meta";
import { breadcrumbs, faqSchema } from "@/seo/schema";
import { baseKeywords } from "@/seo/keywords";
import ContactPage from "@/components/contact/ContactPage";

export default function Contact() {
  const url = "https://vinitchaudhary.in/contact";
  const title = "Contact — Hire Freelance UX/UI Designer in India | Vinit Chaudhary";
  const description =
    "Hire a freelance UX/UI designer for websites, mobile apps, or SaaS dashboards. Based in India, available for remote projects.";

  // Structured data for ContactPage (merged into <head> by React 19)
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    url,
    mainEntity: {
      "@type": "Person",
      name: "Vinit Chaudhary",
      url: "https://vinitchaudhary.in",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "business",
          email: "mailto:vinitchaudhary080@gmail.com",
          telephone: "+918398020076",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122103",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <Meta
        title={title}
        description={description}
        url={url}
        canonical={url}
        keywords={[...baseKeywords, "contact ux designer india", "hire ux ui designer india"]}
        jsonLd={[
          breadcrumbs([
            { name: "Home", url: "https://vinitchaudhary.in/" },
            { name: "Contact", url },
          ]),
          faqSchema([
            ["How soon can we start?", "Discovery call within 24–48 hours; timeline depends on scope."],
            ["Do you work with startups?", "Yes—MVPs, redesigns, and growth-stage SaaS."],
          ]),
          contactPageSchema,
        ]}
      />

      {/* Tumhara actual contact UI */}
      <main id="main-content">
        <ContactPage />
      </main>
    </>
  );
}
