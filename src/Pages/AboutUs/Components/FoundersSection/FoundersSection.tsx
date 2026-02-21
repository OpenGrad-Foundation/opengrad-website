import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox"
import SubHeadings from "../../../../Components/subHeadings";
import sebbin from "../../../assets/founders/Sebbin.webp";
import shahid from "../../../assets/founders/Shahid.webp";
import sahil from "../../../assets/founders/Sahil.webp";
import amith from "../../../assets/founders/Amith.webp";
import styles from './FoundersSection.module.css'

type Props = {}

export const FoundersSection = (_props: Props) => {
  return (
    <div className={styles.FoundersSection}>
      <div style={{display:"flex", gap:"1ch"}}>
      <SubHeadings text="THE FOUNDERS" />
      <SubHeadings text="" variant="secondary" />
      </div>
      
      <div className={styles.foundersContainer}>
        <ImageHoverBox
          image={sahil}
          name={"Sahil Sameer (CEO)"}
          width={"300px"}
          height={"320px"}
          description="IIM INDORE ALUMNUS, LED KERALARESCUE.IN, FOCUSES ON SOCIAL CHANGE THROUGH COMMUNITIES, EX- MANAGER AT SAMSUNG."
          linkedIn="https://www.linkedin.com/in/sahil-sameer/"
          variant="secondary"
        />

        <ImageHoverBox
          image={sebbin}
          name={"SEBBIN JOSHY (CSO)"}
          width={"300px"}
          height={"320px"}
          description="MIT - MANIPAL, AI/ML AT BOSCH, PREVIOUS START-UP AT 100K ARR"
          linkedIn="https://www.linkedin.com/in/sebbinjoshy/"
          variant="secondary"
        />
        <ImageHoverBox
          image={shahid}
          name={"Mohammed Shahid (COO)"}
          width={"300px"}
          height={"320px"}
          description="IIM INDOREGRAD, CRAFTED A COMMUNITY- DRIVEN PLATFORM FOR IPMAT ENTRANCES, 'ALPHA IPMAT'. MARKETING ENTHUSIAST PREVIOUSLY WORKED WITH HUL."
          linkedIn="https://www.linkedin.com/in/shahidco/"
          variant="secondary"
        />
         <ImageHoverBox
          image={amith}
          name={"Amith Tony Joseph"}
          width={"300px"}
          height={"320px"}
          description="MBA- ESMT BERLIN, ENTREPRENEUR, PRODUCT MANAGER AT THRYVE, BERLIN"
          linkedIn="https://www.linkedin.com/in/amith-tj/"
          variant="secondary"
        />
      </div>
    </div>
  );
}