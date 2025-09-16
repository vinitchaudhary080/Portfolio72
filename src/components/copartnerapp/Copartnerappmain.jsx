// src/components/copartnerapp/Copartnerappmain.jsx
import React from "react";

import { useParams } from "react-router-dom";  // ← import useParams
import ScrollCard from "../ScrollCard";
import CopartnerAppSEO from "../../seo/CopartnerAppSEO";

import Heading             from "./Heading";
import ImageSection        from "./ImageSection";
import Summary             from "./Summary";
import Visual        from "./Visual";
import Doubleimage         from "./Doubleimage"; 
import Wireframe         from "./Wireframe";   
import Ux         from "./UxStrategy";        // match file name



export default function Copartnerapp() {
  return (
    <div className="bg-black min-h-screen">
      <CopartnerAppSEO />
      <ScrollCard><Heading /></ScrollCard>
            <ScrollCard><ImageSection /></ScrollCard>
            <ScrollCard><Summary /></ScrollCard>
            <ScrollCard><Doubleimage /></ScrollCard>
            <ScrollCard><Ux /></ScrollCard>
            <ScrollCard><Visual /></ScrollCard>
            <ScrollCard><Wireframe /></ScrollCard>
           
            
      
    </div>
  );
}
