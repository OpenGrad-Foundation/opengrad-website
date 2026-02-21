import styles from './OurApproach.module.css';
import image1 from './image-2.webp';
import image2 from './image-3.webp';
import image3 from './image-4.webp';

export default function OurApproach() {
  const approaches = [
    {
      title: "Tech-first approach",
      description: "A combination of online classes and offline residential bootcamps. This is how we deliver high-impact coaching.",
      imageAlt: "Tech-first approach",
      imageSrc: image1
    },
    {
      title: "Mentor network.",
      description: "Network of top tier college students and recent alumni connecting with aspirants, boosting their morale & much needed exam prep hacks.",
      imageAlt: "Mentor network",
      imageSrc: image2
    },
    {
      title: "All-in-one platform.",
      description: "AI enabled career mapping, video streaming, mock simulations, and detailed analytics all at one place.",
      imageAlt: "All-in-one platform",
      imageSrc: image3
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {approaches.map((item, index) => (
          <div key={index} className={styles.approach}>
            <div className={styles.imageContainer}>
              <img 
                src={item.imageSrc} 
                alt={item.imageAlt} 
                className={styles.image}
              />
            </div>
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
