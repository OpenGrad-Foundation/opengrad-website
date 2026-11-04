import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { VoicesCarousel } from "../../Components/VoicesCarousel/VoicesCarousel";
import type { Community, StateImage, StatePageData } from "./types";
import styles from "./StatePage.module.css";

const Photo = ({ image, className, eager }: { image: StateImage; className?: string; eager?: boolean }) => (
  <img className={className} src={image.src} alt={image.alt} style={{ objectPosition: image.position }}
    loading={eager ? "eager" : "lazy"} decoding="async" />
);

const CommunityCard = ({ card }: { card: Community }) => (
  <article className={styles.communityCard}>
    <Photo image={card.image} className={styles.communityImage} />
    <div className={styles.communityBody}>
      <div className={styles.cardHeading}>
        <div><div className={styles.eyebrow}>{card.label}</div><h3>{card.name}</h3></div>
        <svg role="img" aria-label={card.map.label} viewBox={card.map.viewBox}
          width={card.map.width} height={card.map.height}>
          {card.map.paths.map((path, i) => <path key={i} d={path.d} fill="#0abe62"
            stroke={path.stroke ? "#0abe62" : undefined} strokeWidth={path.stroke ? 0.8 : undefined}
            strokeLinejoin="round" />)}
        </svg>
      </div>
      <div className={styles.cardDetails}>
        {card.description && <p>{card.description}</p>}
        <ul className={styles.bullets}>
          {card.bullets.map((bullet) => <li key={bullet.text}>
            <span>{bullet.strong && <><strong>{bullet.strong}</strong>{" "}</>}{bullet.text}</span>
          </li>)}
        </ul>
      </div>
    </div>
  </article>
);

export const StatePage = ({ data }: { data: StatePageData }) => (
  <div className={styles.page} data-state={data.id}>
    <Navbar />
    <section className={styles.hero} data-section="hero">
      <h1>{data.hero.title}{data.hero.year && <> <span>{data.hero.year}</span></>}</h1>
      <div className={styles.heroContent}>
        <Photo image={data.hero.image} className={styles.heroImage} eager />
        <p>{data.hero.intro}</p>
      </div>
    </section>
    {!data.communities.hidden && <section className={styles.communities} data-section="communities">
      <div className={styles.container}>
        <div className={styles.communityIntro}>
          <h2>{data.communities.title}</h2><p>{data.communities.intro}</p>
        </div>
        <div className={styles.communityGrid} data-layout={data.communities.layout}>
          {data.communities.cards.map((card) => <CommunityCard card={card} key={card.name} />)}
        </div>
      </div>
    </section>}
    <section className={styles.people} data-section="people">
      <div className={styles.container}>
        <div className={styles.peopleGrid}>
          <Photo image={data.people.image} />
          <div><h2>{data.people.title}</h2>
            <ul className={`${styles.bullets} ${styles.peopleBullets}`}>
              {data.people.bullets.map((bullet) => <li key={bullet}><span>{bullet}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
    {data.partner && <section data-section="partner">
      <div className={`${styles.container} ${styles.partnerContainer}`}>
        <div className={styles.partner}>
          <div className={styles.partnerText}>
            <div className={styles.partnerLabel}>{data.partner.label}</div>
            <h2>{data.partner.title}</h2><p>{data.partner.text}</p>
          </div>
          <div className={styles.partnerLogo}><Photo image={data.partner.logo} /></div>
        </div>
      </div>
    </section>}
    <section className={styles.lastYear} data-section="last-year">
      <div className={styles.container}>
        <h2>{data.lastYear.title}</h2><p className={styles.yearIntro}>{data.lastYear.intro}</p>
        <div className={styles.stats}>
          {data.lastYear.stats.map((stat) => <div className={styles.stat} key={stat.label}>
            <div>{stat.value}</div><p>{stat.label}</p>
          </div>)}
        </div>
        <div className={styles.gallery}>
          {data.lastYear.gallery.map((image) => <Photo key={image.src} image={image}
            className={image.featured ? styles.featured : undefined} />)}
        </div>
        <div className={styles.testimonials}>
          {data.lastYear.testimonials.map((slide) => <figure key={slide.name}>
            <Photo image={slide.image} />
            <div><blockquote>{slide.quote}</blockquote>
              <figcaption><div className={styles.studentName}>{slide.name}</div>
                <div className={styles.studentRole}>{slide.role}</div></figcaption>
            </div>
          </figure>)}
        </div>
      </div>
      <div className={styles.report}>
        <a href={data.reportUrl} target="_blank" rel="noopener">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
          </svg>
          Download Impact Report 2025–26
        </a>
      </div>
    </section>
    <section className={styles.classrooms} data-section="classrooms">
      <h2>From the Classrooms</h2>
      <div className={styles.marqueeViewport}>
        <div className={styles.marquee} data-allow-overflow>
          {[false, true].map((duplicate) => <div className={styles.marqueeGroup} key={String(duplicate)}
            aria-hidden={duplicate || undefined}>
            {data.classrooms.map((image) => <Photo key={image.src} image={duplicate ? { ...image, alt: "" } : image} />)}
          </div>)}
        </div>
      </div>
    </section>
    <section className={styles.voices} data-section="voices">
      <div className={styles.container}>
        <h2>VOICES FROM WITHIN</h2><VoicesCarousel key={data.id} slides={data.voices} />
      </div>
    </section>
    <Footer />
  </div>
);
