// src/components/copartnerapp/Copartnerappmain.jsx
import React from "react";

import { useParams } from "react-router-dom";  // ← import useParams
import BudgettreeSEO from "../../seo/BudgettreeSEO";
import ScrollCard from "../ScrollCard";

import Heading             from "./Heading";
import ImageSection        from "./ImageSection";
import Summary             from "./Summary";
import Structure           from "./Strucutre";            // fixed typo
import Wireframer          from "./Wireframer";
import Doubleimage         from "./Doubleimage";          // match file name
import Full                from "./Full";
import Ux                from "./UxStrategy";


export default function Budgettreemain() {
  return (
    <div className="bg-black min-h-screen">
      <BudgettreeSEO />
      <ScrollCard><Heading /></ScrollCard>
            <ScrollCard><ImageSection /></ScrollCard>
            <ScrollCard><Summary /></ScrollCard>
            <ScrollCard><Doubleimage /></ScrollCard>
             <ScrollCard><Ux /></ScrollCard>
           
            <ScrollCard><Structure /></ScrollCard>
            
            <ScrollCard><Wireframer /></ScrollCard>
            <Full />
            
      
    </div>
  );
}
