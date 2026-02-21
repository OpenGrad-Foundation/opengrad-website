import styles from './Stats.module.css';
import { AnimatedStat } from '../common/AnimatedStat';

const Stats = () => {
  const stats = [
    { limit: 200, suffix: '+', label: 'Mentors from IIMs & other Top 20 B-schools' },
    { limit: 580, suffix: '', label: 'Students over last 2 cohorts' },
    { limit: 200, suffix: '+', label: 'Individual top 20 B-school interview calls' },
    { limit: 167, suffix: '', label: 'Conversions to IIMs & other top 20 B-school' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <AnimatedStat
            key={index}
            limit={stat.limit}
            label={stat.label}
            suffix={stat.suffix}
            speed={20}
            numberClassName={styles.statNumber}
            labelClassName={styles.statLabel}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
