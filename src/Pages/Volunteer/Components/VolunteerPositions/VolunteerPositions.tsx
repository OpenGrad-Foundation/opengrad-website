import styles from "./VolunteerPositions.module.css";
import { Foursvg, Onesvg, Threesvg, Twosvg } from "./svg";

type Props = {};

export const VolunteerPositions = (_props: Props) => {
  const data = [
    {
      id: 1,
      Svg: <Onesvg />,
      head: "Academic Fellows (Teaching)",
      para: "Top-tier graduates and subject matter experts who can break down complex concepts and deliver world-class teaching to the grassroots.",
    },
    {
      id: 2,
      Svg: <Twosvg />,
      head: "Career Champions (Awareness)",
      para: "Individuals dedicated to spreading awareness about entrance exams and career trajectories in government schools and underserved communities.",
    },
    {
      id: 3,
      Svg: <Threesvg />,
      head: "Tech Enablers (Technology)",
      para: "Developers and product thinkers building the next-gen ed-tech infrastructure that makes remote learning seamless and scalable.",
    },
    {
      id: 4,
      Svg: <Foursvg />,
      head: "Student Mentors (Guidance)",
      para: "Empathetic leaders ready to handhold students through their journey, providing the motivation and strategy required to crack elite admissions.",
    },
  ];
  return (
    <div className={styles.VolunteerPositionsWrapper}>
      {data.map(({  head, para,Svg }) => {
        return (
          <div className={styles.IndividualContainer}>
            <div>
              <div>{Svg}</div>
              <h2>{head}</h2>
            </div>
            <p>{para}</p>
          </div>
        );
      })}
      <div className={styles.buttonContainer}>
        <button
          className={styles.redirectbtn}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfZtsL0-tXcs0pbRfaTE3FnanKNppiab0zAv8dOqBm0aMUzfQ/viewform",
              "_blank"
            )
          }
        >
          Join the Mission
        </button>
      </div>
    </div>
  );
};
