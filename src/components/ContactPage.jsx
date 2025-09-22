// src/components/contact/ContactPage.jsx
import React from "react";
import bgVideo from "../assets/contact-bg.webm";
import { FaRegCommentDots } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      className="relative bg-black text-white min-h-screen overflow-hidden md:py-40"
      aria-labelledby="contact-heading"
    >
      {/* Background video (decorative) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-20 py-24 flex flex-col lg:flex-row items-start gap-12">
        {/* Contact Info Panel */}
        <div className="flex-1 space-y-12 order-2 lg:order-1">
          <h1 id="contact-heading" className="text-4xl sm:text-5xl font-light">
            Contact us
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="uppercase text-gray-400 text-xs mb-2">Email Address</h4>
              <p className="text-lg">
                <a
                  href="mailto:tishakakkar05@gmail.com"
                  className="underline decoration-white/20 hover:decoration-white/60 underline-offset-4"
                >
                  tishakakkar05@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="uppercase text-gray-400 text-xs mb-2">Phone</h4>
              <p className="text-lg">
                <a
                  href="tel:+919138607772"
                  className="underline decoration-white/20 hover:decoration-white/60 underline-offset-4"
                >
                  +91-9138607772
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="uppercase text-gray-400 text-xs mb-2">Address</h4>
            <address
              className="not-italic text-lg space-y-1"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div itemProp="addressLocality">Gurugram</div>
              <div>
                <span itemProp="addressRegion">Haryana</span> <span itemProp="postalCode">122103</span>
              </div>
              <div itemProp="addressCountry">India</div>
            </address>
          </div>
        </div>

        {/* Let’s-Talk Card */}
        <div
          className="
            w-full lg:w-1/2 bg-black/40 backdrop-blur-sm rounded-xl
            px-8 py-12 min-h-[300px] space-y-6 mx-auto text-center
            order-1 lg:order-2
          "
        >
          <h2 className="text-3xl sm:text-5xl font-light leading-snug text-white">
            “Every project starts with a conversation.”
          </h2>
          <p className="text-sm text-gray-300 italic">
            Have a brief? I’ll map scope, risks, and a first sprint plan in 48 hours.
          </p>

          <a
            href="https://wa.me/919138607772"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-xl border border-white/10
              px-5 py-3 text-sm font-light tracking-tight
              text-white backdrop-blur-sm
              bg-white/10 hover:bg-white/20
              transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-white/30
            "
            aria-label="Open WhatsApp chat with Tisha Kakkar"
          >
            <FaRegCommentDots className="text-base opacity-90" />
            Let’s talk&nbsp;→
          </a>
        </div>
      </div>
    </section>
  );
}
