// src/components/SEO19.jsx
import React from "react";

const BASE_URL = "https://vinitchaudhary.in";

export default function SEO19({
  title = "UI/UX Designer in India | Vinit Chaudhary",
  description = "Senior UI/UX designer building apps, websites & design systems that convert.",
  path = "/",
  ogImage = "/og-cover.png",
  noindex = false,
  schema = [] // array of JSON-LD objects
}) {
  const url = `${BASE_URL}${path}`;
  const robots = noindex ? "noindex,nofollow" : "index,follow";
  const jsonld = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Twitter */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* JSON-LD */}
      {jsonld.map((obj, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}

/* Helpers */
export const personSchema = {
  "@context":"https://schema.org",
  "@type":"Person",
  "name":"Vinit Chaudhary",
  "jobTitle":"UI/UX Designer",
  "url": BASE_URL,
  "sameAs":[
    "https://www.linkedin.com/in/vinitc69/",
    "https://www.behance.net/vinitchaudhary1"
  ],
  "image": `${BASE_URL}/vinit-profile.jpg`,
  "knowsAbout":["UI/UX","Design Systems","Fintech UX","Trading Apps"]
};

export const websiteSchema = {
  "@context":"https://schema.org",
  "@type":"WebSite",
  "name":"Vinit Chaudhary Portfolio",
  "url": BASE_URL,
  "potentialAction":{
    "@type":"SearchAction",
    "target": `${BASE_URL}/search?q={query}`,
    "query-input":"required name=query"
  }
};

export const breadcrumb = (items) => ({
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement": items.map((it, idx) => ({
    "@type":"ListItem", "position": idx+1, "name": it.name, "item": it.item
  }))
});

export const creativeWork = ({ name, url, image, datePublished, keywords = [] }) => ({
  "@context":"https://schema.org",
  "@type":"CreativeWork",
  name, url, image, datePublished,
  "author": {"@type":"Person","name":"Vinit Chaudhary"},
  "keywords": keywords.join(", ")
});
