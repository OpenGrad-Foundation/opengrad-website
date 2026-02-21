import styles from "./MentorshipSection.module.css";
import {
  DiscussionForums,
  MockTest,
  PracticeQuestions,
  VideoClass,
  WrittenNotes,
} from "./Svg";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  Svg: React.ElementType;
  pra: string;
};

export const MentorshipSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (isVisible && ref.current) {
      Array.from(ref.current.children).forEach((child, index) => {
        setTimeout(() => {
          child.classList.remove(styles.hidden);
          child.classList.add(styles.visible);
        }, 100 * index);
      });
    }
  }, [isVisible]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.paragraph}>
        <p style={{ color: "#222" }}>
          Our carefully curated and strategically developed curriculum
          prioritizes student well-being and healthy learning.
        </p>
        <p style={{ color: "#888" }}>Our comprehensive resources include:</p>
      </div>
      <div ref={ref} className={styles.iterator}>
        <Containers Svg={VideoClass} pra="Video Classes" />
        <Containers Svg={MockTest} pra="Mock Test" />
        <Containers Svg={WrittenNotes} pra="Written Notes" />
        <Containers Svg={PracticeQuestions} pra="Practice Questions" />{" "}
        <Containers Svg={DiscussionForums} pra="Discussion Forums" />
      </div>
    </div>
  );
};

const Containers = ({ Svg, pra }: Props) => {
  return (
    <div className={`${styles.container} ${styles.hidden}`}>
      <Svg />
      <p>{pra}</p>
    </div>
  );
};
