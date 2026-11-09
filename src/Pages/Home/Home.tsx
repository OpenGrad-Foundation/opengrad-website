import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { NewsletterBand } from "../../Components/NewsletterBand/NewsletterBand";
import { OurPartners } from "../../Components/OurPartners/OurPartners";
import { DONATE_URL } from "../../Components/siteLinks";
import { Journey } from "./sections/Journey";
import styles from "./Home.module.css";
import heroImage from "../../assets/revamp/home/opengrad-students-and-mentors-holding-up-phones-at-a-communi.webp";
import tamilNaduMap from "../../assets/revamp/home/map-of-tamil-nadu.webp";
import chhattisgarhMap from "../../assets/revamp/home/map-of-chhattisgarh.webp";
import keralaMap from "../../assets/revamp/home/map-of-kerala.webp";
import tamilNaduImage from "../../assets/revamp/home/opengrad-fellows-with-the-district-collector-cuddalore.webp";
import chhattisgarhImage from "../../assets/revamp/home/students-taking-cuet-mocks-in-bijapur-chhattisgarh.webp";
import keralaImage from "../../assets/revamp/home/a-smart-board-class-at-the-palakkad-residential-bootcamp-ker.webp";
import evangelinImage from "../../assets/revamp/home/portrait-of-evangelin-rachel.webp";
import mohanImage from "../../assets/revamp/home/portrait-of-mohan-sundaram.webp";
import puneetImage from "../../assets/revamp/home/portrait-of-puneet-pushkarna.webp";
import gayathriImage from "../../assets/revamp/home/portrait-of-gayathri-swahar.webp";
import facultyImage from "../../assets/revamp/home/a-faculty-member-teaching-at-the-thiruvananthapuram-bootcamp.webp";
import fellowshipImage from "../../assets/revamp/home/an-opengrad-fellow-with-class-12-students-in-a-cuddalore-cla.webp";
import donateImage from "../../assets/revamp/home/students-working-through-practice-papers-at-the-salem-bootca.webp";

const states = [
  {
    name: "Tamil Nadu",
    map: tamilNaduMap,
    image: tamilNaduImage,
    alt: "OpenGrad fellows with the District Collector, Cuddalore",
    title: "The Tamil Nadu Project",
    text: "Government schools across Cuddalore and Salem.",
    href: "/tamil-nadu",
  },
  {
    name: "Chhattisgarh",
    map: chhattisgarhMap,
    image: chhattisgarhImage,
    alt: "Students taking CUET mocks in Bijapur, Chhattisgarh",
    title: "Bijapur, Chhattisgarh",
    text: "A district-wide programme for government school students, run with the district administration.",
    href: "/chhattisgarh",
  },
  {
    name: "Kerala",
    map: keralaMap,
    image: keralaImage,
    alt: "A smart-board class at the Palakkad residential bootcamp, Kerala",
    title: "A Statewide Rollout",
    text: "Across 14 districts, with the SC & ST Development Department.",
    href: "/kerala",
  },
];

const advisors = [
  {
    name: "Mohan Sundaram",
    image: mohanImage,
    quote: "“OpenGrad has a sharp, high-impact vision backed by a highly motivated and perseverant team working in a very challenging space.”",
    role: "CEO, Artilab Foundation",
  },
  {
    name: "Puneet Pushkarna",
    image: puneetImage,
    quote: "“What stands out is their full-circle approach, supporting students not just till admission, but well beyond.”",
    role: "General Partner, Solmark; Chairperson, TiE Singapore",
  },
  {
    name: "Gayathri Swahar",
    image: gayathriImage,
    quote: "“The visionary young minds at OpenGrad are dedicated to a mission of creating state-of-the-art, free, and open-source coaching, breaking down barriers to premium education.”",
    role: "Senior Director, The/Nudge Institute",
  },
];

const opportunities = [
  {
    title: "Join as Faculty",
    image: facultyImage,
    alt: "A faculty member teaching at the Thiruvananthapuram bootcamp, Kerala",
    text: "Teach a subject you know, live online or at a residential bootcamp.",
    action: "Apply to teach →",
    href: "/contact?topic=faculty",
  },
  {
    title: "Join the Fellowship",
    image: fellowshipImage,
    alt: "An OpenGrad fellow with Class 12 students in a Cuddalore classroom",
    text: "Spend a year as the trusted person in a government school.",
    action: "Apply for the Fellowship →",
    href: "/contact?topic=fellowship",
  },
  {
    title: "Donate",
    image: donateImage,
    alt: "Students working through practice papers at the Salem bootcamp",
    text: "Fund coaching, bootcamps and admission support for a first-generation student.",
    action: "Donate now →",
    href: DONATE_URL,
  },
];

