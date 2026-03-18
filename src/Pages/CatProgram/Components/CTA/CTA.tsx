import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <h2 className={styles.title}>Building India&apos;s peer-to-peer learning revolution.</h2>
      <p className={styles.description}>
       Click to Join for CAT’ 2026-2027. Currently open to students from Kerala; Pan-India enrollment coming soon. <br/>Please read the terms and conditions in the form description.
      </p>
      <button className={styles.button} onClick={() => {}} disabled>
        Applications Closed
      </button>
      {/* <p className={styles.deadline}>Forms for MBA Cohort closed</p> */}
    </section>
  );
};

export default CTA;
