import React from 'react';
import image from "../assets/image.jpg";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        {/* Left (Typing Text) */}
        <div className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide mb-2 sm:absolute sm:top-1/2 sm:left-6 sm:-translate-y-1/2 sm:mb-0 sm:text-left whitespace-nowrap">
          <TypeAnimation
            sequence={[
              'LOS ANGELES BASED',
              2000,
              'Senior UI/UX Designer',
              2000,
              'Product Thinker',
              2000,
              'UX Research Specialist',
              2000,
            ]}
            speed={200}
            repeat={Infinity}
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Vinit Chaudhary<sup className="text-sm">®</sup>
        </h1>

        {/* Right (Typing Text) */}
        <div className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide mt-2 sm:absolute sm:top-1/2 sm:right-6 sm:-translate-y-1/2 sm:mt-0 sm:text-right whitespace-nowrap">
          <TypeAnimation
            sequence={[
              'CREATIVE DIRECTOR',
              2000,
              'UX Strategist',
              2000,
              'Figma Expert',
              2000,
              'AI-Driven Designer',
              2000,
            ]}
            speed={200}
            repeat={Infinity}
          />
        </div>
      </div>

      {/* Learn More */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-300 font-medium opacity-90">
        / Learn more about us ↓
      </div>
    </section>
  );
}
