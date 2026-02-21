import styles from "./Technology.module.css";
import {
  IndiaFirstAccessSvg,
  LowDataDevicesSvg,
  RemoteSchoolsSvg,
  AICareerMappingSvg,
  LiveRecordedClassesSvg,
  MentorPlatformTrackingSvg,
} from "./svg";

const technologyData = [
  {
    id: 1,
    svgComponent: IndiaFirstAccessSvg,
    text: "India-First Access",
  },
  {
    id: 2,
    svgComponent: LowDataDevicesSvg,
    text: "Low Data, Low End Devices",
  },
  {
    id: 3,
    svgComponent: RemoteSchoolsSvg,
    text: "Reaching Remote Schools",
  },
  {
    id: 4,
    svgComponent: AICareerMappingSvg,
    text: "AI Career Mapping",
  },
  {
    id: 5,
    svgComponent: LiveRecordedClassesSvg,
    text: "Live & Recorded Classes",
  },
  {
    id: 6,
    svgComponent: MentorPlatformTrackingSvg,
    text: "Mentor Platform & Tracking",
  },
];

export const Technology = () => {
  return (
    <div className={styles.TechnologyWrapper}>
      <h2 className={styles.Title}>Technology as our Core</h2>
      <div className={styles.GridContainer}>
        {technologyData.map((item) => (
          <div key={item.id} className={item.id === 3 ? `${styles.GridItem} ${styles.RemoteSchools}` : styles.GridItem}>
            <div className={styles.IconWrapper}>
              <item.svgComponent />
            </div>
            <p className={styles.ItemText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
