// src/components/WorksSection.jsx
import React from "react";
import WorkCard from "./WorkCard";
import img1 from "../assets/work1.jpg";
import img2 from "../assets/work2.jpg";
import img3 from "../assets/work3.jpg";

export default function WorksSection() {
    const posts = [
        {
            frontImage: img1,
            title: "The Art of Crafting User-Centric Websites That Stand Out",
            author: "Michael Stell",
            date: "April 10, 2025",
            readTime: "8 min",
            content: "In a world where digital experiences shape our daily interactions, designers and agencies play a pivotal role in crafting visually captivating and user-centric websites...",
        },
        {
            frontImage: img2,
            title: "The Secrets Behind Creating High-End Branding That Resonates",
            author: "Sarah Lin",
            date: "Mar 2, 2025",
            readTime: "6 min",
            content: "High-end branding is not just about aesthetics; it’s about storytelling, emotion, and trust that transcends visual identity...",
        },
        {
            frontImage: img3,
            title: "Exploring the Intersection of Design and Cutting-Edge Technology",
            author: "Alex Cho",
            date: "Jan 15, 2025",
            readTime: "5 min",
            content: "Merging design with emerging tech like AI and AR has transformed the way users interact with brands and platforms...",
        },
    ];

    return (
        <section className="w-full bg-black px-6 sm:px-20 py-20">
            {/* Custom heading + line */}
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
                    Work Samples
                </h2>
                <div className="flex-1 h-px bg-gray-700"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                    <WorkCard key={idx} {...post} />
                ))}
            </div>
        </section>

    );
}
