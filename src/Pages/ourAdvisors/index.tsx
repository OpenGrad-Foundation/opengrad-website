import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import SubHeadings from "../../Components/subHeadings";
import { getAdvisors } from "./api";

type Props = {};

const customOrder = [
  "Gopichand Katragadda",
  "Puneet Pushkarna",
  "Sonali Sinha",
  "Abdul Qadir",
  "TC Ratnapuri",
  "Archana Hari",
];

const OurAdvisors = (_props: Props) => {
  const [advisorsData, setAdvisorsData] = useState<AdvisorData[] | null>(null);
  const [groupedData, setGroupedData] = useState<GroupedAdvisorData>({});
  const [, setActiveCategory] = useState<string>("");//[activeCategory,setActiveCategory]
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    getAdvisors().then((data) => {
      if (data) {
        // Temporarily filter to only show "Advisors" category
        const filteredData = data.filter((item) => item.category === "Advisors");

        // Sort by custom order
        const sortedData = filteredData.sort((a, b) => {
          const indexA = customOrder.indexOf(a.name);
          const indexB = customOrder.indexOf(b.name);

          if (indexA !== -1 && indexB !== -1) return indexA - indexB;
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;
          return a.name.localeCompare(b.name);
        });

        setAdvisorsData(sortedData);

        const grouped = sortedData.reduce<GroupedAdvisorData>((acc, item) => {
          acc[item.category] = acc[item.category] || [];
          acc[item.category].push(item);
          return acc;
        }, {});
        setGroupedData(grouped);
        setActiveCategory(Object.keys(grouped)[0]);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveCategory(entry.target.getAttribute("data-category")!);
          }
        });
      },
      { threshold: 0.5 }
    );

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      categoryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [groupedData]);

  //  const handleCategoryClick = (category: string) => {
  //    setActiveCategory(category);
  //    const index = Object.keys(groupedData).indexOf(category);
  //    const element = categoryRefs.current[index];
  //    if (element) {
  //      element.scrollIntoView({ behavior: "smooth" });
  //    }
  //  };

  if (!advisorsData) return <div>Loading...</div>;
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {/* <div className={styles.BackgroundText}>
          <h1>OUR ADVISORS</h1>
        </div> */}
        <div className={styles.DetailWrapper}>
          <div className={styles.Content}>
            {/* <div className={styles.TopInner}>
              <p>OUR ADVISORS</p>
            </div> */}
            <SubHeadings text="OUR ADVISORS" />
            <SubHeadings text="" variant="secondary" />
          </div>
        </div>
      </div>
      <div className={styles.Container}>
        {/* <div className={styles.CategoryButtons}>
           {Object.keys(groupedData).map((category, index) => (
             <button
               key={index}
               onClick={() => handleCategoryClick(category)}
               className={activeCategory === category ? styles.ActiveButton : ""}
             >
               {category.toUpperCase()}
             </button>
           ))}
         </div> */}
        <div className={styles.CategoryData}>
          {Object.keys(groupedData).map((category, index) => (
            <div
              key={index}
              ref={(el) => (categoryRefs.current[index] = el)}
              data-category={category}
              style={{
                opacity: "1",
              }}
            >
              {/* <SubHeadings text={category} /> */}
              <div className={styles.contentdata}>
                {groupedData[category].map((person, idx) => (
                  <div className={styles.ImageHoverBoxWrapper} key={idx}>
                    <a target="_blank" className={styles.ImageHoverBoxWrap}>
                      <div className={styles.FrontDiv}>
                        <img src={person.image} alt={person.name} />
                      </div>
                      <div className={styles.BackDiv}></div>
                    </a>
                    <div className={styles.Content}>
                      <h3>{person.name}</h3>
                      <h4>{person.designation}</h4>
                      <p>{person.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAdvisors;
