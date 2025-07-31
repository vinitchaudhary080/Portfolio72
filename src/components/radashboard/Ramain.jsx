// src/components/radashboard/Ramain.jsx
import React from "react";
import { useParams } from "react-router-dom";

// pull ScrollCard up one level
import ScrollCard from "../ScrollCard";

import Heading           from "./Heading";
import ImageSection      from "./ImageSection";
import Summary           from "./Summary";
import Impact            from "./Impact";
import ProcessStep1      from "./ProcessStep1";
import Structure         from "./Strucutre";
import WireframesContent from "./WireframesCountent";
import Wireframer        from "./Wireframer";
import Doubleimage       from "./Doubleimage";
import Full              from "./Full";

export default function Ramain() {
  const { slug } = useParams();

  return (
    <div className="bg-black min-h-screen">
      <ScrollCard><Heading /></ScrollCard>
      <ScrollCard><ImageSection /></ScrollCard>
      <ScrollCard><Summary /></ScrollCard>
      <ScrollCard><Doubleimage /></ScrollCard>
      <ScrollCard><Impact /></ScrollCard>
      <ScrollCard><ProcessStep1 /></ScrollCard>
      <ScrollCard><Structure /></ScrollCard>
      <ScrollCard><WireframesContent /></ScrollCard>
      <ScrollCard><Wireframer /></ScrollCard>
      <ScrollCard><Full /></ScrollCard>
    </div>
  );
}
