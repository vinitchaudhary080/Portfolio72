// src/components/cribonix/Cribonixmain.jsx
import React from "react";

import { useParams } from "react-router-dom";  // ← import useParams
import ScrollCard from "../ScrollCard";

import Heading             from "./Heading";
import ImageSection        from "./ImageSection";
import Summary             from "./Summary";          // fixed typo
import Wireframer          from "./Wireframer";
import Doubleimage         from "./Doubleimage";          // match file name
import Full                from "./Full";
import Full2               from "./Full2";
import Ux               from "./UxStrategy";

export default function Cribonixmain() {
  return (
    <div className="bg-black min-h-screen">
      <ScrollCard><Heading /></ScrollCard>
            <ScrollCard><ImageSection /></ScrollCard>
            <ScrollCard><Summary /></ScrollCard>
            <ScrollCard><Doubleimage /></ScrollCard>
            <ScrollCard><Ux /></ScrollCard>
            <ScrollCard><Wireframer /></ScrollCard>
            <Full />
            <Full2 />
      
    </div>
  );
}
