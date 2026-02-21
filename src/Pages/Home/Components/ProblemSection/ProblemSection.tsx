import SubHeadings from "../../../../Components/subHeadings";
import { Sheetsvg, Buildsvg, Careersvg, Booksvg, Moneysvg } from "./svg";
import styles from "./ProblemSection.module.css";


export const ProblemSection = () => {
  return (
    <div className={styles.ProblemSectionWrapper}>
      <div className={styles.heading}>
        <SubHeadings text="The Problem" />
        <p className={styles.subPara}>
          Nearly <span>3 out of 4 </span> students aged 18-23 do not enter higher education after school. <br/>It is not due to lack of potential, but because the system is unfair.
        </p>
      </div>
      <div className={styles.ProblemIconsGrid}>
        <div className={styles.ProblemItem}>
          <div className={styles.IconPlaceholder}>
             <Sheetsvg className={styles.IconImage} />
          </div>
          <p>Entrance Exams Decide Outcomes</p>
        </div>
        <div className={styles.ProblemItem}>
          <div className={`${styles.IconPlaceholder} ${styles.LargerIcon}`} >
             <Booksvg className={styles.IconImage} />
          </div>
          <p>Schools Don't Teach Exam Syllabi</p>
        </div>
        <div className={styles.ProblemItem}>
          <div className={`${styles.IconPlaceholder} ${styles.LargerIcon}`}>
             <Careersvg className={styles.IconImage} />
          </div>
          <p>Low Career Awareness</p>
        </div>
        <div className={styles.ProblemItem}>
          <div className={styles.IconPlaceholder}>
             <Buildsvg className={styles.IconImage} />
          </div>
          <p>Weak Govt. School Foundations</p>
        </div>
        <div className={styles.ProblemItem}>
          <div className={styles.IconPlaceholder}>
             <Moneysvg className={styles.IconImage} />
          </div>
          <p>Coaching is Expensive & Opaque</p>
        </div>
      </div>
    </div>
  );
};
