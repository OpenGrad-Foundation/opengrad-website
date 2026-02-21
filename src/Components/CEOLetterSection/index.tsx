import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const CEOLetterSection: React.FC = () => {
  return (
    <section className={styles.ceoSection}>
      <div className={styles.container}>
        <div className={styles.personWrapper}>
          {/* Placeholder for person image */}
          {/* <div className={styles.personImagePlaceholder} /> */}
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            A Letter from Our <br /> CEO
          </h1>
          <p className={styles.description}>
            Read about our team's commitment and how we're building OpenGrad, with governments and communities to help every learner move ahead.
          </p>
          <Link to="/ceo-letter" className={styles.readButton}>
            Read Sahil's Letter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CEOLetterSection;
