// src/components/copartnerapp/Copartnerappmain.jsx
import React from "react";

import { useParams } from "react-router-dom";  // ← import useParams
import ScrollCard from "../ScrollCard";

import Heading             from "./Heading";
import ImageSection        from "./ImageSection";
import Summary             from "./Summary";
import Impact              from "./Impact";
import ProcessStep1        from "./ProcessStep1";
import Structure           from "./Strucutre";            // fixed typo
import WireframesContent   from "./WireframesContent";    // match file name
import Wireframer          from "./Wireframer";
import Doubleimage         from "./Doubleimage";          // match file name
import Full                from "./Full";


export default function Budgettreemain() {
  return (
    <div className="bg-black min-h-screen">
      <ScrollCard><Heading /></ScrollCard>
            <ScrollCard><ImageSection /></ScrollCard>
            <ScrollCard><Summary /></ScrollCard>
            <ScrollCard><Impact /></ScrollCard>
            <ScrollCard><ProcessStep1 /></ScrollCard>
            <ScrollCard><Structure /></ScrollCard>
            <ScrollCard><WireframesContent /></ScrollCard>
            <ScrollCard><Wireframer /></ScrollCard>
            <ScrollCard><Doubleimage /></ScrollCard>
            <ScrollCard><Full /></ScrollCard>
            
      
    </div>
  );
}
