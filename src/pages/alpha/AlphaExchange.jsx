// src/pages/alpha/AlphaExchange.tsx
import React from "react";
import Meta from "@/seo/Meta";
import { breadcrumbs, articleSchema } from "@/seo/schema";

export default function AlphaExchangeCaseStudy() {
    const url = "https://vinitchaudhary.in/alpha/alpha-exchange";
    const title = "Alpha Exchange — Broker Dashboard & Website | Crypto Trading UX Case Study (India)";
    const description =
        "Unified crypto trading interface: real-time market overview, modular charts, portfolio tracking, and instant trade execution via WebSockets.";

    return (
        <>
            <Meta
                title={title}
                description={description}
                url={url}
                canonical={url}
                keywords={[
                    "crypto trading ux",
                    "broker dashboard ui",
                    "exchange dashboard design",
                    "websocket trading interface",
                    "portfolio tracking ux",
                    "fintech product design india",
                    "freelance ux designer india",
                ]}
                jsonLd={[
                    breadcrumbs([
                        { name: "Home", url: "https://vinitchaudhary.in/" },
                        { name: "Works", url: "https://vinitchaudhary.in/works" },
                        { name: "Alpha Exchange", url },
                    ]),
                    articleSchema({
                        headline: title,
                        url,
                        image: "https://vinitchaudhary.in/og-alpha.jpg", // optional: add project-specific OG 1200x630 in /public
                        description,
                        datePublished: "2025-09-01", // update to your actual dates if needed
                        dateModified: "2025-09-01",
                    }),
                ]}
            />

            <main id="main-content" className="bg-black text-white">
                {/* Screen-reader H1 for SEO; visual layout unchanged */}
                <h1 className="sr-only">Alpha Exchange — Broker Dashboard & Website UX Case Study</h1>

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
