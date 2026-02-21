import SubHeadings from "../../../../Components/subHeadings";
import styles from "./ProblemScenario.module.css";
import LOA from "./assets/LOA.png";
import LOM from "./assets/LOM.png";
import accessability from "./assets/accessability.png";
import finance from "./assets/finance.png";
import graph from "./assets/graphmode.png";
type Props = {
  image: string;
  pra: string;
};

export const ProblemScenario = () => {
  return (
    <div className={styles.ProblemScenarioWrapper}>
      <div className={styles.heading}>
        {" "}
        <SubHeadings text="Rebuilding Online Education " />
        <p>
          Confronting an Exploitive Industry to Redistribute Power and
          Opportunity to Millions of Aspirants
        </p>
      </div>
      <div className={styles.DetailSection}>
        <div className={styles.GridSetWrapper}>
          <GridSet image={LOA} pra={"Awareness"} />
          <GridSet image={LOM} pra={"Lack of Mentors"} />
          <GridSet image={accessability} pra={"Accessibility"} />
          <GridSet image={finance} pra={"Affordability"} />
        </div>
        <div className={styles.CircularAnimationWrapper}>
          <img src={graph} alt="" />
        </div>
      </div>
    </div>
  );
};

const GridSet = ({ image, pra }: Props) => {
  return (
    <div className={styles.GrifSet}>
      <img src={image} alt="" />
      <p>{pra}</p>
    </div>
  );
};
