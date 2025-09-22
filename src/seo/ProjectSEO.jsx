// src/seo/ProjectSEO.jsx
import React from "react";
import { useParams } from "react-router-dom";
import SEO19, { breadcrumb } from "../components/SEO19";

const BASE_URL = "https://tishakakkar.in";

/**
 * Reusable SEO injector for project detail pages.
 * - base: route base path (e.g., "investock", "alpha")
 * - display: breadcrumb/display name (e.g., "Investock", "Alpha Exchange")
 * - metaMap: { [slug]: { title, description, og, keywords[] } }
 */
export default function ProjectSEO({ base, display, metaMap = {} }) {
  const { slug } = useParams();

  const fallback = {
    title: `${display} — Case Study | Tisha Kakkar`,
    description: "UX/UI case study: research → IA/flows → UI → dev handoff.",
    og: "/og-cover.png",
    keywords: [],
  };

  const m = (slug && metaMap[slug]) || fallback;
  const path = `/${base}/${slug || ""}`;

  return (
    <SEO19
      path={path}
      title={m.title}
      description={m.description}
      ogImage={m.og}
      schema={[
        breadcrumb([
          { name: "Home", item: `${BASE_URL}` },
          { name: "Works", item: `${BASE_URL}/works` },
          { name: display, item: `${BASE_URL}${path}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": m.title,
          "author": { "@type": "Person", "name": "Tisha Kakkar" },
          "image": `${BASE_URL}${m.og}`,
          "url": `${BASE_URL}${path}`,
          "keywords": (m.keywords || []).join(", "),
          "description": m.description
        }
      ]}
    />
  );
}
