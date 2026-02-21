import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./MilestoneSlider.module.css";
import SubHeadings from "../../../../Components/subHeadings";

// Define the interface for milestone data
interface Milestone {
  year: string;
  text: string;
  icon?: string; // Optional icon URL or component
}

const milestones: Milestone[] = [
  {
    year: "2018",
    text: `During the Kerala floods, Sahil co-founded KeralaRescue.in, witnessing firsthand the power of communities coming together in times of crisis.<br/> Around the same time, Shahid, an IPMAT student at IIM Indore built an edtech platform with fellow students to support IPMAT aspirants, driven by a shared desire to help peers navigate the journey.`,
  },
  {
    year: "2019",
    text: `Sahil received the Larry K. Wilson Asia-Pacific Outstanding Volunteer Award, becoming a testament to the power of community coming together.<br/> Shahid’s edtech platform achieved great success demonstrating the importance of relatable content and role models in entrance exam success.`,
  },
  {
    year: "2020",
    text: `Sahil secured a seat at IIM Indore and began mentoring five students for CAT preparation, taking his first steps in giving back.<br/> Amith volunteered with IEEE’s Promotion of Innovation and Entrepreneurship community, gaining hands-on experience in edtech.`,
  },
  {
    year: "2021",
    text: `All students mentored by Sahil secured spots in the top 20 B-schools, reinforcing the impact of relatability in entrance coaching.<br/> Shahid was featured by Humans of Bombay, sharing his journey from a government school in Kerala to IIM Indore and building a community- driven edtech platform for IPMAT aspirants.`,
  },
  {
    year: "2022",
    text: `Sahil and shahid graduated from IIM Indore and started their corporate careers.<br/> They open-sourced the edtech platform, blending Sahil’s mentoring experience with a community-first approach to reach aspirants at scale.<br/> With the vision taking shape, Sahil brought Amith on board, mobilised a small team to build an LMS prototype, and secured the domain Opengrad.in.`,
  },
  {
    year: "2023",
    text: `OpenGrad launched its first CAT pilot cohort with 80 students, bringing together mentors from top-tier colleges to offer first-hand guidance and lived exam expertise.<br/> Soon after, OpenGrad was incubated by The/Nudge Institute and selected into the Impact Orbit cohort of NSRCEL, IIM Bangalore.`,
  },
  {
    year: "2024",
    text: `The CAT pilot exceeded expectations, with 47 of 80 students securing admissions to top B- schools.<br/> Building on this momentum, OpenGrad expanded to launch cohorts for CUET, CLAT, CAT, and IPMAT.<br/> The journey continued with OpenGrad joining the Evolve Cohort 2024 and launching pilot projects in partnership with the governments of Tamil Nadu, Bihar, and Chhattisgarh.`,
  },
  {
    year: "2025",
    text: `135 OpenGrad students from Tribal Welfare and Adi Dravidar Welfare schools were felicitated by Tamil Nadu CM M.K. Stalin. Building on the pilot’s success, the initiative scaled into a fullfledged partnership now spanning 130+ schools.<br/> After a successful pilot in Chhattisgarh, signed an MoU with the Govt. in 2 districts.<br/> In parallel, OpenGrad built and deployed a unified EdTech OS with AI career mapping, LMS, attendance, and more to support scale and impact.`,
  },
];

const MilestoneSlider: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.container}>
      <div style={{display: "flex" , justifyContent: "center", alignItems: "center", gap: "1ch", flexWrap: "wrap"}}>
        <SubHeadings text="Our Journey" />
        <SubHeadings text="" variant="secondary" />
      </div>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
          bulletClass: styles.dot,
          bulletActiveClass: styles.active,
          renderBullet: function (_index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className={styles.swiperContainer}
      >
        {milestones.map((milestone, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <div className={styles.year}>{milestone.year}</div>
              <div className={styles.bodyText}>
                {milestone.text.split("<br/>").map((t, i) => (
                  <p key={i}>{t.trim()}</p>
                ))}
              </div>
              <div className={styles.iconContainer}>
                {/* Placeholder for icon/image from screenshot */}
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navigationContainer}>
        <button
          className={styles.navButton}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous Slide"
        >
          <FaArrowLeft />
        </button>

        <div className={`swiper-custom-pagination ${styles.pagination}`}></div>

        <button
          className={styles.navButton}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next Slide"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MilestoneSlider;
