import styles from './Results.module.css';
import image from './image-14.jpg';

const Results = () => {
  return (
    <section className={styles.resultsSection}>
      <div className={styles.resultsGrid}>
        <div className={styles.imageContainer}>
          {/* Large square lighter gray background element */}
          <div className={styles.backgroundElement}></div>
          <div className={styles.imageWrapper}>
            <img 
              src={image} 
              alt="Classroom session" 
              className={styles.resultsImage}
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.resultsHeading}>Results that Speak</h2>
          <p className={styles.resultsText}>
            In CAT 2024, 100+ Hours of content, 110+ mentors, 400+ mock interviews → 112 admissions into IIMs & other top 20 B-schools
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
