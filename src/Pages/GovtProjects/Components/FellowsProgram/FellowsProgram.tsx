import styles from './FellowsProgram.module.css';
import image from './newfellow.webp';
export default function FellowsProgram() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        OpenGrad Fellows for every school to ensure 10/10 delivery
      </h2>
      <div className={styles.grid}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <div className={styles.description}>
            <p>
              Higher education and competitive exams are new not only for students but also for schools and the system. Tracking progress, applications, allotments, and using tech platforms can be overwhelming.
            </p>
            
            <div className={styles.highlight}>
              <p>That&apos;s where <span className={styles.black}>OpenGrad Fellows</span> step in:</p>
              <ul className={styles.list}>
                <li>Bridge gaps in awareness, applications, and delivery</li>
                <li>Ensure transparency and smooth execution</li>
                <li>Guide students across the entire preparation journey</li>
                <li>Trained rigorously on systems, tech, and exam processes</li>
              </ul>
            </div>

            <p className={styles.italic}>
              Fellows make sure every student gets the right support at the right time throughout their academic journey.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className={styles.imageContainer}>
           <img 
             src={image} 
             alt="Mobile Video Call Interaction" 
             className={styles.image}
           />
        </div>
      </div>
    </section>
  );
}
