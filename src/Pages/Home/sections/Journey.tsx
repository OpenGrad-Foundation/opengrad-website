import styles from "../Home.module.css";
import hubImage from "../../../assets/revamp/home/students-practising-computer-based-mock-tests-with-headphone.webp";

const steps = [
  {
    title: "Foundations",
    text: "English, maths and the confidence to aim higher.",
    stage: "Class 11",
  },
  {
    title: "Intentionality & Career Discovery",
    text: "Assessments and counselling that turn interest into a clear goal.",
    stage: "Class 11",
  },
  {
    title: "Coaching",
    text: "200+ hours of classes, mock tests, vacation classes and bootcamps.",
    stage: "Class 12",
  },
  {
    title: "Applications & Admission Counselling",
    text: "Forms, documents and deadlines, then counselling, allotment and scholarships.",
    stage: "Class 12",
  },
  {
    title: "Post-Admission Support",
    text: "Hostels, relocation and mentoring into the first year of college.",
    stage: "After admission",
  },
];

const JourneyIcon = ({ step }: { step: number }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 48 48"
    fill="none"
    stroke="#034852"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {step === 0 && (
      <>
        <path d="M6 12c6-3 13-3 18 1v26c-5-4-12-4-18-1z" />
        <path d="M42 12c-6-3-13-3-18 1v26c5-4 12-4 18-1z" />
      </>
    )}
    {step === 1 && (
      <><circle cx="24" cy="24" r="17" /><path d="M30 18l-4 10-8 4 4-10z" /></>
    )}
    {step === 2 && (
      <><path d="M10 38l4-12 18-18 8 8-18 18z" /><path d="M28 12l8 8M10 38l12-4" /></>
    )}
    {step === 3 && (
      <><path d="M13 6h15l9 9v27H13z" /><path d="M28 6v9h9M19 29l4 4 8-9" /></>
    )}
    {step === 4 && (
      <><path d="M4 18l20-9 20 9-20 9z" /><path d="M12 22v9c7 6 17 6 24 0v-9M42 19v11" /></>
    )}
  </svg>
);

export const Journey = () => (
  <section id="our-model" data-section="journey" className={`${styles.container} ${styles.journey}`}>
    <div className={styles.journeyIntro}>
      <p className={styles.eyebrow}>THE STUDENT JOURNEY</p>
      <h2>From Class 11 to Campus</h2>
      <p>
        Five steps over two years, with the same people beside the student from the first class to the first semester.
      </p>
    </div>
    <div className={styles.stages} aria-hidden="true">
      <div>CLASS 11</div><div>CLASS 12</div><div>AFTER ADMISSION</div>
    </div>
    <ol className={styles.steps}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.step}>
          <div className={styles.stepIcon}>
            <JourneyIcon step={index} /><span>{index + 1}</span>
          </div>
          <div className={styles.stepCopy}>
            <span className={styles.mobileStage}>{step.stage}</span>
            <h3>{step.title}</h3><p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
    <div className={styles.hub}>
      <div className={styles.hubCopy}>
        <p className={styles.eyebrow}>OUR PLATFORM · OPENGRAD HUB</p>
        <h3>Every step is tracked on OpenGrad Hub</h3>
        <p>
          Built for government schools, with low data, shared devices and remote locations in mind. Classes, mock
          tests, registrations and admissions are tracked student by student.
        </p>
      </div>
      <img loading="lazy" decoding="async"
        src={hubImage}
        alt="Students practising computer-based mock tests with headphones at the Kasaragod bootcamp, Kerala"
      />
    </div>
  </section>
);
