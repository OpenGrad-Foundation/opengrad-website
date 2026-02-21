import { BsDownload } from 'react-icons/bs';
import styles from './ImpactTamilNadu.module.css';
import image from './image-7.webp';
import { AnimatedStat } from '../common/AnimatedStat';

export default function ImpactTamilNadu() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>Projects</span>
        <h2 className={styles.title}>
          Govt Partnership in Tamil Nadu
        </h2>
        <p className={styles.description}>
          In partnership with the <span className={styles.bold}>Adi Dravidar & Tribal Welfare Department, Government of Tamil Nadu</span>, OpenGrad Foundation is driving end-to-end higher education initiatives across <span className={styles.bold}>132 schools</span>. With a strong network of Tamil-speaking mentors from top colleges, relatable Tamil content and workbooks, and dedicated fellows deployed in schools, we are ensuring last-mile delivery.
        </p>
      </div>

      {/* Image Placeholder */}
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt="Large Group Photo: Students outside school" 
          className={styles.image}
        />
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <AnimatedStat limit={6050} label="Students" suffix="+" speed={5} numberClassName={styles.statNumber} labelClassName={styles.statLabel} start={3000}/>
        <AnimatedStat limit={132} label="Schools" speed={10} numberClassName={styles.statNumber} labelClassName={styles.statLabel} />
        <AnimatedStat limit={35} label="Fellows" speed={20} numberClassName={styles.statNumber} labelClassName={styles.statLabel} />
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h3 className={styles.ctaTitle}>
          Download our Tamil Nadu Batch Report
        </h3>
        <p className={styles.ctaSubtitle}>
          Impact numbers, results, and case studies.
        </p>
        <button className={styles.button} onClick={() => window.open('https://drive.google.com/file/d/10rN59Yx9ALIs_Iz3lL9YZfO_pck3jK9c/view?usp=share_link', '_blank')}>
          <BsDownload size={18} />
          Download Report
        </button>
      </div>
    </section>
  );
}
