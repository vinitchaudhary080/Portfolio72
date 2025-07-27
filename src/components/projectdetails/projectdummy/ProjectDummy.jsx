// src/components/projectdetails/projectdummy/ProjectDummy.jsx
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
import Images from "./ScriptEditorSection";
import FullImages from "./Full";

// 1️⃣ Import each project’s “main” component
import ProjectMain1 from "../../project1/Projectmain";    // for slug "user-centric-websites"
import ProjectMain2 from "../../project2/Projectmain2"; 
import Chartinghqmain from "../../ChartingHQ/Chartinghqmain"; 
import Alphamain from "../../alpha/Alphamain";
import Ramain from "../../radashboard/Ramain";

export default function ProjectDummy() {
  const { slug } = useParams();  // ← read the slug from the URL
  // 2️⃣ Choose which to render based on slug
  if (slug === "ChartingHQProject") {
    return <Chartinghqmain />;
  }
  else if (slug === "Apha-ExchangeProject") {
    return <Alphamain />;
  }

  return (
    <div className="bg-black min-h-screen">
      
    
      <Heading />
      <ImageSection />
      <Summary />
      <Impact />
      <ProcessStep1 />
      <Strucutre />
      <Wireframecontent />
      <Wireframe />
      <Images />
      <FullImages />
    </div>
  );
}
