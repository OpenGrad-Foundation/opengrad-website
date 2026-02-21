import { MapPin, GraduationCap, Certificate } from "@phosphor-icons/react";
import styles from './CorePillars.module.css';

const pillars = [
  {
    icon: Certificate,
    label: "Career Guidance & Mapping",
  },
  {
    icon: Certificate,
    label: <>Coaching &<br />Mentorship</>,
  },
  {
    icon: MapPin,
    label: "College Application & Allotment Support",
  },
  {
    icon: GraduationCap,
    label: <>After School<br />Readiness</>,
  },
];

export default function CorePillars() {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {pillars.map((pillar, index) => (
          <div key={index} className={styles.pillar}>
            <div className={styles.iconContainer}>
              <pillar.icon className={styles.icon} size={100} weight="fill" />
            </div>
            <h3 className={styles.title}>
              {pillar.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
