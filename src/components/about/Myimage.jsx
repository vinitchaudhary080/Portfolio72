// src/components/about/MyImage.jsx
import React from "react";
import myImage from "../../assets/myimages 1.svg";
import ScrollHero from "../ScrollHero";

export default function MyImage() {
  return (
   <ScrollHero src={myImage} />
  );
}
