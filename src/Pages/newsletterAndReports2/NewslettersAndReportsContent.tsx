import { useState } from "react";
import { ArrowBottom, NewsPaper } from "../../assets/svg";
import SubHeadings from "../../Components/subHeadings";
import styles from "./index.module.css";
import annualreportimg2425 from "./assets/AnnualReport-2024-2025.png";
import annualreportimg2526 from "./assets/AnnualReport-2025-2026.png";

export const NewslettersAndReportsContent = () => {
  const newslettersData = [
    {
      year: "2024-2025",
      reports: [
        {
          name: "Q3",
          link: "https://drive.google.com/file/d/1HMcNwJKjW5jixdjvl3mxJ0tPx1zcHRLm/view?usp=sharing",
        },
        {
          name: "2024 Yearly Recap",
          link: "https://drive.google.com/file/d/1-8dayF20jxoIG5Z4H-oWGmvjX-oPFRkl/view?usp=share_link",
        },
      ],
    },
    {
      year: "2025-2026",
      reports: [
        {
          name: "Q1",
          link: "https://drive.google.com/file/d/1WK4X-9mQYF3Rbdor9AOr4IIOaFDupklR/view?usp=share_link",
        },
        {
          name: "Q2",
          link: "https://drive.google.com/file/d/1ASsGcffJ6ftQs1DIJqzOIVl1nm8SmExi/view?usp=sharing",
        },
        {
          name: "Q3",
          link: "https://drive.google.com/file/d/1-OjF6GgM6r5uoj6WTyc6oiumlgwXcvtj/view?usp=sharing",
        },
        {
          name: "2025 Yearly Recap",
          link: "https://drive.google.com/file/d/1kKsGC0dxrjnTfRf6MT86_86x-c9sJSce/view?usp=share_link",
        },
      ],
    },
    {
      year: "2026-2027",
      reports: [
        {
          name: "Q1 2026",
          link: "https://drive.google.com/file/d/1IqENo6VQ11rAe5nMq4J1FIw_5BF_cKEx/view?usp=sharing",
        },
        {
          name: "Q2 2026",
          link: "https://drive.google.com/file/d/1IqENo6VQ11rAe5nMq4J1FIw_5BF_cKEx/view?usp=sharing",
        },
        {
          name: "Q3 2026",
          link: "https://drive.google.com/file/d/1TdjnHsMdjIaDRHXYkR6u9pXa213j5Hxm/view?usp=sharing",
        },
      ],
    },
  ];

  const annualReportsData = [
    {
      year: "2024-2025",
      link: "https://drive.google.com/file/d/1KfzST0uGQvuP_bR0-j_Wu8fOuEXQQAbk/view?usp=sharing",
      image: annualreportimg2425,
    },
    {
      year: "2025-2026",
      link: "https://drive.google.com/file/d/1FgPQb5rzeL_j7Yx9M9EKg5n5_7h0w84k/view?usp=sharing",
      image: annualreportimg2526,
    },
  ];

  const [openYear, setOpenYear] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const toggleYear = (year: string) => {
    setOpenYear((prev) => (prev === year ? null : year));
  };

  return (
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
              <div className={`${openYear === year ? styles.rotated : ""}`}>
                <ArrowBottom />
              </div>
            </div>
            {openYear === year && (
              <div className={styles.gridSection}>
                {reports.map(({ name, link }, index) => {
                  const hoverKey = `${year}-${index}`;
                  return (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      onMouseEnter={() => setHoveredIndex(hoverKey)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <NewsPaper
                        color={hoveredIndex === hoverKey ? "white" : "#034852"}
                      />
                      <p>{name}</p>
                    </a>
                  );
                })}
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
                <img src={image!} alt={`Annual Report ${year}`} />
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <NewsPaper color="#fff" />
                  <p> {year}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

