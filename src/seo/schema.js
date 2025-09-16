// src/seo/schema.js
export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinit Chaudhary",
  jobTitle: "Senior UX/UI Designer & Team Lead",
  url: "https://vinitchaudhary.in/",
  image: "https://vinitchaudhary.in/og-default.jpg",
  sameAs: [
    "https://www.linkedin.com/in/vinitc69/",
    "https://behance.net/vinitchaudhary1"
  ],
  worksFor: { "@type": "Organization", name: "Freelance" },
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  areaServed: "IN",
  knowsAbout: [
    "UX design","UI design","Product design",
    "Website design","Mobile app design","SaaS dashboard UX",
    "Fintech UX","Trading platforms"
  ]
});

export const servicesSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      name: "Freelance Website UX/UI Design (India)",
      areaServed: "IN",
      provider: { "@type": "Person", name: "Vinit Chaudhary" }
    },
    {
      "@type": "Service",
      name: "Freelance Mobile App UI/UX (India)",
      areaServed: "IN",
      provider: { "@type": "Person", name: "Vinit Chaudhary" }
    },
    {
      "@type": "Service",
      name: "SaaS & Dashboard UX (India)",
      areaServed: "IN",
      provider: { "@type": "Person", name: "Vinit Chaudhary" }
    }
  ]
});

export const breadcrumbs = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: it.url
  }))
});

export const webSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vinit Chaudhary — UX/UI Designer",
  url: "https://vinitchaudhary.in/",
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.google.com/search?q=site%3Avinitchaudhary.in+{search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const faqSchema = (qaPairs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qaPairs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a }
  }))
});

export const articleSchema = ({ headline, url, image, datePublished, dateModified, description }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  description,
  mainEntityOfPage: url,
  image,
  author: { "@type": "Person", name: "Vinit Chaudhary", url: "https://vinitchaudhary.in/" },
  publisher: { "@type": "Person", name: "Vinit Chaudhary" },
  datePublished,
  dateModified
});