export const Home = () => (
  <div className={styles.page}>
    <Navbar />
    <section data-section="hero" className={styles.hero}>
      <h1>Building a <span>Career Layer</span> for India’s Public Education System</h1>
      <img src={heroImage} alt="OpenGrad students and mentors holding up phones at a community event" />
      <p>
        OpenGrad builds the missing career layer in schools, working alongside governments to create a public
        education system that supports every student’s journey from school to college.
      </p>
    </section>

    <section
      data-section="numbers"
      aria-label="OpenGrad in numbers"
      className={`${styles.container} ${styles.numbers}`}
    >
      <div className={styles.numbersRow}>
        <div className={styles.stateCount}>
          <div className={styles.maps}>
            {states.map((state) => (
              <div key={state.name}>
                <img loading="lazy" decoding="async" src={state.map} alt={`Map of ${state.name}`} />
                <div>{state.name}</div>
              </div>
            ))}
          </div>
          <p><b>States</b></p>
        </div>
        <div className={styles.stat}>
          <strong>300+</strong><p>Government schools</p>
        </div>
        <div className={styles.stat}>
          <strong>80%</strong><p>College conversions</p>
        </div>
      </div>
    </section>

    <section data-section="problem" className={styles.problem}>
      <div className={`${styles.container} ${styles.problemInner}`}>
        <div className={styles.problemCopy}>
          <p className={styles.eyebrow}>THE PROBLEM</p>
          <h2>Talent Is Everywhere.<br />The Path Isn’t.</h2>
          <p>
            It isn’t a lack of potential. It’s a missing layer between school and college: no one to explain the
            entrance exams, the coaching or the scholarships meant for these students.
          </p>
        </div>
        <div className={styles.problemGraphic}>
          <div className={styles.problemStat}>
            <strong>70%</strong>
            <p>of young Indians aged 18–23 are <span>not in college</span></p>
          </div>
          <div className={styles.people} aria-hidden="true">
            {Array.from({ length: 10 }, (_, index) => (
              <svg key={index} viewBox="0 0 40 72" className={index >= 7 ? styles.enrolled : undefined}>
                <circle cx="20" cy="11" r="10" />
                <path d="M4 70V38c0-9 7-16 16-16s16 7 16 16v32z" />
              </svg>
            ))}
          </div>
          <div className={styles.legend}>
            <span>Not enrolled in higher education</span><span>Enrolled</span>
          </div>
          <p className={styles.source}>
            Source: AISHE 2023–24, Ministry of Education (gross enrolment ratio 30%)
          </p>
        </div>
      </div>
    </section>

    <Journey />

    <section id="where-we-work" data-section="states" className={`${styles.container} ${styles.states}`}>
      <h2>Our Initiatives Across States</h2>
      <p className={styles.statesIntro}>
        We work with state governments and district administrations, inside their schools, on their timelines.
      </p>
      <div className={styles.stateCards}>
        {states.map((state) => (
          <Link key={state.name} to={state.href} className={styles.stateCard}>
            <img loading="lazy" decoding="async" src={state.image} alt={state.alt} />
            <div className={styles.stateCardCopy}>
              <p className={styles.stateName}>{state.name}</p>
              <h3>{state.title}</h3>
              <p>{state.text}</p>
              <span className={styles.learnMore}>Learn More -&gt;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section data-section="voices" className={styles.voices}>
      <div className={`${styles.container} ${styles.voicesInner}`}>
        <h2>In Their Words</h2>
        <div className={styles.studentVoice}>
          <img loading="lazy" decoding="async" src={evangelinImage} alt="Portrait of Evangelin Rachel" />
          <figure className={styles.studentCopy}>
            <div className={styles.quoteMark} aria-hidden="true">“</div>
            <p className={styles.eyebrow}>STUDENT VOICE · TAMIL NADU</p>
            <blockquote>
              The mentors were there at every step: bootcamp, admissions, and even after we reached college.
            </blockquote>
            <figcaption>
              <strong>Evangelin Rachel</strong> · ADW Punnam School, Karur<br />
              Topped CLAT, CUET UG and NCET across the batch. Now at the National Forensic Sciences University, Delhi.
            </figcaption>
          </figure>
        </div>
        <div className={styles.advisors}>
          {advisors.map((advisor) => (
            <figure key={advisor.name}>
              <img loading="lazy" decoding="async" src={advisor.image} alt={`Portrait of ${advisor.name}`} />
              <blockquote>{advisor.quote}</blockquote>
              <figcaption><strong>{advisor.name}</strong><p>{advisor.role}</p></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section id="get-involved" data-section="get-involved" className={styles.getInvolved}>
      <div className={`${styles.container} ${styles.involvedInner}`}>
        <div className={styles.involvedHeading}>
          <div>
            <p className={styles.eyebrow}>GET INVOLVED</p>
            <h2>Help the Next Student Get There</h2>
          </div>
          <p>Something else in mind? <Link to="/contact">Contact us</Link></p>
        </div>
        <div className={styles.opportunities}>
          {opportunities.map((item) => {
            const content = (
              <>
                <img loading="lazy" decoding="async" src={item.image} alt={item.alt} />
                <div className={styles.opportunityCopy}>
                  <h3>{item.title}</h3><p>{item.text}</p><span>{item.action}</span>
                </div>
              </>
            );
            return item.href === DONATE_URL ? (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className={styles.opportunity}>
                {content}
              </a>
            ) : (
              <Link key={item.title} to={item.href} className={styles.opportunity}>{content}</Link>
            );
          })}
        </div>
      </div>
    </section>
    <OurPartners />
    <NewsletterBand />
    <Footer />
  </div>
);
