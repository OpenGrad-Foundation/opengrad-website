import { useState, useRef } from "react";
import styles from "./StudentJourney.module.css";
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "./svg";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SubHeadings from "../../../../Components/subHeadings";

import img6 from "./img6.webp";
import img7 from "./img7.webp";
import img8 from "./img8.webp";
import img9 from "./img9.webp";
import img10 from "./img10.webp";
import img11 from "./img11.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const journeySteps = [
  { text: "Career Orientation", icon: <Icon1 /> },
  { text: "Foundational Skilling", icon: <Icon2 /> },
  { text: "Exam Preparation", icon: <Icon3 /> },
  { text: "Mentorship", icon: <Icon4 /> },
  { text: "Post-Exam Support", icon: <Icon5 /> },
];

//images for the slider
const sliderImages = [
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

export const StudentJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const handleStepClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className={styles.Container}>
      <SubHeadings text="Student Journey at OpenGrad" />
      <div className={styles.StudentJourneyWrapper}>
        <div className={styles.LeftColumn}>
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={`${styles.JourneyStep} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleStepClick(index)}
            >
              <div className={styles.StepContent}>
                <div className={styles.StepIcon}>{step.icon}</div>
                <div className={styles.StepText}>{step.text}</div>
              </div>
              <div className={styles.StepIndicator}>
                <div className={styles.HorizontalLine}></div>
                <div className={styles.SlantedLine}></div>
                <div className={styles.NumberCircle}>{index + 1}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.RightColumn}>
          <button className={styles.CustomPrev} onClick={() => swiperRef.current?.swiper?.slidePrev()}>&lt;</button>
          <div className={styles.SliderContainer}>
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: `.${styles.Pagination}`,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Student Journey ${index + 1}`}
                    className={styles.SlideImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.Pagination}></div>
          </div>
          <button className={styles.CustomNext} onClick={() => swiperRef.current?.swiper?.slideNext()}>&gt;</button>
        </div>
      </div>
    </div>
  );
};
