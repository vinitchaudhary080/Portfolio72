// src/components/work/Workmain.jsx
import React from "react";
import { useParams } from "react-router-dom";  // ← import useParams
import Heading from "./Heading";

export default function Workmain() {
 

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <h2 className="text-2xl">Work Project </h2>
    </div>
      <Heading />
      
    </div>
  );
}