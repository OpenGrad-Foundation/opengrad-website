import { BsDownload } from 'react-icons/bs';
import styles from './ImpactChhattisgarh.module.css';
import image from './image-8.webp';
import { AnimatedStat } from '../common/AnimatedStat';

export default function ImpactChhattisgarh() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          District Govt Partnership in MCB, Chattisgarh
        </h2>
        <p className={styles.description}>
          In partnership with the <span className={styles.bold}>Manendragarh-Chirmiri-Bharatpur (MCB) District Administration</span>, OpenGrad Foundation delivers dedicated support for <span className={styles.bold}>CUET UG and CUET PG entrance examinations</span> across schools and colleges in the district. These institutions are located in remote, naxal-affected regions with limited exposure and minimal access to higher education opportunities. Our programs aim to bridge this gap through structured preparation and guidance.
        </p>
      </div>

      {/* Large Image Placeholder */}
      <div className={styles.imageContainer}>
         <img 
           src={image} 
           alt="Large Group Photo: Students outside school" 
           className={styles.image}
         />
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <AnimatedStat limit={1500} label="Students reached" suffix="+" speed={10} numberClassName={styles.statNumber} labelClassName={styles.statLabel} start={500} />
        <AnimatedStat limit={14} label="Schools" speed={50} numberClassName={styles.statNumber} labelClassName={styles.statLabel} />
        <AnimatedStat limit={7} label="Colleges" speed={100} numberClassName={styles.statNumber} labelClassName={styles.statLabel} />
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h3 className={styles.ctaTitle}>
          Download our CHG Report
        </h3>
        <p className={styles.ctaSubtitle}>
          Impact numbers, results, and case studies.
        </p>
        <a href="https://drive.google.com/file/d/1aHxIREii3LBAoLmQDqaRZm5g3iPN3FNF/view?usp=sharing" target="_blank" className={styles.button}>
          <BsDownload size={18} />
          Download Report
        </a>
      </div>
    </section>
  );
}
