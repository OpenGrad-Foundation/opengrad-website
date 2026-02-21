import styles from './Hero.module.css';
import image from './image-12.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>India's Best CAT Coaching Ever</h1>
      <h2 className={styles.subtitle}>India&apos;s most successful MBA program!</h2>
      <p className={styles.description}>
        Cracking the CAT isn&apos;t just about formulas and shortcuts. It&apos;s about believing you belong at the IIMs.
        At OpenGrad, you don&apos;t just get classes. You get mentors who were once in your shoes - small-town students,
        first-gen learners, under-resourced dreamers, who are now at India&apos;s best B-schools.
      </p>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt="Classroom session" 
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
