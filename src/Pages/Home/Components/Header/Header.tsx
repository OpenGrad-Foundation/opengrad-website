import { useNavigate } from "react-router-dom";
import { ArrowRight, HintSvg } from "../../../../assets/svg";
// import background from "../../../assets/backgroundLinesClouds.png";
import styles from "./Header.module.css";
import map from "./mapIndiaWithLogo.png";

type Props = {};

export const Header = (_props: Props) => {
  const navigate = useNavigate();

  const navigateToAboutUs = () => {
    navigate("/aboutus");
  };
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.DetailSection}>
        <div className={styles.ContentWrapper}>
          <div className={styles.Title}>
            <div className={styles.registerbutton}>
              <button
                onClick={() =>
                  navigate("/register", { state: { from: "/home" } })
                }
                style={{ backgroundColor: "#05B570" }}
              >
                Register Now
              </button>
              <div>
                <p>Ace UG/PG Entrance Exams with Mentorship</p>

                <button className={styles.hint}>
                  <HintSvg />{" "}
                  <span className={styles.tooltipcontent}>
                    Get personalized mentorship for UG/PG courses of your choice
                    (CLAT, CUET UG, IPMAT, NCET, CAT) along with access to our
                    platform with video lectures, mock tests and community
                    support. Mentors will be alumnus/students of top tier
                    institutes of respective course
                  </span>
                </button>
              </div>
            </div>
            <h2>
              India’s First&nbsp;<div>Free</div>&nbsp;and<br></br>
              <div>Community Powered</div>&nbsp;<p>Entrance</p>&nbsp;Exam
              Solution
            </h2>
            <div>
              {/* <p>
                We enable high leverage opportunities for marginalized youth of
                our nation using community and tech based learning solutions
              </p> */}
              <p>
                Check out how we are democratizing entrance education in India.
              </p>
            </div>
          </div>
          <div className={styles.ButtonWrapper}>
            <button
              style={{ backgroundColor: "#00272D", color: "white" }}
              onClick={() =>
                window.open(
                  "https://opengrad-foundation.learnyst.com/learn",
                  "_blank"
                )
              }
            >
              Access Courses
            </button>
            <button onClick={navigateToAboutUs}>
              Explore
              <ArrowRight color="black" />
            </button>
          </div>
        </div>
        <div className={styles.MapWrapper}>
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};
