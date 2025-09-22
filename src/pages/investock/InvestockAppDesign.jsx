// src/pages/investock/InvestockAppDesign.tsx
import React from "react";
import Meta from "@/seo/Meta";
import { breadcrumbs, articleSchema } from "@/seo/schema";

export default function InvestockAppDesignCaseStudy() {
    const url = "https://tishakakkar.in/investock/investock-app-design";
    const title = "Investock.ai — AI Trading Platform | UX Case Study (India)";
    const description =
        "AI-powered trading & investing platform: advanced charting, real-time market data, strategy builder, and backtesting — designed for stock and crypto traders.";

    return (
        <>
            <Meta
                title={title}
                description={description}
                url={url}
                canonical={url}
                keywords={[
                    "ai trading platform ux",
                    "trading strategy builder ux",
                    "backtesting dashboard ui",
                    "fintech product design india",
                    "crypto trading ui",
                    "stock market app ux",
                    "freelance ux designer india",
                ]}
                jsonLd={[
                    breadcrumbs([
                        { name: "Home", url: "https://tishakakkar.in/" },
                        { name: "Works", url: "https://tishakakkar.in/works" },
                        { name: "Investock.ai — App Design", url },
                    ]),
                    articleSchema({
                        headline: title,
                        url,
                        image: "https://tishakakkar.in/og-investock.jpg", // optional: add 1200x630 in /public
                        description,
                        datePublished: "2025-09-01", // update to real dates if needed
                        dateModified: "2025-09-01",
                    }),
                ]}
            />

            <main id="main-content" className="bg-black text-white">
                <h1 className="sr-only">Investock.ai — AI Trading Platform UX Case Study</h1>

                <Heading />
                <ImageSection />
                <Summary />
                <Ux />
                <Doubleimage />
                <Visual />
                <Wireframe />
            </main>
        </>
    );
}
