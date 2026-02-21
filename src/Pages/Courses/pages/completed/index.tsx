import { useState, useEffect } from "react";
import { MentorshipSection } from "../../Components/MentorshipSection/MentorshipSection";
import styles from "./index.module.css";
import { getCohorts } from "../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ClickSvg } from "../../Components/MentorshipSection/Svg";
import { useNavigate } from "react-router-dom";

const CompletedCohorts = () => {
  const [cohortData, setCohortData] = useState<any[] | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCategoryDescription, setSelectedCategoryDescription] =
    useState<any[] | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch completed cohorts

    getCohorts("completed").then((data) => {
      setCohortData(data || []);
      if (data && data.length > 0) {
        //     // Default to the first year
        const firstYear = data[0];
        setSelectedYear(firstYear.year);

        //     // Set the first category from the first year
        const firstCategory = firstYear.categories[0];
        setSelectedCategory(firstCategory.category);

        //     // Set the first language from the first category
        const firstLanguage = firstCategory.languages[0].name;
        setSelectedLanguage(firstLanguage);
      }
    });
  }, []);

  useEffect(() => {
    if (cohortData && selectedYear) {
      const yearData = cohortData.find((item) => item.year === selectedYear);
      if (yearData) {
        const firstCategory = yearData.categories[0];
        setSelectedCategory(firstCategory.category);
      }
    }
  }, [cohortData, selectedYear]);

  useEffect(() => {
    if (cohortData && selectedYear && selectedCategory) {
      const yearData = cohortData.find((item) => item.year === selectedYear);
      if (yearData) {
        const categoryData = yearData.categories.find(
          (cat: any) => cat.category === selectedCategory
        );
        const category_description = categoryData.category_description;
        setSelectedCategoryDescription(category_description);
        if (categoryData) {
          const firstLanguage = categoryData.languages[0].name;
          setSelectedLanguage(firstLanguage);
        }
      }
    }
  }, [cohortData, selectedYear, selectedCategory]);

  // Get the selected year data
  const yearData = cohortData?.find((item) => item.year === selectedYear);

  const categoryData = yearData?.categories?.find(
    (cat: any) => cat.category === selectedCategory
  );

  const filteredLanguages = categoryData?.languages.filter(
    (language: any) => !selectedLanguage || language.name === selectedLanguage
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.BackgroundText}>
          <h1>COMPLETED COHORTS</h1>
        </div>
        <div className={styles.DetailWrapper}>
          <div className={styles.Content}>
            <div className={styles.TopInner}>
              <p>COMPLETED COHORTS</p>
            </div>

            <div className={styles.buttonGroup}>
              {cohortData?.map((item) => (
                <button
                  key={item.year}
                  onClick={() => {
                    const year = item.year;
                    setSelectedYear(year);
                    setSelectedCategory(null); // Reset category when year changes
                    setSelectedLanguage(null); // Reset language when year changes
                  }}
                  className={`${styles.yearButton} ${
                    selectedYear === item.year ? styles.activeButton : ""
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.categoryWrapper}>
          {yearData?.categories?.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.category);
                setSelectedLanguage(null); // Reset language when category changes
              }}
              className={
                selectedCategory === cat.category ? styles.activeButton : ""
              }
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className={styles.languageWrapper}>
          {categoryData?.languages?.map((language: any) => (
            <div>
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.name)}
                className={
                  selectedLanguage === language.name ? styles.activeButton : ""
                }
              >
                {language.name}
              </button>
              <div
                className={
                  selectedLanguage === language.name ? styles.lineBottom : ""
                }
              ></div>
            </div>
          ))}
        </div>
        <p>{selectedCategoryDescription}</p>
        <div className={styles.cardWrapper}>
          {filteredLanguages?.map((language: any, index: number) => {
            // Since cohort_details is an array, we check for the first element
            const details = language;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <div>
                    <button
                      className={`custom-prev-${index} ${styles.customButton}`}
                    >
                      &#8249;
                    </button>

                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        nextEl: `.custom-next-${index}`,
                        prevEl: `.custom-prev-${index}`,
                      }}
                      className="cohorts_swiper"
                      loop={true}
                      observer={true}
                      observeParents={true}
                    >
                      {details?.cohort_image?.map(
                        (img: any, imgIndex: number) => (
                          <SwiperSlide key={imgIndex}>
                            <img
                              src={img}
                              alt={`cohort-image-${imgIndex}`}
                              className={styles.image}
                            />
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>

                    <button
                      className={`custom-next-${index} ${styles.customButton}`}
                    >
                      &#8250;
                    </button>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: details?.description?.replace(
                        /<br>/g,
                        "<br /><br />"
                      ),
                    }}
                  ></p>
                </div>
                <div className={styles.graphWrapper}>
                  {details?.graph_image && (
                    <img
                      src={details.graph_image}
                      alt={language.name}
                      className={styles.image}
                    />
                  )}
                  {details?.counts_image && (
                    <img
                      src={details.counts_image}
                      alt={language.name}
                      className={styles.image}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={styles.buttonNavigate}
        onClick={() => {
          navigate("/runningcohorts");
          scrollTo(0, 0);
        }}
      >
        View Running cohorts <ClickSvg />
      </button>
      <MentorshipSection />
    </div>
  );
};

export default CompletedCohorts;
