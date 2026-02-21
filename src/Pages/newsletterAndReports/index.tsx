import { useEffect, useState } from "react";
import { ArrowBottom, NewsPaper } from "../../assets/svg";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import SubHeadings from "../../Components/subHeadings";
import styles from "./index.module.css";
import { supabase } from "../../App";

const NewsletterAndReport = () => {
  const [data, setData] = useState<AnnualReportType[]>([]);
  const [openYear, setOpenYear] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: items, error: fetchError } = await supabase
      .from("annual_report")
      .select(
        `
        *,
        reports:report(*)
      `
      )
      .order("created_at", { ascending: false });

    if (fetchError) {
      throw new Error(fetchError.message);
    }
    setData(items);
  };

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
        {data && data.length > 0 && (
          <>
            <div className={styles.newsletters}>
              <SubHeadings text="Newsletters" />
              {data.map(({ year, reports }) => (
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
                {data.map(({ year, link, image }, index) => {
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

export default NewsletterAndReport;
