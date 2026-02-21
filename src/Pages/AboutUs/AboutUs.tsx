import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { FoundersSection } from "./Components/FoundersSection/FoundersSection";
import { Header } from "./Components/Header/Header";
//import MilestoneSlider from "./Components/MilestoneSlider/MilestoneSlider";
import OurAdvisors from "../ourAdvisors";
import CEOLetterSection from "../../Components/CEOLetterSection";

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <FoundersSection />
      <CEOLetterSection />
      <div style={{ backgroundColor: '#ffffff', position: 'relative', zIndex: 1 }}>
        <OurAdvisors />
      </div>
      {/* <MilestoneSlider /> */}
      {/* <OurJourneys /> */}
      {/* <OurPartners /> */}
      <Footer />
    </div>
  );
};
