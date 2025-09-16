// src/seo/Meta.jsx
import React from "react";

export default function Meta({
  title,
  description,
  url,
  image = "https://vinitchaudhary.in/og-default.jpg",
  keywords = [],
  canonical,
  noindex = false,
  jsonLd = [], // array of objects
}) {
  const finalCanonical = canonical || url;

  return (
    <>
      {/* Basic */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {finalCanonical && <link rel="canonical" href={finalCanonical} />}

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />

      {/* JSON-LD blocks */}
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
