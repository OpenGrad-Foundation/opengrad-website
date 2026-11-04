import { CSSProperties, useState } from "react";
import styles from "./VoicesCarousel.module.css";

export type VoiceSlide = {
  quote: string;
  eyebrow?: string;
  name: string;
  role: string;
  image: { src: string; alt: string; position?: string };
};

/** CSS drives autoplay; the dots also allow manual selection, including with reduced motion. */
export const VoicesCarousel = ({ slides, variant }: { slides: VoiceSlide[]; variant?: "cat" }) => {
  const [selected, setSelected] = useState<number | null>(null);
  if (!slides.length) return null;
  const variables = {
    "--slide-count": slides.length + 1,
    "--duration": `${slides.length * 7}s`,
    "--selected": selected ?? 0,
  } as CSSProperties;

  return (
    <div className={styles.carousel} style={variables} data-count={slides.length} data-variant={variant}
      data-manual={selected !== null || undefined} role="region" aria-label="Voices from within"
      aria-roledescription="carousel">
      <div className={styles.viewport}>
        <div className={styles.track} data-allow-overflow>
          {[...slides, slides[0]].map((slide, index) => (
            <figure className={styles.slide} key={`${slide.name}-${index}`}
              aria-hidden={index === slides.length || undefined}>
              <img loading="lazy" decoding="async" src={slide.image.src} alt={index === slides.length ? "" : slide.image.alt}
                style={{ objectPosition: slide.image.position }} />
              <div>
                {slide.eyebrow && <p className={styles.eyebrow}>{slide.eyebrow}</p>}
                <blockquote>{slide.quote}</blockquote>
                <figcaption>
                  <div className={styles.name}>{slide.name}</div>
                  <div className={styles.role}>{slide.role}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
      <div className={styles.dots} aria-label="Choose a quote">
        {slides.map((slide, index) => (
          <button type="button" key={slide.name} className={styles.dot}
            style={{ "--dot-delay": `${-slides.length * 7 + index * 7}s` } as CSSProperties}
            data-selected={selected === index || undefined}
            aria-label={`Show quote from ${slide.name}`} onClick={() => setSelected(index)} />
        ))}
        {selected !== null && (
          <button type="button" className={styles.resume} onClick={() => setSelected(null)}>Resume slideshow</button>
        )}
      </div>
    </div>
  );
};
