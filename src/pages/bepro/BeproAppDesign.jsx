// src/pages/bepro/BeproAppDesign.tsx
import React from "react";
import Meta from "@/seo/Meta";
import { breadcrumbs, articleSchema } from "@/seo/schema";

export default function BeproAppDesignCaseStudy() {
    const url = "https://vinitchaudhary.in/bepro/bepro-app-design";
    const title = "BePro — Cricket App UX Case Study (India) | Play, Track & Relive Matches";
    const description =
        "End-to-end UX for BePro, a cricket app for local players and teams: match creation, live scoring, tournaments, and performance tracking.";

    return (
        <>
            <Meta
                title={title}
                description={description}
                url={url}
                canonical={url}
                keywords={[
                    "cricket app ux",
                    "sports app ux case study",
                    "mobile app ui ux india",
                    "live scoring app design",
                    "product ux case study",
                    "freelance ux designer india",
                ]}
                jsonLd={[
                    breadcrumbs([
                        { name: "Home", url: "https://vinitchaudhary.in/" },
                        { name: "Works", url: "https://vinitchaudhary.in/works" },
                        { name: "BePro App Design", url },
                    ]),
                    articleSchema({
                        headline: title,
                        url,
                        image: "https://vinitchaudhary.in/og-bepro.jpg", // optional: add a project OG in /public
                        description,
                        datePublished: "2025-09-01",   // update to real dates if needed
                        dateModified: "2025-09-01",
                    }),
                ]}
            />

            <main id="main-content" className="bg-black text-white">
                <h1 className="sr-only">BePro — Cricket App UX Case Study</h1>

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
