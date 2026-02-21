import { Notebook, Robot, Chats } from '@phosphor-icons/react';
import styles from './OpenGradOS.module.css';
import image from './image-6.webp';
export default function OpenGradOS() {
  const features = [
    {
      icon: Notebook,
      title: "Student Friendly Platform:",
      description: "With live & recorded lectures, mocks and detailed analytics"
    },
    {
      icon: Robot,
      title: "AI Career Discovery:",
      description: "Personalized pathways and guidance based on aptitude and interests"
    },
    {
      icon: Chats,
      title: "AI Communication Trainer:",
      description: "Practice interviews, communication drills, and instant feedback"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          OpenGrad OS: Infrastructure for Bharat&apos;s Next Generation
        </h2>
        <p className={styles.description}>
          A low-bandwidth, mobile-first education stack designed for <span className={styles.bold}>career discovery, entrance preparation, and real-time reporting</span>. Built to serve <span className={styles.bold}>students, schools, fellows, and administrators</span> across states.
        </p>
      </div>

      {/* Main OS Image */}
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt="Classroom session" 
          className={styles.image}
        />
      </div>

      {/* Features Grid */}
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.iconContainer}>
              <feature.icon className={styles.icon} size={32} weight="fill" />
            </div>
            <h3 className={styles.featureTitle}>
              {feature.title}
            </h3>
            <p className={styles.featureDescription}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
