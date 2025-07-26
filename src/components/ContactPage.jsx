// src/components/contact/ContactPage.jsx
import React from 'react'
import bgVideo from '../assets/contact-bg.mp4'
import { FaRegCommentDots } from "react-icons/fa";

export default function ContactPage() {
    return (
        <section className="relative bg-black text-white min-h-screen overflow-hidden md:py-40">
            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-20 py-24 flex flex-col lg:flex-row items-start gap-12">
                {/* Contact Info Panel */}
                <div className="flex-1 space-y-12 order-2 lg:order-1">
                    <h1 className="text-4xl sm:text-5xl font-light">Contact us</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="uppercase text-gray-400 text-xs mb-2">Email Address</h4>
                            <p className="text-lg">vinitchaudhary080@gmail.com</p>
                        </div>
                        <div>
                            <h4 className="uppercase text-gray-400 text-xs mb-2">Phone</h4>
                            <p className="text-lg">+91-8398020076</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="uppercase text-gray-400 text-xs mb-2">Address</h4>
                        <address className="not-italic text-lg space-y-1">
                            <div>Gurugram</div>
                            <div>Haryana 122103</div>
                            <div>India</div>
                        </address>
                    </div>
                </div>

                {/* Let’s‑Talk Card */}
                <div
                    className="
            w-full
            lg:w-1/2
            bg-black/40
            backdrop-blur-sm
            rounded-xl
            px-8
            py-12
            min-h-[300px]
            space-y-6
            mx-auto
            text-center
            order-1 lg:order-2
          "
                >
                    <h2 className="text-3xl sm:text-5xl font-light leading-snug mb-8 text-white">
                        “Every project starts with a conversation.”<br />
                        Let’s chat about yours today.
                    </h2>
                    <a
                        href="https://wa.me/918398020076"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        inline-flex items-center gap-2
        bg-white text-black
        px-6 py-3 rounded-md text-sm font-medium
        hover:scale-105 transition
      "
                    >
                        <FaRegCommentDots className="text-lg" />
                        Let’s talk
                    </a>
                </div>
            </div>
        </section>
    )
}
