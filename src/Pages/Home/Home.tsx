import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { OurPartners } from "../../Components/OurPartners/OurPartners";
import { CounterContainer } from "./Components/CounterContainer/CounterContainer";
//import {Header} from "../../Components/Header/Header";
//import { OurStory } from "./Components/OurStory/OurStory";
import { OurWorks } from "./Components/OurWorks/OurWorks";
//import { ProblemScenario } from "./Components/ProblemScenario/ProblemScenario";
//import { WhyOpengrad } from "./Components/WhyOpengrad/WhyOpengrad";
import { Technology } from "./Components/Technology/Technology";
import { StudentJourney } from "./Components/StudentJourney/StudentJourney";
import { Hero } from "./Components/Hero/Hero";
import { ProblemSection } from "./Components/ProblemSection/ProblemSection";
import { SolutionSection } from "./Components/SolutionSection/SolutionSection";
import { VoicesJourney } from "./Components/VoicesJourney/VoicesJourney";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.HomePageWrapper}>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CounterContainer />
      <Technology />
      <StudentJourney />
      <VoicesJourney />
      {/* <Header /> 
      <ProblemScenario />
      <WhyOpengrad /> */}
      {/* <OurStory /> */}
      <OurWorks />
      <OurPartners />
      {/* <button
        className={styles.redirectbtn}
        onClick={() =>
          window.open("https://forms.gle/P1tRLkUmo5VXkNBs8", "_blank")
        }
      >
        Partner with Opengrad
      </button> */}
      <Footer />
    </div>
  );
};
