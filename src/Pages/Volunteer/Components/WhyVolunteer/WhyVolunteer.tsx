import { useState } from "react";
import styles from "./WhyVolunteer.module.css";
import { Teaching, Career, Guidance, Technology } from "./svg";
import SubHeadings from "../../../../Components/subHeadings";


type SvgProps = {
  bg?: string;
  color?: string;
};

type Props = {
  Svgs: React.ComponentType<SvgProps>;
  svgProps?: SvgProps;
  headings: string;
  para: string;
};
type IndividualContainerProps = Props & {
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const WhyVolunteer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const containerStyle = {
    backgroundColor: isHovered ? "#05B570" : "white",
    color: isHovered ? "#fff" : "black",
  };

  const data = [
    {
      Svg: Teaching,
      heading: "Teaching",
      para: `Our community of graduates and students from India’s top colleges delivers high-quality lectures that decode the toughest entrance exams in the most accessible way possible.`,
    },
    {
      Svg: Career,
      heading: "Career Awareness",
      para: `Our career guidance programs, led by successful alumni, help students make informed decisions by providing relatable role models and up-to-date info on career possibilities.`,
    },
    {
      Svg: Guidance,
      heading: "Guidance",
      para: `Beyond academics, we provide a compass.Through personalized mentorship, we offer the emotional and strategic support students need to navigate high-pressure academic journeys.`,
    },
    {
      Svg: Technology,
      heading: "Technology",
      para: `We are building the digital bridge. Our tech enthusiasts craft the ecosystem that connects a student in a remote village to a world-class mentor at an IIM.`,
    },
  ];
  return (
    <div className={styles.WhyVolunteerWrap}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', gap: '10px' }}>
        <SubHeadings text="The" />
        <SubHeadings text="4 Pillars" variant="secondary" />
        <SubHeadings text="of our Community" />
      </div>
      <div>
        {data.map(({ Svg, heading, para }) => {
          return (
            <IndividualContainer
              Svgs={Svg}
              svgProps={{
                bg: "rgba(3, 72, 82, 0.2)",
                color: "rgba(3, 72, 82, 1)",
              }}
              headings={heading}
              para={para}
              style={containerStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
};

const IndividualContainer = ({
  Svgs,
  svgProps,
  headings,
  para,
  style,
  onMouseEnter,
  onMouseLeave,
}: IndividualContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  const containerStyle = {
    ...style,
    backgroundColor: isHovered ? "#05B570" : "white",
    color: isHovered ? "#fff" : "#034852",
  };
  const svgStyle = {
    bg: isHovered ? "white" : svgProps?.bg,
    color: isHovered ? "#05B570" : svgProps?.color,
  };
  return (
    <div
      style={containerStyle }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.Individual}
    >
      <div style={{ marginBottom: '10px' }}>
        <Svgs {...svgStyle} />
      </div>
      <h2>{headings}</h2>
      <p>{para}</p>
    </div>
  );
};
