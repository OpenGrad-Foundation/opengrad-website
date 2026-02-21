import { useState } from "react";
import { ArrowBottom, NewsPaper } from "../../assets/svg";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import SubHeadings from "../../Components/subHeadings";
import styles from "./index.module.css";
import annualreportimg2425 from "./assets/AnnualReport-2024-2025.png";

const NewsletterAndReport2 = () => {
  const newslettersData = [
    
    {
      year: "2023-2024",
      reports: [
        { name: "Q3", link: "https://drive.google.com/file/d/1HMcNwJKjW5jixdjvl3mxJ0tPx1zcHRLm/view?usp=sharing" },
        { name: "2024 Yearly Recap", link: "https://drive.google.com/file/d/1-8dayF20jxoIG5Z4H-oWGmvjX-oPFRkl/view?usp=share_link" },
      ],
    },
    {
      year: "2024-2025",
      reports: [
        { name: "Q1", link: "https://drive.google.com/file/d/1WK4X-9mQYF3Rbdor9AOr4IIOaFDupklR/view?usp=share_link" },
        { name: "Q2", link: "https://drive.google.com/file/d/1ASsGcffJ6ftQs1DIJqzOIVl1nm8SmExi/view?usp=sharing" },
        { name: "Q3", link: "https://drive.google.com/file/d/1-OjF6GgM6r5uoj6WTyc6oiumlgwXcvtj/view?usp=sharing" },
        { name: "2025 Yearly Recap" },
      ],
    },
  ];

  const annualReportsData = [
    {
      year: "2024-2025 ",
      link: "https://drive.google.com/file/d/1KfzST0uGQvuP_bR0-j_Wu8fOuEXQQAbk/view?usp=sharing",
      image: annualreportimg2425,
    },
  ];
  const [openYear, setOpenYear] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleYear = (year: string) => {
    setOpenYear((prev) => (prev === year ? null : year));
  };

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.inner}>
        <div className={styles.BackgroundText}>
          <h1>NEWSLETTERS & REPORTS</h1>
        </div>
        <div className={styles.DetailWrapper}>
          <div className={styles.Content}>
            <div className={styles.TopInner}>
              <p>NEWSLETTERS & REPORTS</p>
            </div>
          </div>
        </div>
        {newslettersData && newslettersData.length > 0 && (
          <>
            <div className={styles.newsletters}>
              <SubHeadings text="Newsletters" />
              {newslettersData.map(({ year, reports }) => (
                <div key={year} className={styles.yearSection}>
                  <div
                    className={styles.yearHeader}
                    onClick={() => toggleYear(year!)}
                  >
                    <p>{year}</p>
                    <div
                      className={`${openYear === year ? styles.rotated : ""}`}
                    >
                      <ArrowBottom />
                    </div>
                  </div>
                  {openYear === year && (
                    <div className={styles.gridSection}>
                      {reports.map(({ name, link }, index) => (
                        <a
                          href={link}
                          target="_blank"
                          key={index}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <NewsPaper
                            color={hoveredIndex === index ? "white" : "#034852"}
                          />
                          <p>{name}</p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.anualreports}>
              <SubHeadings text="Annual Reports" />
              <div className={styles.gridSection}>
                {annualReportsData.map(({ year, link, image }, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.gridItem}
                      onClick={() => window.open(link!, "_blank")}
                    >
                      <img src={image!} alt="" />
                      <a href="" target="_blank" key={index}>
                        <NewsPaper color="#fff" />
                        <p> {year}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default NewsletterAndReport2;
