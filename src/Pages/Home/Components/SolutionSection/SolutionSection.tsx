import SubHeadings from "../../../../Components/subHeadings";
import styles from "./SolutionSection.module.css";
import { Boardsvg, Examsvg, Guidancesvg, Technologysvg } from "./svg";

export const SolutionSection = () => {
  return (
    <div className={styles.SolutionSectionWrapper}>
      <div className={styles.ContentWrapper}>
        <div className={styles.LeftContent}>
          <SubHeadings text="Our Solution" />
          <div className={styles.paras}>
            <p>
              Those who crack entrance exams know what works. OpenGrad turns this lived experience into a scalable learning loop
            </p>
            <p>
              The students who were once aspirants turn into mentors creating a self-sustaining, peer-powered learning community.
            </p>
          </div>
        </div>
        <div className={styles.RightContent}>
          <div className={styles.SolutionGrid}>
            <div className={styles.SolutionItem}>
              <Guidancesvg className={styles.IconImage} />
              <p>Top College Students Become mentors</p>
            </div>
            <div className={styles.SolutionItem}>
              <Examsvg className={styles.IconImage} />
              <p>Real Exam Strategies, Not Generic Coaching</p>
            </div>
            <div className={styles.SolutionItem}>
              <Boardsvg className={styles.IconImage} />
              <p>Peer Guidance in Language Students Understand</p>
            </div>
            <div className={styles.SolutionItem}>
              <Technologysvg className={styles.IconImage} />
              <p>Technology and Community at Scale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
