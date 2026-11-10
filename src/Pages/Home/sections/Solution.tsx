import styles from "../Home.module.css";

const icon = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const pillars = [
  {
    title: "Top College Students Become Mentors",
    text: "Mentors from IIT Madras, DU, JNU and top B-schools who sat the same exams not long ago.",
    icon: (
      <svg viewBox="0 0 48 48" {...icon}>
        <g className={styles.solutionAccent}><circle cx="24" cy="13" r="3.5" /><path d="M24 4v2M17 7l1.5 1.5M31 7l-1.5 1.5" /><path d="M19 22a5 5 0 0 1 10 0" /></g>
        <circle cx="12" cy="29" r="3.5" /><circle cx="24" cy="29" r="3.5" /><circle cx="36" cy="29" r="3.5" />
        <path d="M5 40a7 7 0 0 1 14 0M17 40a7 7 0 0 1 14 0M29 40a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
  {
    title: "Real Exam Strategies, Not Generic Coaching",
    text: "What actually worked on exam day: how to plan, practise and attempt the paper.",
    icon: (
      <svg viewBox="0 0 48 48" {...icon}>
        <path d="M30 42H10V8h6M28 8h6v18" /><rect x="16" y="5" width="12" height="6" rx="1.5" />
        <path d="M15 19l2 2 3-3M24 20h6M15 28l2 2 3-3M24 29h4M15 36h7" />
        <circle cx="35" cy="36" r="7" className={styles.solutionBadge} /><path d="M32 36l2 2 4-4" stroke="#fff" />
      </svg>
    ),
  },
  {
    title: "Peer Guidance in a Language Students Understand",
    text: "Bilingual support, so no student is held back by English or jargon.",
    icon: (
      <svg viewBox="0 0 48 48" {...icon}>
        <path className={styles.solutionAccent} d="M12 4h22a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H22l-5 4v-4h-5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM15 10h16M15 14h10" />
        <circle cx="15" cy="30" r="4.5" /><circle cx="33" cy="30" r="4.5" />
        <path d="M6 44a9 9 0 0 1 18 0M24 44a9 9 0 0 1 18 0" />
      </svg>
    ),
  },
  {
    title: "Technology and Community at Scale",
    text: "One platform and one mentor community, reaching students across three states.",
    icon: (
      <svg viewBox="0 0 48 48" {...icon}>
        <rect x="11" y="11" width="26" height="26" rx="3" />
        <path d="M17 5v6M24 5v6M31 5v6M17 37v6M24 37v6M31 37v6M5 17h6M5 24h6M5 31h6M37 17h6M37 24h6M37 31h6" />
        <path className={styles.solutionAccent} d="M16 22l8-4 8 4-8 4zM19 24v4c3 2 7 2 10 0v-4" />
      </svg>
    ),
  },
];

export const Solution = () => (
  <section data-section="solution" className={`${styles.container} ${styles.solution}`}>
    <div className={styles.solutionCopy}>
      <p className={styles.eyebrow}>OUR SOLUTION</p>
      <h2>Those Who Crack the Exams Know What Works.</h2>
      <p className={styles.solutionLead}>
        OpenGrad turns this lived experience into a <span>scalable learning loop</span>.
      </p>
      <p>
        Students who were once aspirants come back as mentors, building a self-sustaining, peer-powered learning
        community. This is the layer that was missing between school and college.
      </p>
      <p className={styles.loop}>
        <span>Aspirant</span><i aria-hidden="true">→</i><span>Admitted</span><i aria-hidden="true">→</i><b>Mentor</b>
      </p>
      <p className={styles.loopNote}>
        <svg viewBox="0 0 24 24" aria-hidden="true" {...icon}>
          <path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" />
        </svg>
        and the loop begins again
      </p>
    </div>
    <ul className={styles.pillars}>
      {pillars.map((pillar) => (
        <li key={pillar.title}>
          <span aria-hidden="true">{pillar.icon}</span>
          <h3>{pillar.title}</h3>
          <p>{pillar.text}</p>
        </li>
      ))}
    </ul>
  </section>
);
