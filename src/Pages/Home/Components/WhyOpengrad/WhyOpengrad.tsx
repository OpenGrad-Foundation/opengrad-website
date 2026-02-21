import React, { useEffect, useRef, useState } from "react";
import {
  PeopleGrpsvg,
  LearnPlatformsvg,
  OutReachsvg,
  Empowersvg,
  GreenArrowsvg,
} from "./svg";
import styles from "./WhyOpengrad.module.css";
import SubHeadings from "../../../../Components/subHeadings";
type Props = {
  Svg: React.ElementType;
  pra1: string;
  pra2: string;
};

export const WhyOpengrad = () => {
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
    <div className={styles.WhyOpengradWrapper}>
      {" "}
      <SubHeadings text="Why choose OpenGrad?" />
      <div ref={ref}>
        <Containers
          Svg={PeopleGrpsvg}
          pra1="Top university students"
          pra2="prepare the content"
        />
        <GreenArrowsvg className={styles.hidden} />
        <Containers
          Svg={LearnPlatformsvg}
          pra1="Free to access"
          pra2="learning platform"
        />
        <GreenArrowsvg className={styles.hidden} />
        <Containers
          Svg={OutReachsvg}
          pra1="Outreach activities to"
          pra2="deserving sections"
        />
        <GreenArrowsvg className={styles.hidden} />
        <Containers
          Svg={Empowersvg}
          pra1="Empower students,"
          pra2="uplift society"
        />
      </div>
    </div>
  );
};

const Containers = ({ Svg, pra1, pra2 }: Props) => {
  return (
    <div className={`${styles.container} ${styles.hidden}`}>
      <Svg />
      <div>
        <p>{pra1}</p>
        <p>{pra2}</p>
      </div>
    </div>
  );
};
