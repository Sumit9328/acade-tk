import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreUSPs from "./components/CoreUSPs";
import ProgramValue from "./components/ProgramValue";
import Curriculum from "./components/Curriculum";
import IndustryProjects from "./components/IndustryProjects";
import WhoShould from "./components/WhoShould";
import Faculties from "./components/Faculties";
import CareerServices from "./components/CareerServices";
import FeeStructure from "./components/FeeStructure";


function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        {/* Your remaining website */}

        <Hero/>
        <CoreUSPs/>
        <ProgramValue/>
        <Curriculum/>
        <IndustryProjects/>
        <WhoShould/>
        <Faculties/>
        <CareerServices/>
        <FeeStructure/>
      </div>
    </>
  );
}

export default App;
