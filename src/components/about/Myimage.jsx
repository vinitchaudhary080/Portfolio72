import React from "react";
import myImage from "../../assets/Myformal.JPG";
import ScrollHero from "../ScrollHero";

export default function MyImage() {
  return (
    <section role="region" aria-label="Portfolio photo">
      <ScrollHero src={myImage} />
    </section>
  );
}
