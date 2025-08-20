// src/components/HeroSection.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/imagehero.svg' // your gradient/headphones image

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div
        className="
          relative z-10
          flex flex-col lg:flex-row
          items-end
          justify-between
          h-full
          px-6 sm:px-12
          pt-20
          pb-8   lg:pb-20
          mt-20 lg:mt-0
        "
      >
        {/* Left block */}
        <div className="flex-1 flex flex-col items-start text-white mb-8 lg:mb-0">
          <p className="italic text-sm sm:text-base mb-4">
            Hello, I’m Vinit Chaudhary
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight max-w-lg">
            I craft elegant, human‑centered interfaces <br className="hidden sm:block" />
            that drive real results.
          </h1>
        </div>

        {/* Right block */}
        <div className="flex-1 flex flex-col items-start lg:items-start text-white max-w-md">
          <p className="text-base sm:text-lg lg:text-xl mb-6">
            As a Senior UX/UI Designer, I partner with brands to transform ideas into
            seamless digital experiences that engage users and elevate your business.
          </p>
          <Link
            to="/works"
            className="
              inline-block
              border border-white text-white
              px-6 py-3 rounded-xl
              font-medium
              transition
              hover:bg-white hover:text-black
            "
          >
            Discover What I’ve Built&nbsp;&rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
