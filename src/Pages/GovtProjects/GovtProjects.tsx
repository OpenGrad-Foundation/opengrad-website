'use client';
import Hero from "./Components/Hero/Hero";
import CorePillars from "./Components/CorePillars/CorePillars";
import OurApproach from "./Components/OurApproach/OurApproach";
import FellowsProgram from "./Components/FellowsProgram/FellowsProgram";
import OpenGradOS from "./Components/OpenGradOS/OpenGradOS";
import ImpactTamilNadu from "./Components/ImpactTamilNadu/ImpactTamilNadu";
import ImpactChhattisgarh from "./Components/ImpactChattisgarh/ImpactChhattisgarh";
import Testimonials from "./Components/Testimonials/Testimonials";
// import KnowledgeHub from "./Components/KnowledgeHub/KnowledgeHub";
import InstagramFeed2 from "./Components/InstagramFeed2/InstagramFeed2";
import {Footer} from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";

export default function GovtProjects() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* <Header /> */}
      <Hero />
      <CorePillars />
      <OurApproach />
      <FellowsProgram />
      <OpenGradOS />
      <ImpactTamilNadu />
      <ImpactChhattisgarh />
      <Testimonials />
      <InstagramFeed2 />
      {/* <KnowledgeHub /> */}
      <Footer />
    </main>
  );
}
