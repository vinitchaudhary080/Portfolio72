// src/components/alpha/Alphamain.jsx
import React from "react";

import { useParams } from "react-router-dom";  // ← import useParams
import ScrollCard from "../ScrollCard";

import Heading             from "./Heading";
import Showcaseimage       from "./ImageSection";
import Summary             from "./Summary";
import Visualhighlights    from "./Visual";
import Showcase            from "./Doubleimage";
import Shcase           from "./shcase";
import Ux           from "./UxStrategy";

export default function Alphamain() {
  return (
    <div className="bg-black min-h-screen">
      <ScrollCard><Heading /></ScrollCard>
                 <ScrollCard><Showcaseimage /></ScrollCard>
                 <ScrollCard><Summary /></ScrollCard>
                 <ScrollCard><Ux /></ScrollCard>
                 <ScrollCard><Visualhighlights /></ScrollCard>
                <ScrollCard><Showcase /></ScrollCard>
                  <ScrollCard><Shcase /></ScrollCard>
           
      
    </div>
  );
}
