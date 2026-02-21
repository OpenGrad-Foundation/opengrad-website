import styles from "./Headers.module.css";
import img1 from "./assets/img1.png";
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from "./assets/img5.png";

type Props = {};

export const Headers = (_props: Props) => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.BackgroundText}>
        <h1>JOIN US</h1>
      </div>
      <div className={styles.DetailWrapper}>
        <div className={styles.Content}>
          {/* <div className={styles.TopInner}>
            <p>Join us</p>
          </div> */}
          <div>
            <h2 className={styles.noWrap}>
              Community &nbsp;<div>First,</div>&nbsp;
            </h2>
            <h2 className={styles.noWrap}>Everything Else Second.</h2>
            <p style={{ marginTop: "10px", fontWeight: 400 }}>
              OpenGrad at its core is a student initiative. Millions of students in India undergo intense entrance exam prep every year; with OpenGrad, we provide successful students a platform to guide and help future aspirants.
            </p>
            <p style={{ marginTop: "10px", fontWeight: 700 }}>
              We make entrance coaching free, accessible, and human-centric. We are rethinking the multi-billion dollar coaching industry using the simple principles of peer-to-peer learning and community.
            </p>
          </div>
          <div className={styles.ButtonWrapper}>
            <button
              className={styles.join}
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfZtsL0-tXcs0pbRfaTE3FnanKNppiab0zAv8dOqBm0aMUzfQ/viewform",
                  "_blank"
                )
              }
            >
              Join The Mission
            </button>
            {/* <button style={{fontWeight:600}}>
              Explore
              <ArrowRight color="black" />
            </button> */}
          </div>
        </div>
        <div className={styles.MapWrapper}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};
