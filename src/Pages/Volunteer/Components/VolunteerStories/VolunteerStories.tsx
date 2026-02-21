import styles from "./VolunteerStories.module.css";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import "./styles.css";
import { DoubleQuotessvg } from "../../../Home/Components/OurStory/svg";


import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { getVolunteerStories } from "./Api";
import SubHeadings from "../../../../Components/subHeadings";

type Props = {};

type IndividualContainerProps = {
  para: string;
  name: string;
  descrp: string;
  image: string;
};

export const VolunteerStories = (_props: Props) => {
    const [data, setData] = useState<any[]>([]);
    const swiperRef = useRef<SwiperRef>(null);


  const handleFetchDetails = async () => {
    try {
      const response = await getVolunteerStories();
      if (response) {
        setData(response);
        // console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);
  const [set, setset] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1400) {
      setset(true);
    }
  }, []);

   const slideLeft = () => {
     if (swiperRef.current?.swiper) {
       swiperRef.current.swiper.slidePrev();
     }
   };
   slideLeft();
  return (
    <div className={styles.VolunteerStoriesWrapper}>
       <div className={styles.headingContainer}>
        <SubHeadings text="Voices of Change" />
        <SubHeadings text="" variant="secondary" />
      </div>
      <div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={set ? 1 : 2}
          className="volunteerStories"
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination-container",
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          ref={swiperRef}
        >
          {data.map(({ description, name, designation, image }, index) => {
            return (
              <SwiperSlide key={index} className={styles.SwiperSlide}>
                <IndividualContainer
                  para={description}
                  name={name}
                  descrp={designation}
                  image={image}
                />
              </SwiperSlide>
            );
          })}
          <div className="custom-pagination-container"></div>
        </Swiper>
      </div>
    </div>
  );
};

const IndividualContainer = ({
  para,
  name,
  descrp,
  image,
}: IndividualContainerProps) => {
  return (
    <div className={styles.IndividualContainer}>
      <div className={styles.Details}>
        <div className={styles.Toper}>
          <DoubleQuotessvg />
          <p>{para}</p>
        </div>
        <div style={{ color: "#034852",textAlign:"left" }}>
          <h2 style={{textTransform:"uppercase"}}>{name}</h2>
          <p>{descrp}</p>
        </div>
      </div>
      <img src={image} alt={name} />
    </div>
  );
};
