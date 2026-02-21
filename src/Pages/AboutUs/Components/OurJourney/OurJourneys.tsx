import SubHeadings from "../../../../Components/subHeadings";
import "./OurJourneys.css";

type Props = {};

export const OurJourneys = (_props: Props) => {
  const data = [
    {
      date: "2018",
      text: "Sahil, a founding member of Keralarescue.in during the 2018 Kerala floods, recognized the profound impact of community engagement for social causes.<img>Shahid, during his time at IIM Indore, successfully developed an edtech platform for IPMAT in collaboration with fellow students, marking a grand success.<img>",
      imgSrc: "https://iili.io/J7DV2tV.png,https://iili.io/J7thgQp.jpg",
    },
    {
      date: "2019",
      text: "Shahid's edtech platform achieved greater success, demonstrating the power of relatable content and role models in entrance exam success.<br>Sahil received the Larry K Wilson Asia and Pacific Outstanding Volunteer Award.<img>",
      imgSrc: "https://iili.io/J7thLan.jpg",
    },
    {
      date: "2020",
      text: "Sahil secured a seat at IIM Indore and began personally mentoring five students for the CAT program.<br>Amith actively volunteered with IEEE's Promotion of Innovation and Entrepreneurship community, expanding his network and gaining hands-on tech expertise.<img>",
      imgSrc: "https://iili.io/J7DVFoB.jpg",
    },
    {
      date: "2021",
      text: "All students mentored by Sahil secured spots in the top 20 B-schools, reinforcing the impact of relatability in entrance coaching.<br>Shahid got featured in Official Humans of Bombay mentioning his journey from a Govt. School in Kerala to IIM Indore and establishing a community driven edtech for IPMAT entrances<img>",
      imgSrc: "https://iili.io/JYJMZYB.png",
    },
    {
      date: "2022",
      text: "Sahil and Shahid graduated from IIM Indore, commencing their corporate careers. Shahid contemplated making his edtech platform open source and discussed the idea with Sahil.<br>Sahil brought Amith into the team, and together they brainstormed the feasibility of a Khan Academy-style model for entrance examinations, addressing a significant gap in the education system.<br>Mobilized a small tech team from Kochi to build an LMS prototype and officially purchased the domain opengrad.in.<img>",
      imgSrc: "https://iili.io/J7th6GI.jpg",
    },
    {
      date: "2023",
      text: "Opengrad Foundation was officially formulated, fostering collaborations with top-tier universities across various disciplines.<br>Got selected as one of the 10 organizations for the incubation cohort by The/Nudge Institute from a remarkable pool of 340+ applicants.<br>Opengrad Foundation found a place in the Impact Orbit Cohort of NSRCEL Indian Institute of Management Bangalore among 19 other organizations across India<img>",
      imgSrc:
        "https://iili.io/J7th4CN.jpg,https://iili.io/J7thP4t.jpg,https://iili.io/J7ths3X.jpg",
    },
    {
      date: "2024",
      text: "47/80 students converted to tier 1 and rest into tier 2 B-schools including IIM Ahmedabad, Bangalore, Indore, Kozhikode etc in our first MBA batch.<br>Launched OpenGrad Ascent: our inhouse fully developed Stakeholder and Volunteer Management system. <img> Went on to be a part of Eivolve Cohort 2024 and gained transformative insights through training, networking, and learning at the bootcamp.<br>Launched 2 major projects with the Govt. of Tamil Nadu and Bihar.<br> Working with 100+ schools under Tribal Welfare Dept,TN, providing CAT and CLAT coaching to 750+ students. Providing CUET Coaching to 3000 students through 100 Libraries with the help of Jeevika (SHG), Bihar<br>Launched CUET, CAT, CLAT, IPMAT cohorts for the year 2024 in regional languages.",
      imgSrc:"https://i.imghippo.com/files/R7349uGw.jpg",
    },
    {
      date: "2025",
      text:""
    }
  ];
  return (
    <div className="pageWrapper">
      <div className="sectionTimelineHeading">
        <SubHeadings text="Our Journey" />
      </div>
      <div className="sectionTimeline">
        <div className="container">
          <div className="timelineComponent">
            <div className="timelineProgress">
              <div className="timelineProgressBar"></div>
            </div>
            {data.map(({ date, text, imgSrc }) => {
              const textSegments = text
                .replace(/<br>/g, "<br/><br/>")
                .split("<img>");
              const images = imgSrc
                ? imgSrc.split(",").map((src) => src.trim())
                : [];
              return (
                <div className="timelineItem">
                  <div id="timelineLeftVerified" className="timelineLeft">
                    <div className="timelineDateText">{date}</div>
                  </div>
                  <div id="timelineCenterVerified" className="timelineCentre">
                    <div className="timelineCircle"></div>
                  </div>
                  <div className="timelineRight">
                    {textSegments.map((segment, index) => (
                      <div className="marginBottomXlarge">
                        <div
                          className="timelineText"
                          dangerouslySetInnerHTML={{ __html: segment }}
                        />
                        {images[index] && (
                          <div className="timelineImageWrapper">
                            <br></br>

                            <img src={images[index]} loading="lazy" alt="" />
                            <br></br>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="overlayFadeBottom"></div>
            <div className="overlayFadeTop"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
