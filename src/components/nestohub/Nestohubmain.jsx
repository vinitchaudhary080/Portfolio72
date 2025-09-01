// src/components/alpha/Alphamain.jsx
import React from "react";

import { useParams } from "react-router-dom";  // ← import useParams
import ScrollCard from "../ScrollCard";

import Heading             from "./Heading";
import ImageSection        from "./ImageSection";
import Summary             from "./Summary";


import Structure           from "./Strucutre";            // fixed typo
import Visual           from "./Visual";
import Doubleimage         from "./Doubleimage";          // match file name
import Full                from "./Full";
import Full2               from "./Full2";
import Builder               from "./Builder";
import Buildercopy               from "./Builder copy";
import Broker               from "./Broker";
import Brokercopy               from "./Broker copy";
import Ux               from "./UxStrategy";

export default function Alphamain() {
  return (
    <div className="bg-black min-h-screen">
      <ScrollCard><Heading /></ScrollCard>
            <ScrollCard><ImageSection /></ScrollCard>
            <ScrollCard><Summary /></ScrollCard>
            <ScrollCard><Doubleimage /></ScrollCard>
            <ScrollCard><Ux /></ScrollCard>
           <ScrollCard><Structure /></ScrollCard>
            <ScrollCard><Visual /></ScrollCard>
           <ScrollCard><Full /></ScrollCard>
            <ScrollCard><Full2 /></ScrollCard>
            <ScrollCard><Builder /></ScrollCard>
            <ScrollCard><Buildercopy /></ScrollCard>
            <ScrollCard><Broker /></ScrollCard>
            <ScrollCard><Brokercopy /></ScrollCard>
      
    </div>
  );
}
