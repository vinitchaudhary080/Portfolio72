// src/components/about/ServicesSection.jsx
import React from "react";
import vertigoLogo  from "../../assets/Letter.svg";
import nextmoveLogo from "../../assets/Letter.svg";
import borderLogo   from "../../assets/Letter.svg";
import sitemarkLogo from "../../assets/Letter.svg";
import wavelessLogo from "../../assets/Letter.svg";
import delawareLogo from "../../assets/Letter.svg";
import snapshotLogo from "../../assets/Letter.svg";
import uturnLogo    from "../../assets/Letter.svg";

const SERVICES = [
  {
    title: "Vertigo",
    logo: vertigoLogo,
    desc: "To truly shine, you’ve got to radiate brilliance. Unleash your imaginative flair with Boulevard."
  },
  {
    title: "Nextmove",
    logo: nextmoveLogo,
    desc: "Standing apart requires being exceptional. Embrace your innovative side with Boulevard."
  },
  {
    title: "Border",
    logo: borderLogo,
    desc: "Dare to be remarkable if you want to make an impression. Embrace creativity with Boulevard."
  },
  {
    title: "Sitemark",
    logo: sitemarkLogo,
    desc: "Being extraordinary is the key to being noticed. Embrace your inventive spirit with Boulevard."
  },
  {
    title: "Waveless",
    logo: wavelessLogo,
    desc: "If you aim to be memorable, you must be exceptional. Dive into creativity with Boulevard."
  },
  {
    title: "Delaware",
    logo: delawareLogo,
    desc: "To make your mark, you must be outstanding. Let Boulevard ignite your creativity."
  },
  {
    title: "SnapShot",
    logo: snapshotLogo,
    desc: "Standing out demands being exceptional. Embrace creativity and choose Boulevard."
  },
  {
    title: "U‑Turn",
    logo: uturnLogo,
    desc: "If you want to be unique, you’ve got to be outstanding. Embrace creativity alongside Boulevard."
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 sm:px-12 mt-8 mb-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="
                border border-gray-700
                p-8
                lg:min-h-[300px]      
                flex flex-col items-center text-center
                transition-all duration-300 ease-in-out
                hover:bg-[#232323]
              "
            >
              <img src={s.logo} alt={s.title} className="h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
