import styles from './Hero.module.css';
import image from './image-1.webp';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.span1}>Building the career layer</span> <br />
          <span className={styles.span2}>for India&apos;s government schools.</span>
        </h1>
      </div>
      
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt="Classroom session" 
          className={styles.image}
        />
      </div>
    </section>
  );
}
