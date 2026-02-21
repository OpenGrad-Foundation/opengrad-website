import styles from './RealMentors.module.css';
import image from './image-13.png';

const RealMentors = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.textLeft}>
          <h2 className={styles.title}>Real Mentors, Real Journeys</h2>
          <p className={styles.description}>
            Not &quot;faculty,&quot; but students from IIMs, XLRI, FMS who know exactly how it feels to sit where you are
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.background}></div>
          <div className={styles.imageWrapper}>
            <img 
              src={image} 
              alt="Real Mentors" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealMentors;
