import { useState, useEffect } from "react";
import styles from "./OurPartners.module.css";
import Marquee from "react-fast-marquee";
import nudge from "./Partners/thenudge.png";
import nsr from "./Partners/nsrcel.png";
import Tycon from "./Partners/Tycoon.png";
import eivolve from "./Partners/eivolve.png";
import caringfriends from "./Partners/caringfriends.png";
import formread from "./Partners/formread.png";
import papersurvey from "./Partners/papersurvey.png";
import google from "./Partners/googlefornonprofits.png";
import tribalwelfare from "./Partners/tribalwelfare.png";
import govtchattisgarh from "./Partners/govtchattisgarh.png";
import SubHeadings from "../subHeadings";

export const OurPartners = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 2020);
  const partners = [
    {
      image: nudge,
      name: "The Nudge",
      name2: "Institute",
      para: "Guiding through the realm of the social sector.",
      scale: 1,
    },
    {
      image: nsr,
      name: "NSRCEL",
      name2: "IIM Bangalaore",
      para: "Facilitating progress through vital mentoring support.",
      scale: 1,
    },
    {
      image: Tycon,
      name: "Tycoonstory",
      name2: "Media Partner",
      para: "Tycoon story is one of the largest online network of Entrepreneurs & Startups",
      link: "https://www.tycoonstory.com/",
      scale: 1,
    },
    {
      image: eivolve,
      name: "Eivolve",
      name2: "",
      para: "",
      link: "",
      scale: 1.5,
    },
    {
      image: caringfriends,
      name: "Caring",
      name2: "Friends",
      para: "",
      link: "",
      scale: 1.5,
    },
    {
      image: formread,
      name: "FormRead",
      name2: "",
      para: "",
      link: "",
      scale: 1.5,
    },
    {
      image: papersurvey,
      name: "PaperSurvey",
      name2: "",
      para: "",
      link: "",
      scale: 1.5,
    },
    {
      image: google,
      name: "Google",
      name2: "for Nonprofits",
      para: "",
      link: "",
      scale: 1.5,
    },
    {
      image: tribalwelfare,
      name: "Tribal Welfare Dept,",
      name2: "Govt of Tamil Nadu",
      para: "",
      link: "",
      scale: 1.2,
    },
    {
      image: govtchattisgarh,
      name: "Govt. of Chhattisgarh",
      name2: "",
      para: "",
      link: "",
      scale: 1.2,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 2200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: false,
    speed: 20,
    drag: true,
  };
  const currentUrl = window.location.pathname;
  return (
    <div className={styles.Partners}>
      <SubHeadings text="Our Partners" />
      <div className={styles.PartnersImageWrapper}>
        {isScreenSmall ? (
          <Marquee {...marqParams} style={{ width: "100%" }}>
            {partners.map((partner, index) => (
              <div
                key={index}
                style={{ padding: "0px 38px", textAlign: "center" }}
                onClick={() => window.open(partner.link)}
              >
                <img src={partner.image} alt={partner.name} style={{ transform: `scale(${partner.scale})` }} />
                <div className={styles.name}>
                  <h2>{partner.name}</h2>
                  <h2>{partner.name2}</h2>
                </div>
                {currentUrl === "/home" ? null : <p>{partner.para}</p>}
              </div>
            ))}
          </Marquee>
        ) : (
          // Render the images without marquee for larger screens
          <div style={{ display: "flex" }}>
            {partners.map((partner, index) => (
              <div key={index} style={{ padding: "0px 10px" }}>
                <img src={partner.image} alt={partner.name} style={{ transform: `scale(${partner.scale})` }} />
                <div className={styles.name}>
                  <h2>{partner.name}</h2>
                  <h2>{partner.name2}</h2>
                </div>
                <p>{partner.para}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
