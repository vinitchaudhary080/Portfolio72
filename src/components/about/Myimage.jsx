// src/components/about/MyImage.jsx
import React from "react";
import myImage from "../../assets/myimages.JPG";
import ScrollHero from "../ScrollHero";

export default function MyImage() {
  return (
   <ScrollHero src={myImage} />
  );
}
