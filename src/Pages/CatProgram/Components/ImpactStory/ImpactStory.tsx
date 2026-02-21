import styles from './ImpactStory.module.css';
import image from './image-16.jpg';
import { BsDownload } from 'react-icons/bs';

const ImpactStory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.textSection}>
          <h2 className={styles.heading}>Impact That Inspires</h2>
          <p className={styles.paragraph}>
            Girls in my family are rarely encouraged to study beyond school, and the pressure to stop and get married was constant. But I wanted more.
            Through OpenGrad Foundation, I first learned about MBA and the IIMs. That gave me hope that this dream was possible. The mentors stood by
            me, guided me, and believed in me when I doubted myself.
          </p>
          <p className={styles.quote}>
            Even after failing once, I refused to settle for less. Today, as a student at IIM Kashipur, I know I&apos;ve broken barriers. For me, this is proof that with the
            right support, girls like me can dream and achieve big.&rdquo;
          </p>
          <p className={styles.name}>Asma K K (MBA&apos;27, IIM Kashipur)</p>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src={image} 
            alt="Classroom session" 
            className={styles.image}
          />
        </div>
      </div>
      {/* https://drive.google.com/uc?export=download&id=1DC_IIlbBmXi-SgLk0zFxHhCFQ4xSwgFf */}
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => window.open('https://drive.google.com/file/d/1DC_IIlbBmXi-SgLk0zFxHhCFQ4xSwgFf/view?usp=sharing', '_blank')}>
          <BsDownload size={18} />
          Download Full report
        </button>
      </div>
    </section>
  );
};

export default ImpactStory;
