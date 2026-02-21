import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import styles from "./OurStory.module.css";
import sebbin from "../../../assets/founders/Sebbin.webp";
import shahid from "../../../assets/founders/Shahid.webp";
import sahil from "../../../assets/founders/Sahil.webp";
import amith from "../../../assets/founders/Amith.webp";
// import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import { DoubleQuotessvg } from "./svg";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { getTestimonial } from "./Api";

type Props = {};

export const OurStory = (_props: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [data, setData] = useState<any[]>([]);

  const handleFetchDetails = async () => {
    try {
      const response = await getTestimonial();
      if (response) {
        setData(response);
        // console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);

  const slideLeft = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  slideLeft();
  return (
    <div className={styles.OurStoryWrapper}>
      <div className={styles.DetailSectionWrapper}>
        <div className={styles.foundersWrapper}>
          <p>
            Crafted with compassion, Opengrad Foundation emerged from a
            collective belief in Education for All. Our mission is to enable the
            next generation to access elite higher education, fostering a
            society where everyone can dream without fear.
          </p>
          <h3>
            <div></div>
            <p>THE FOUNDERS</p>
            <div></div>
          </h3>
          <div className={styles.ImageBoxWrapper}>
            <ImageHoverBox
              image={sahil}
              name={"Sahil Sameer"}
              width={""}
              height={""}
              description="Chief Executive Officer"
              className={styles.ImageBox}
              linkedIn="https://www.linkedin.com/in/sahil-sameer/"
            />
            <ImageHoverBox
              image={sebbin}
              name={"Sebbin Antony"}
              width={""}
              height={""}
              description="Chief Technology Officer "
              className={styles.ImageBox}
              linkedIn="https://www.linkedin.com/in/sebbinjoshy/"
            />
            <ImageHoverBox
              image={shahid}
              name={"Mohammed Shahid CO"}
              width={""}
              height={""}
              description="Chief Operating Officer"
              className={styles.ImageBox}
              linkedIn="https://www.linkedin.com/in/shahidco/"
            />
            <ImageHoverBox
              image={amith}
              name={"Amith Tony Joseph"}
              width={"300px"}
              height={"320px"}
              description="MBA- ESMT BERLIN, ENTREPRENEUR, PRODUCT MANAGER AT THRYVE, BERLIN"
              linkedIn="https://www.linkedin.com/in/amith-tj/"
              variant="secondary"
            />
          </div>
        </div>
        <div className={styles.SliderTestimonialWrapper}>
          <h3>TESTIMONIALS</h3>
          <Swiper
            watchSlidesProgress={true}
            centeredSlides={true}
            grabCursor={true}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="OurStory"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            ref={swiperRef}
          >
            {data.map(({ description, name, designation, image }) => {
              return (
                <SwiperSlide>
                  <TestimonialIndividuals
                    description={description}
                    name={name}
                    designation={designation}
                    image={image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

interface Testimonial {
  image: string;
  name: string;
  designation: string;
  description: string;
}

export const TestimonialIndividuals = ({
  name,
  image,
  designation,
  description,
}: Testimonial) => {
  return (
    <div className={styles.IndividualSlider}>
      <div className={styles.Topset}>
        <DoubleQuotessvg />
      </div>
      <div className={styles.testContentWrap}>
        <div className={styles.TextContent}>
          <p>{description}</p>
          <div>
            <h3>{name}</h3>
            <p>{designation}</p>
          </div>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
