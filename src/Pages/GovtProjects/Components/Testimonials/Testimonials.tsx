import styles from './Testimonials.module.css';
import image1 from './image-9.webp';
import image2 from './image-10.webp';
import image3 from './image-11.webp';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "OpenGrad brought higher-education support to our students for the first time, and their peer-driven, relatable approach is delivering outstanding results.",
      name: "Rahul Venkat IAS",
      title: "District Collector, MCB, Chhattisgarh",
      imageAlt: "Rahul Venkat IAS",
      imageSrc: image1
    },
    {
      quote: "OpenGrad transformed our classrooms, driving exponential growth in student results, confidence & ambition",
      name: "Laxmi Priya IAS",
      title: "Secretary- Adi Dravidar & Tribal Welfare Dept. Government of Tamil Nadu",
      imageAlt: "Laxmi Priya IAS",
      imageSrc: image2
    },
    {
      quote: "OpenGrad introduced me to law and connected me to TNNLU mentors who guided me all the way to Tamil Nadu National Law University",
      name: "Bharath",
      title: "Tamil Nadu National Law University(TNNLU), OpenGrad Batch of 2025",
      imageAlt: "Bharath",
      imageSrc: image3
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title1}>
          What our partners and students say
        </h2>
        <p className={styles.title2}>
          Voices from the field.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <div key={index} className={styles.testimonial}>
            <div className={styles.imageContainer}>
              <img 
                src={item.imageSrc} 
                alt={item.imageAlt} 
                className={styles.image}
              />
            </div>
            <blockquote className={styles.quote}>
              &quot;{item.quote}&quot;
            </blockquote>
            <div>
              <div className={styles.author}>{item.name}</div>
              <div className={styles.title}>{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
