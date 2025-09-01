// src/components/ChartingHQ/Chartinghqmain.jsx
import React from "react";
import { useParams } from "react-router-dom";  // ← import useParams
import Heading from "./Heading";
import ImageSection from "./ImageSection";
import Summary from "./Summary";

import Visual from "./Visual";
import Ux from "./UxStrategy";


import Images from "./Doubleimage";

import ScrollCard from "../ScrollCard";



export default function ChartingHqmain() {
 
 return (
    <div className="bg-black min-h-screen">
                 <ScrollCard><Heading /></ScrollCard>
                  <ScrollCard><ImageSection /></ScrollCard>
                  <ScrollCard><Summary /></ScrollCard>
                  <ScrollCard><Ux /></ScrollCard>
                  <ScrollCard><Visual /></ScrollCard>
                  <ScrollCard><Images /></ScrollCard>
                  
                  
                  
      
    </div>
  );
}
