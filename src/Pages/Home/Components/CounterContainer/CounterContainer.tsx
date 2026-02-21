import { CounterComponent } from "./CounterComponent";
import {  Groupsvg, Mentorsvg, Studentsvg } from "./svg";
import styles from "./CounterContainer.module.css";

type Props = {};

export const CounterContainer = (_props: Props) => {
  return (
    <div className={styles.CounterContainer}>
      <CounterComponent
        Svg={Studentsvg}
        limit={11000}
        text1="Students"
        text2=""
        operator="+"
        speed={1}
        start={9500}
      />{" "}
      <CounterComponent
        Svg={Mentorsvg}
        limit={1000}
        text1="Mentors"
        text2=""
        operator="+"
        speed={1}
        start={500}
      />{" "}
      <CounterComponent
        Svg={Groupsvg}
        limit={90}
        text1="Successful"
        text2="aspirants return"
        text3="as  mentors"
        operator="%"
        speed={10}
        start={10}
      />
    </div>
  );
};
