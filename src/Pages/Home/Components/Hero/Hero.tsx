import styles from "./Hero.module.css";
import image from "./OpenGradHero.webp";

export const Hero = () => {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.TopBanner}>
        <h1 className={styles.Title}>
          <span className={`${styles.Underline} ${styles.Underline}`}>Democratizing</span>{" "} College Access as a Community
          <br />
          <span className={styles.Underline}></span>
        </h1>
      </div>
      <div className={styles.ImageSection}>
        <picture>
          <source srcSet={image} type="image/webp" />
          <img src={image} alt="Hero" className={styles.HeroImage} />
        </picture>
      </div>
      <div className={styles.BottomBanner}>
        <p className={styles.BottomText}>
          We combine technology and community to expand access, build awareness,
          and deliver mentorship, thereby unlocking 10x better career outcomes
          after school.
        </p>
      </div>
    </div>
  );
};
