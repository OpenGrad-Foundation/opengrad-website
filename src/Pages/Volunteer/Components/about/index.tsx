import styles from "./index.module.css";
import bg from './bgvideo.png'
import SubHeadings from "../../../../Components/subHeadings";
type Props = {};

export const About = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <div className={styles.headingContainer}>
          <SubHeadings text="What is Opengrad?" />
          {/* <SubHeadings text="Students," />
          <SubHeadings text="By the" variant="secondary" />
          <SubHeadings text="Students" /> */}
        </div>
        <p>
          Ensure equal access to high-quality entrance exam coaching for underprivileged youth. Through our community-driven tech platform, we aim to empower them with the opportunity to achieve the benefits of elite college education and enhance their life prospects.
        </p>
      </div>
      <div
        className={styles.VideoSet}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <iframe
          src="https://www.youtube.com/embed/aq8_KA4k_iA?si=AAIh22xNjnxDfHqj&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
