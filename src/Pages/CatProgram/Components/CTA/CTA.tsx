import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <h2 className={styles.title}>Building India&apos;s peer-to-peer learning revolution.</h2>
      <p className={styles.description}>
       Click to Join for CAT’ 2026. Currently open to students from Kerala; Pan-India enrollment coming soon. Please read the terms and conditions in the form description.
      </p>
      <button className={styles.button} onClick={() => window.open('https://forms.gle/FdHNwrScU1FusEd58', '_blank')}>
        Applications Open
      </button>
      <p className={styles.deadline}>Deadline: 28th February 2026, 11:59 PM IST</p>
    </section>
  );
};

export default CTA;
