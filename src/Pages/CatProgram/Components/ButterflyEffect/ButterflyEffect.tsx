import styles from './ButterflyEffect.module.css';
import image from './image-15.jpg';

const ButterflyEffect = () => {
  return (
    <section className={styles.butterflyEffect}>
      <div className={styles.grid}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>The Butterfly Effect</h2>
          <p className={styles.description}>
            95% of our aspirants return as mentors, bringing their peers along to lift the next generation
          </p>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.imageContainer}>
            <img 
              src={image} 
              alt="Classroom session" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButterflyEffect;
