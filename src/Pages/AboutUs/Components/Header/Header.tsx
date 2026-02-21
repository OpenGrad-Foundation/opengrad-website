import styles from "./Header.module.css";
import image from "./imageAbout6.jpeg";
import Vision from "./vision bulb.png";
import SubHeadings from "../../../../Components/subHeadings";
import BlobImage from "./Blob";

export const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.BackgroundText}>
        <h1>ABOUT US</h1>
      </div>
      <div className={styles.DetailWrapper}>
        <div className={styles.Content}>
          <div className={styles.TopInner}>
            <p>ABOUT US</p>
          </div>
          {/* <h2>
            Empowered by&nbsp;<div>Community</div>, Committed<p>to</p>&nbsp;
            <div>Giving Back</div>
          </h2> */}
          <div style={{ display: 'flex', gap: '1ch', flexWrap: 'wrap' }}>
            <SubHeadings text="Empowered by" />
            <SubHeadings text="Community," variant="secondary"/>
          </div>
          <div style={{ display: 'flex', gap: '1ch', flexWrap: 'wrap' }}>
            <SubHeadings text="Committed to" />
            <SubHeadings text="Giving Back" variant="secondary" />
          </div>  
        </div>
        <div className={styles.MapWrapper}>
          {/* <img src={image} alt="" /> */}
          <BlobImage photoUrl={image} altText="About Us Image" className={styles.blobImage} />
        </div>
      </div>
      <div className={styles.VisionWrap}>
        <div className={styles.TextContainer}>
          <div>
            <h2>Our Vision<span style={{color: "#07ff9e"}}></span></h2>
            <p>
              OpenGrad Foundation transforms access to higher education by using technology to actively guide
              students from government schools, from career decisions and entrance
              pathways to admissions and post-admission success.
            </p>
          </div>
          <div>
            <h2>Our Mission<span style={{color: "#07ff9e"}}></span></h2>
            <p>
              To ensure students from government and underserved communities have equal access to quality
              higher education, enabling long-term socio-economic mobility, employment and inclusive national
              development.
            </p>
          </div>
        </div>
        <img src={Vision} alt="" />
      </div>
    </div>
  );
};
