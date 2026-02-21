import styles from "./VoicesJourney.module.css";
import { QuotesSVG } from "./svg";
import SubHeadings from "../../../../Components/subHeadings";

const voices = [
  {
    quote:
      "OpenGrad has a sharp, high-impact vision backed by a highly motivated and perseverant team working in a very challenging space. Their openness to feedback, ability to refine action, and strong milestones achieved in a short time make their work truly commendable.",
    author: "Mohan Sundaram",
    designation: "CEO, Artilab Foundation",
    
  },
  {
    quote:
      "Education has been a defining force in my own journey, and OpenGrad truly understands its transformative power. What stands out is their full-circle approach, supporting students not just till admission, but well beyond.",
    author: "Puneet Pushkarna",
    designation: "General Partner, Solmark;",
    designation2: "Chairperson, TiE Singapore",
  },
  {
    quote:
      "The visionary young minds at OpenGrad are dedicated to a mission of creating state-of-the-art, free, and open-source coaching, breaking down barriers to premium education.",
    author: "Gayathri Swahar",
    designation: "Senior Director-The/Nudge,Institute",
  },
]

export const VoicesJourney = () => {
  return (
    <div className={styles.Container}>
      <SubHeadings text="Testimonials" />
      <div className={styles.VoicesWrapper}>
        {voices.map((voice, index) => (
          <div key={index} className={styles.VoiceCard}>
            <div className={styles.QuoteIcon}>
              <QuotesSVG />
            </div>
            <p className={styles.QuoteText}>{voice.quote}</p>
            <div className={styles.AuthorInfo}>
              <h3 className={styles.AuthorName}>{voice.author}</h3>
              <p className={styles.AuthorDesignation}>{voice.designation}</p>
              {voice.designation2 && <p className={styles.AuthorDesignation}>{voice.designation2}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
