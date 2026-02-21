import styles from "./Footer.module.css";
import logo from "../../../loader.png";
import { Facebook, FacebookFill, Instagram, InstagramFill, LinkedIn, LinkedInFill, LocationSvg, Youtube, YoutubeFill } from "./svg";
type Props = {};

export const Footer = (_props: Props) => {
  return (
    <div className={styles.FooterWrapper}>
      <div className={styles.TopSection}>
        <img src={logo} alt="" />
        <p>OpenGrad’s journey is fueled by compassion and empowerment.</p>
        <p>
          Contact us : <a href="mailto:admin@opengrad.in">admin@opengrad.in</a>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <LocationSvg />{" "}
          <p>
            2/400/B, Firdouse House,
            <br />
            Chathamangalam,Kozhikode-673601
          </p>
        </div>
      </div>
      <div className={styles.BottomSection}>
        <div className={styles.left}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/termsofuse">Terms of Use</a>
          <a href="/taxforms">Tax Forms</a>
          <a href="/newletters&reports">Newsletters & Reports</a>
        </div>
        <div className={styles.Social}>
          <a href="" target="_blank" className={styles.iconLink}>
            <Facebook className={styles.iconDefault} />
            <FacebookFill className={styles.iconFill} />
          </a>
          <a
            href="https://www.instagram.com/opengradfoundation"
            target="_blank"
            className={styles.iconLink}
          >
            <Instagram className={styles.iconDefault} />
            <InstagramFill className={styles.iconFill} />
          </a>
          <a
            href="https://www.youtube.com/@OpenGradFoundation"
            target="_blank"
            className={styles.iconLink}
          >
            <Youtube className={styles.iconDefault} />
            <YoutubeFill className={styles.iconFill} />
          </a>
          <a
            href="https://www.linkedin.com/company/opengrad-foundation/"
            target="_blank"
            className={styles.iconLink}
          >
            <LinkedIn className={styles.iconDefault} />
            <LinkedInFill className={styles.iconFill} />
          </a>
        </div>
        <p>
          © Copyright 2024 | Crafted by{" "}
          <a
            className={styles.Copyright}
            href="https://fundesign.in"
            target="_blank"
          >
            Fun Designs
          </a>
        </p>
      </div>
    </div>
  );
};
