import { Navbar } from "../../Components/Navbar/Navbar";
import { CAT_REPORT_URL } from "../../Components/siteLinks";
import { Footer } from "../../Components/Footer/Footer";
import { VoicesCarousel } from "../../Components/VoicesCarousel/VoicesCarousel";
import {
  heroImage, heroCopy, logoRows, originPhotos, originCopy, prepCards,
  communionIntro, communionPhotos, communionFeatures, prepImage, prepIntro,
  prepFeatures, mentorCards, abhiramImage, abhiramStory, voices,
} from "./catData";
import styles from "./CatProgram.module.css";

type PhotoData = { src: string; alt: string };
const Photo = ({ image, className, eager }: { image: PhotoData; className?: string; eager?: boolean }) => (
  <img src={image.src} alt={image.alt} className={className} loading={eager ? "eager" : "lazy"} decoding="async" />
);

const numbers = [
  ["1200+", "Community Members"], ["200+", "Mentors from top B-schools"],
  ["1 : 3", "Mentor to aspirants ratio"], ["₹0", "Paid by any aspirant"],
];
const firstBatch = [["80", "aspirants"], ["35", "mentors"], ["47", "top 30 admits"]];

export default function CatProgram() {
  return (
    <div className={styles.page}>
      <Navbar />
      <section className={styles.hero} data-section="hero">
        <h1>India’s Best CAT Coaching <span>Ever</span></h1>
        <p className={styles.heroSubtitle}>{heroCopy[0]}</p>
        <div className={styles.heroPhoto}><Photo image={heroImage} eager /></div>
        <p className={styles.heroIntro}>{heroCopy[1]}</p>
      </section>

      <section className={styles.numbers} data-section="numbers" aria-label="The community in numbers">
        <div>{numbers.map(([value, label]) => <div className={styles.stat} key={label}>
          <div>{value}</div><p>{label}</p>
        </div>)}</div>
      </section>

      <section className={styles.institutes} data-section="institutes">
        <div className={styles.institutesIntro}>
          <p className={styles.eyebrow}>WHERE THE COMMUNITY GOT IN</p>
          <h2>300+ Seats Across Top 30 Business Schools in India</h2>
          <p>Every institute where an OpenGrad aspirant has converted a seat since we began: all 20 IIMs, India’s other top 30 B-schools and the top 31–50 institutes.</p>
        </div>
        <div className={styles.logoRows}>{logoRows.map((row, rowIndex) => (
          <div className={styles.marqueeViewport} key={rowIndex}>
            <div className={styles.logoTrack} data-allow-overflow>
              {[false, true].map((duplicate) => <div className={styles.logoGroup} key={String(duplicate)} aria-hidden={duplicate || undefined}>
                {row.map((image) => <div className={styles.logoCard} key={image.alt}>
                  {image.src ? <Photo image={{ src: image.src, alt: duplicate ? "" : image.alt }} /> : image.alt}
                </div>)}
              </div>)}
            </div>
          </div>
        ))}</div>
        <div className={styles.report}>
          <a href={CAT_REPORT_URL} target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
            Download Impact Report 2025–26
          </a>
        </div>
      </section>

      <section className={styles.origin} data-section="origin">
        <div className={`${styles.container} ${styles.originLayout}`}>
          <div className={styles.originCopy}>
            <p className={styles.year}>{originCopy[0]}</p>
            <h2>It Started With One Question</h2>
            <p>{originCopy[1]}</p><p>{originCopy[2]}</p>
          </div>
          <div className={styles.originGallery}>
            <Photo image={originPhotos[0]} /><Photo image={originPhotos[1]} />
            <div className={styles.firstBatch}>{firstBatch.map(([value, label]) => <div key={label}>
              <strong>{value}</strong><p>{label}</p>
            </div>)}</div>
            <Photo image={originPhotos[2]} />
          </div>
        </div>
      </section>

      <section className={styles.prepYear} data-section="prep-year">
        <div className={styles.container}>
          <h2>The Full Prep Year, Guided by Those Who’ve Walked It</h2>
          <div className={styles.prepGrid}>{prepCards.map((card) => <article className={styles.prepCard} key={card.title}>
            <Photo image={card.image} />
            <div><h3>{card.title}</h3><p>{card.text}</p></div>
          </article>)}</div>
        </div>
      </section>

      <section className={styles.communion} data-section="communion">
        <div className={styles.container}>
          <div className={styles.communionIntro}>
            <h2>The Last Stop Before the Interview Call</h2><p>{communionIntro}</p>
          </div>
          <div className={styles.communionGallery}>
            <div className={styles.marqueeViewport}>
              <div className={styles.photoTrack} data-allow-overflow>
                {[false, true].map((duplicate) => <div className={styles.photoGroup} key={String(duplicate)} aria-hidden={duplicate || undefined}>
                  {communionPhotos.map((image) => <Photo key={image.src} image={duplicate ? { ...image, alt: "" } : image} />)}
                </div>)}
              </div>
            </div>
          </div>
          <ul className={styles.communionFeatures}>{communionFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </div>
      </section>

      <section className={styles.prepTool} data-section="prep-tool">
        <div className={`${styles.container} ${styles.toolLayout}`}>
          <div className={styles.toolCopy}>
            <p className={styles.eyebrow}>OPENGRAD PREP · AI INTERVIEW TOOL</p>
            <h2>Practise the Interview Before It Counts</h2><p>{prepIntro}</p>
            <ul className={styles.prepFeatures}>{prepFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </div>
          <div className={styles.toolImage}>
            <div className={styles.browserFrame}>
              <div aria-hidden="true"><span /><span /><span /></div>
              <Photo image={prepImage} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mentors} data-section="mentors">
        <div className={styles.container}>
          <h2>The Mentors Who Came Back</h2>
          <p className={styles.mentorsIntro}>Every admit adds one more mentor who knows the road, because they walked it only a year earlier.</p>
          <div className={styles.mentorGrid}>{mentorCards.map((card) => <article className={styles.mentorCard} key={card.title}>
            <div className={styles.mentorPhotos}>{card.photos.map(({ image, label }) => <div key={image.src}>
              <Photo image={image} /><span>{label}</span>
            </div>)}</div>
            <div className={styles.mentorBody}>
              <p className={styles.mentorEyebrow}>{card.eyebrow}</p><h3>{card.title}</h3><p>{card.text}</p>
            </div>
          </article>)}</div>
          <div className={styles.abhiram}>
            <Photo image={abhiramImage} /><p><strong>Abhiram K R</strong> {abhiramStory}</p>
            <blockquote>“It does not just get you in, it keeps you together.”<cite>Abhiram K R, Batch 1 · IIM Bangalore</cite></blockquote>
          </div>
        </div>
      </section>

      <section className={styles.voices} data-section="voices">
        <div className={styles.container}>
          <h2>VOICES FROM WITHIN</h2><VoicesCarousel slides={voices} variant="cat" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
