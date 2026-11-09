import { useState, useEffect } from "react";
import styles from "./OurPartners.module.css";
import Marquee from "react-fast-marquee";
import nudge from "./Partners/thenudge.png";
import nsr from "./Partners/nsrcel.png";
import eivolve from "./Partners/eivolve.png";
import caringfriends from "./Partners/caringfriends.png";
import formread from "./Partners/formread.png";
import papersurvey from "./Partners/papersurvey.png";
import google from "./Partners/googlefornonprofits.png";
import govtchattisgarh from "./Partners/govtchattisgarh.png";
import govttamilnadu from "./Partners/govttamilnadu.webp";
import govtkerala from "./Partners/govtkerala.webp";
import changeengine from "./Partners/changeengine.webp";
import enphase from "./Partners/enphase.webp";
import indigoedge from "./Partners/indigoedge.webp";
import indiawelfaretrust from "./Partners/indiawelfaretrust.webp";
import thedelta from "./Partners/thedelta.webp";
import tidelpark from "./Partners/tidelpark.webp";
import svp from "./Partners/svp.webp";
import dolphintank from "./Partners/dolphintank.webp";
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
      name2: "IIM Bangalore",
      para: "Facilitating progress through vital mentoring support.",
      scale: 1,
    },
    {
      image: govttamilnadu,
      name: "Govt. of Tamil Nadu",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: govtkerala,
      name: "Govt. of Kerala",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: govtchattisgarh,
      name: "Govt. of Chhattisgarh",
      name2: "",
      para: "",
      link: "",
      scale: 1.2,
    },
    {
      image: changeengine,
      name: "ChangeEngine",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: enphase,
      name: "Enphase",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: indigoedge,
      name: "IndigoEdge",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: indiawelfaretrust,
      name: "India Welfare Trust",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: thedelta,
      name: "The Delta (Nudge)",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: tidelpark,
      name: "TIDEL Park Limited",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: svp,
      name: "SVP",
      name2: "",
      para: "",
      link: "",
      scale: 1,
    },
    {
      image: dolphintank,
      name: "Dolphin Tank – Season 5",
      name2: "",
      para: "",
      link: "",
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
                style={{ padding: "0px 38px", textAlign: "center", cursor: partner.link ? "pointer" : "default" }}
                onClick={() => {
                  if (partner.link) {
                    window.open(partner.link, "_blank");
                  }
                }}
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
