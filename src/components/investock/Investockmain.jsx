// src/components/copartnerapp/Copartnerappmain.jsx
import React from "react";

import { useParams } from "react-router-dom";  // ← import useParams
import ScrollCard from "../ScrollCard";
import InvestockSEO from "../../seo/InvestockSEO";

import Heading             from "./Heading";
import ImageSection        from "./ImageSection";
import Summary             from "./Summary";
import Visual        from "./Visual";
import Doubleimage         from "./Doubleimage"; 
import Wireframe         from "./Wireframe";          // match file name
import Ux         from "./UxStrategy";  


export default function Copartnerapp() {
  return (
    <div className="bg-black min-h-screen">
      <InvestockSEO />
      <ScrollCard><Heading /></ScrollCard>
            <ScrollCard><ImageSection /></ScrollCard>
            <ScrollCard><Summary /></ScrollCard>
            <ScrollCard><Ux /></ScrollCard>
            <ScrollCard><Doubleimage /></ScrollCard>
            <ScrollCard><Visual /></ScrollCard>
            <ScrollCard><Wireframe /></ScrollCard>
           
            
      
    </div>
  );
}
