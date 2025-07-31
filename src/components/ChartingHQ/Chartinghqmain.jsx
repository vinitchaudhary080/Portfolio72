// src/components/ChartingHQ/Chartinghqmain.jsx
import React from "react";
import { useParams } from "react-router-dom";  // ← import useParams
import Heading from "./Heading";
import ImageSection from "./ImageSection";
import Summary from "./Summary";
import Impact from "./Impact";
import ProcessStep1 from "./ProcessStep1";
import Strucutre from "./Structure";
import Wireframecontent from "./WireframesContent";
import Wireframe from "./Wireframer";
import Images from "./Doubleimage";
import FullImages from "./Full";
import ScrollCard from "../ScrollCard";



export default function ChartingHqmain() {
 
 return (
    <div className="bg-black min-h-screen">
       <ScrollCard><Heading /></ScrollCard>
                  <ScrollCard><ImageSection /></ScrollCard>
                  <ScrollCard><Summary /></ScrollCard>
                  <ScrollCard><Images /></ScrollCard>
                  <ScrollCard><Impact /></ScrollCard>
                  <ScrollCard><ProcessStep1 /></ScrollCard>
                  <ScrollCard><Strucutre /></ScrollCard>
                  <ScrollCard><Wireframecontent /></ScrollCard>
                  <ScrollCard><Wireframe /></ScrollCard>
                 <ScrollCard><FullImages /></ScrollCard>
                  
      
    </div>
  );
}
