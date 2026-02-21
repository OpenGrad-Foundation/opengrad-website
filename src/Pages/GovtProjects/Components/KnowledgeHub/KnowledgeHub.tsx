import { BsSquare, BsCircle, BsTriangle } from 'react-icons/bs';
import styles from './KnowledgeHub.module.css';

export default function KnowledgeHub() {
  const articles = [
    {
      title: "From Village School to Law U",
      date: "August 2025",
      icon: BsSquare,
    },
    {
      title: "Tech as Equalizer",
      date: "August 2025",
      icon: BsCircle,
    },
    {
      title: "My Journey Through CLAT",
      date: "August 2025",
      icon: BsTriangle,
    },
    {
      title: "Public-Private Partnerships",
      date: "August 2025",
      icon: BsSquare,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Knowledge Hub</h2>
        <p className={styles.subtitle}>Stories & Insights</p>
      </div>

      <div className={styles.grid}>
        {articles.map((article, index) => (
          <div key={index} className={styles.article}>
            <div className={styles.iconContainer}>
              <article.icon size={64} className={styles.icon} />
            </div>
            <h3 className={styles.articleTitle}>
              {article.title}
            </h3>
            <p className={styles.articleDate}>
              {article.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
