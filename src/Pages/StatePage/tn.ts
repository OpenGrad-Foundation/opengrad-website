import type { StatePageData } from "./types";
import studentsInCuddaloreImage from "../../assets/revamp/tn/students-in-cuddalore.webp";
import studentsInSalemImage from "../../assets/revamp/tn/students-in-salem.webp";
import tamilNaduChiefMinisterFelicitatingStudentsWhoSecuredImage from "../../assets/revamp/tn/tamil-nadu-chief-minister-felicitating-students-who-secured.webp";
import studentsStudyingWithAMentorImage from "../../assets/revamp/tn/students-studying-with-a-mentor.webp";
import aMentorLedSessionDuringVacationClassesImage from "../../assets/revamp/tn/a-mentor-led-session-during-vacation-classes.webp";
import studentsAtTamilNaduNationalLawUniversityImage from "../../assets/revamp/tn/students-at-tamil-nadu-national-law-university.webp";
import studentsInASchoolComputerLabImage from "../../assets/revamp/tn/students-in-a-school-computer-lab.webp";
import cuetBootcampInSalemApril2026Image from "../../assets/revamp/tn/cuet-bootcamp-in-salem-april-2026.webp";
import studentsAtTheSalemCuetBootcampApril2026Image from "../../assets/revamp/tn/students-at-the-salem-cuet-bootcamp-april-2026.webp";
import opengradTeamWithDepartmentOfficialsImage from "../../assets/revamp/tn/opengrad-team-with-department-officials.webp";
import aClassAtTheSalemCuetBootcampImage from "../../assets/revamp/tn/a-class-at-the-salem-cuet-bootcamp.webp";
import governmentSchoolStudentsAtAnOpengradSessionInTamilNImage from "../../assets/revamp/tn/government-school-students-at-an-opengrad-session-in-tamil-n.webp";
import opengradFellowsAtTheirFellowshipGraduationImage from "../../assets/revamp/tn/opengrad-fellows-at-their-fellowship-graduation.webp";
import portraitOfLingeshwaranImage from "../../assets/revamp/tn/portrait-of-lingeshwaran.webp";
import portraitOfLavanyaImage from "../../assets/revamp/tn/portrait-of-lavanya.webp";
import aFellowWithClass12StudentsInCuddaloreImage from "../../assets/revamp/tn/a-fellow-with-class-12-students-in-cuddalore.webp";
import studentsAndFellowsAtAnOpengradProgrammeInTamilNaduImage from "../../assets/revamp/tn/students-and-fellows-at-an-opengrad-programme-in-tamil-nadu.webp";
import inaugurationOfTheProgrammeInCuddaloreImage from "../../assets/revamp/tn/inauguration-of-the-programme-in-cuddalore.webp";
import studentsAndFellowsAtAnOpengradProgrammeInTamilNadu2Image from "../../assets/revamp/tn/students-and-fellows-at-an-opengrad-programme-in-tamil-nadu-2.webp";
import aParentAwarenessSessionImage from "../../assets/revamp/tn/a-parent-awareness-session.webp";
import studentsAndFellowsAtAnOpengradProgrammeInTamilNadu3Image from "../../assets/revamp/tn/students-and-fellows-at-an-opengrad-programme-in-tamil-nadu-3.webp";
import aClassInACuddaloreGovernmentSchoolImage from "../../assets/revamp/tn/a-class-in-a-cuddalore-government-school.webp";
import studentsAndFellowsAtAnOpengradProgrammeInTamilNadu4Image from "../../assets/revamp/tn/students-and-fellows-at-an-opengrad-programme-in-tamil-nadu-4.webp";
import parentsAndTeachersAtASchoolMeetingImage from "../../assets/revamp/tn/parents-and-teachers-at-a-school-meeting.webp";
import studentsAndFellowsAtAnOpengradProgrammeInTamilNadu5Image from "../../assets/revamp/tn/students-and-fellows-at-an-opengrad-programme-in-tamil-nadu-5.webp";
import studentsGatheredAtAnOpengradSessionImage from "../../assets/revamp/tn/students-gathered-at-an-opengrad-session.webp";
import studentsAndFellowsAtAnOpengradProgrammeInTamilNadu6Image from "../../assets/revamp/tn/students-and-fellows-at-an-opengrad-programme-in-tamil-nadu-6.webp";
import aSmartClassSessionAtAResidentialBootcampImage from "../../assets/revamp/tn/a-smart-class-session-at-a-residential-bootcamp.webp";
import studentsWithAScienceModelImage from "../../assets/revamp/tn/students-with-a-science-model.webp";
import mentorsFromLeadingUniversitiesImage from "../../assets/revamp/tn/mentors-from-leading-universities.webp";
import fellowsWithTheDistrictCollectorCuddaloreImage from "../../assets/revamp/tn/fellows-with-the-district-collector-cuddalore.webp";
import portraitOfLaxmiPriyaIasImage from "../../assets/revamp/tn/portrait-of-laxmi-priya-ias.webp";
import portraitOfAkshathaAllenGImage from "../../assets/revamp/tn/portrait-of-akshatha-allen-g.webp";
import portraitOfPradeepaGovindarajImage from "../../assets/revamp/tn/portrait-of-pradeepa-govindaraj.webp";
import portraitOfChenniVelavanImage from "../../assets/revamp/tn/portrait-of-chenni-velavan.webp";

export const tn: StatePageData = {
  id: "tn",
  reportUrl: "https://drive.google.com/file/d/1h7jpXv3rpp6eGyFSqX9l2_T5xtH6b1DB/view?usp=drive_link",
  hero: {
    title: "Higher Education Access Programme in Tamil Nadu",
    image: {
      src: governmentSchoolStudentsAtAnOpengradSessionInTamilNImage,
      alt: "Government school students at an OpenGrad session in Tamil Nadu",
      position: "50% 82.5089%"
    },
    intro: "After two successful years with the Adi Dravidar and Tribal Welfare Department, Government of Tamil Nadu (2024–2026), we reached 6000+ Class XII students across 130 schools in 2025–26, and 70% of them moved on to higher education. This year, we are working with the Cuddalore and Salem district administrations across 137 government schools in Tamil Nadu."
  },
  communities: {
    title: "Our Districts & Communities",
    intro: "Cuddalore and Salem are districts with below-average household incomes, where many students are first-generation college aspirants.",
    layout: "districts",
    cards: [
      {
        name: "Cuddalore",
        label: "DISTRICT",
        image: {
          src: studentsInCuddaloreImage,
          alt: "Students in Cuddalore"
        },
        description: "",
        bullets: [
          {
            text: "Coastal, largely rural district in northern Tamil Nadu"
          },
          {
            text: "Most families depend on farming, fishing and industrial work"
          },

        ],
        map: {
          label: "Map outline of Cuddalore district",
          viewBox: "-2 -2 104.0 83.7",
          width: 96,
          height: 72,
          paths: [
            {
              d: "M31.1 54.9 L26.0 52.9 L19.1 52.2 L16.6 53.2 L9.0 51.9 L0.0 40.7 L2.9 41.0 L5.0 34.2 L13.6 33.4 L15.1 29.9 L20.7 30.7 L22.1 26.9 L25.5 30.7 L32.7 32.2 L35.5 28.6 L38.3 27.5 L39.9 25.0 L44.8 26.7 L48.6 24.1 L54.3 21.8 L60.6 23.5 L59.7 17.2 L62.6 15.0 L62.5 12.6 L59.3 10.7 L60.3 8.0 L64.2 8.2 L64.5 5.6 L63.1 1.0 L69.7 2.6 L73.5 4.5 L76.3 4.4 L80.9 8.7 L85.2 8.1 L86.4 7.5 L87.9 5.4 L86.3 0.0 L92.2 1.8 L95.4 0.7 L98.4 5.8 L91.8 4.2 L91.7 7.9 L90.0 10.5 L98.1 11.7 L94.5 28.1 L94.0 35.3 L95.0 39.2 L98.9 46.6 L100.0 49.9 L98.9 54.6 L94.8 54.4 L94.3 57.7 L90.5 58.4 L86.9 61.6 L83.2 63.0 L76.8 72.4 L73.1 73.4 L69.4 76.1 L62.1 79.7 L66.7 73.9 L67.7 71.2 L66.4 61.9 L63.7 61.9 L54.7 56.1 L54.3 51.5 L52.3 50.5 L44.4 51.2 L44.8 54.5 L37.1 53.4 L31.1 54.9 Z"
            }
          ]
        }
      },
      {
        name: "Salem",
        label: "DISTRICT",
        image: {
          src: studentsInSalemImage,
          alt: "Students in Salem"
        },
        description: "",
        bullets: [
          {
            text: "Western Tamil Nadu district, surrounded by hills"
          },
          {
            text: "Rural blocks around a growing industrial city"
          },

        ],
        map: {
          label: "Map outline of Salem district",
          viewBox: "-2 -2 104.0 61.4",
          width: 96,
          height: 72,
          paths: [
            {
              d: "M1.2 2.3 L6.5 3.5 L8.5 6 L14.8 6.8 L17.3 5.5 L21.6 7 L26.9 7 L31.9 3.7 L34.3 3.5 L41.3 0.9 L48.5 0 L50.4 3.4 L55.7 4 L56 6.4 L59.8 8.5 L56.5 15.7 L58.3 16.1 L61.1 12.8 L62.8 9.1 L65.3 10.1 L65.9 12.1 L69.4 14 L74.9 14.9 L79.1 13.5 L81.7 9.5 L87.4 11 L87.3 15.1 L84.9 15.8 L83.1 18.2 L82.6 22.3 L83.9 22.8 L83.6 26.9 C83.6 26.9 83.9 28.9 84.5 28.6 C86.1 27.9 88 24.8 88 24.8 L89.4 25.6 L94.7 23.8 L96.7 25.1 L96.9 27.5 L95.3 28.5 L95.2 31.6 L98.7 34.8 L97.8 36.2 L100 39.4 L97.2 40.7 L95.5 45.4 L98 46.6 L96.3 51.3 L95.2 50.8 L91.4 45.8 L87.9 45.2 L86.9 47 L83.8 48.1 L84.8 52.3 L82.9 55 L79.8 55.3 L77 57.4 L75.5 57 L75.5 53.6 L73 52.6 L71.8 50.3 L69.8 49.4 L66.5 50 L66.6 47.4 L65.3 43.5 L66.1 41.5 L68.7 39.7 L67.2 37.6 L66.9 33 L59.6 34.7 L56.6 38.7 L54.3 33.7 L51.7 34.6 L49.3 36.9 L46.4 35.8 L42.3 38.1 L35.4 37.2 L35 39.5 L32.3 40.1 L30.9 38.8 L26.8 38.8 L26.3 44.2 L21.8 45.6 L20 48.3 L16.1 48.8 L13.5 45.8 L8.4 45.7 L5.9 46.2 L3 44.5 L5.9 40.6 L5.2 38.5 L7.2 35.3 L6.3 32.5 L8.4 28.4 L7.4 27.2 L4.5 28.5 L2.3 28.3 L3 21.1 L5.1 15.9 L4.1 14.6 L0.3 13.4 L0 8.7 L2 8.8 Z"
            }
          ]
        }
      }
    ]
  },
  people: {
    title: "The Fellows Behind the Mission",
    image: {
      src: opengradFellowsAtTheirFellowshipGraduationImage,
      alt: "OpenGrad fellows at their Fellowship graduation"
    },
    bullets: [
      "Young graduates and early-career professionals, close in age to the students they mentor",
      "Champion all career activities in their schools, working with the school teachers",
      "Run career awareness sessions, foundational skill classes and vacation classes",
      "Help with documents, exam applications and college allotments, all recorded in OpenGrad Hub"
    ]
  },
  lastYear: {
    title: "What Last Year Taught Us",
    intro: "In partnership with the Government of Tamil Nadu, 35 Fellows supported 130 government schools, guiding students from career mapping to college admission and laying the foundation for the programme’s next phase in 2026–27.",
    stats: [
      {
        value: "130",
        label: "Government schools"
      },
      {
        value: "4,714",
        label: "Students career-mapped"
      },
      {
        value: "81%",
        label: "transitioned on to higher education"
      }
    ],
    gallery: [
      {
        src: tamilNaduChiefMinisterFelicitatingStudentsWhoSecuredImage,
        alt: "Tamil Nadu Chief Minister felicitating students who secured Tier-1 admissions",
        featured: true
      },
      {
        src: studentsStudyingWithAMentorImage,
        alt: "Students studying with a mentor",
        featured: false
      },
      {
        src: aMentorLedSessionDuringVacationClassesImage,
        alt: "A mentor-led session during vacation classes",
        featured: false
      },
      {
        src: studentsAtTamilNaduNationalLawUniversityImage,
        alt: "Students at Tamil Nadu National Law University",
        featured: false
      },
      {
        src: studentsInASchoolComputerLabImage,
        alt: "Students in a school computer lab",
        featured: false
      },
      {
        src: cuetBootcampInSalemApril2026Image,
        alt: "CUET bootcamp in Salem, April 2026",
        featured: false
      },
      {
        src: studentsAtTheSalemCuetBootcampApril2026Image,
        alt: "Students at the Salem CUET bootcamp, April 2026",
        featured: false
      },
      {
        src: opengradTeamWithDepartmentOfficialsImage,
        alt: "OpenGrad team with Department officials",
        featured: false
      },
      {
        src: aClassAtTheSalemCuetBootcampImage,
        alt: "A class at the Salem CUET bootcamp",
        featured: false
      }
    ],
    testimonials: [
      {
        quote: "“OpenGrad coaching and bootcamp truly transformed me; before this, I knew nothing about CUET.”",
        name: "Lingeshwaran",
        role: "Central University of Tamil Nadu",
        image: {
          src: portraitOfLingeshwaranImage,
          alt: "Portrait of Lingeshwaran",
          position: "center 25%"
        }
      },
      {
        quote: "“This camp gave me exposure to various exams. I learnt about the IITTM exam, and I love travelling. The faculty cleared my doubts anytime.”",
        name: "Lavanya",
        role: "Indian Institute of Tourism & Travel Management, Noida",
        image: {
          src: portraitOfLavanyaImage,
          alt: "Portrait of Lavanya",
          position: "center center"
        }
      }
    ]
  },
  classrooms: [
    {
      src: aFellowWithClass12StudentsInCuddaloreImage,
      alt: "A fellow with Class 12 students in Cuddalore"
    },
    {
      src: studentsAndFellowsAtAnOpengradProgrammeInTamilNaduImage,
      alt: "Students and fellows at an OpenGrad programme in Tamil Nadu"
    },
    {
      src: inaugurationOfTheProgrammeInCuddaloreImage,
      alt: "Inauguration of the programme in Cuddalore"
    },
    {
      src: studentsAndFellowsAtAnOpengradProgrammeInTamilNadu2Image,
      alt: "Students and fellows at an OpenGrad programme in Tamil Nadu"
    },
    {
      src: aParentAwarenessSessionImage,
      alt: "A parent awareness session"
    },
    {
      src: studentsAndFellowsAtAnOpengradProgrammeInTamilNadu3Image,
      alt: "Students and fellows at an OpenGrad programme in Tamil Nadu"
    },
    {
      src: aClassInACuddaloreGovernmentSchoolImage,
      alt: "A class in a Cuddalore government school"
    },
    {
      src: studentsAndFellowsAtAnOpengradProgrammeInTamilNadu4Image,
      alt: "Students and fellows at an OpenGrad programme in Tamil Nadu"
    },
    {
      src: parentsAndTeachersAtASchoolMeetingImage,
      alt: "Parents and teachers at a school meeting"
    },
    {
      src: studentsAndFellowsAtAnOpengradProgrammeInTamilNadu5Image,
      alt: "Students and fellows at an OpenGrad programme in Tamil Nadu"
    },
    {
      src: studentsGatheredAtAnOpengradSessionImage,
      alt: "Students gathered at an OpenGrad session"
    },
    {
      src: studentsAndFellowsAtAnOpengradProgrammeInTamilNadu6Image,
      alt: "Students and fellows at an OpenGrad programme in Tamil Nadu"
    },
    {
      src: aSmartClassSessionAtAResidentialBootcampImage,
      alt: "A smart-class session at a residential bootcamp"
    },
    {
      src: studentsWithAScienceModelImage,
      alt: "Students with a science model"
    },
    {
      src: mentorsFromLeadingUniversitiesImage,
      alt: "Mentors from leading universities"
    },
    {
      src: fellowsWithTheDistrictCollectorCuddaloreImage,
      alt: "Fellows with the District Collector, Cuddalore"
    }
  ],
  voices: [
    {
      quote: "“OpenGrad transformed our classrooms, driving exponential growth in student results, confidence and ambition. What began as coaching has become a pathway the district can build on.”",
      name: "Laxmi Priya IAS",
      role: "Past Secretary to the Government, ADW & TW Department, Tamil Nadu",
      image: {
        src: portraitOfLaxmiPriyaIasImage,
        alt: "Portrait of Laxmi Priya IAS",
        position: "center 20%"
      }
    },
    {
      quote: "“What I love most about OpenGrad is the synergy created when young people come together with a shared purpose of supporting students. The fraternity we build goes beyond mentorship; it creates a deep sense of belonging, trust and confidence. That sense of belonging gives students the courage to dream bigger and believe in what they can achieve.”",
      name: "Akshatha Allen G",
      role: "Tamil Nadu Head, OpenGrad",
      image: {
        src: portraitOfAkshathaAllenGImage,
        alt: "Portrait of Akshatha Allen G",
        position: "center 20%"
      }
    },
    {
      quote: "“The OpenGrad Fellowship gave me my first professional experience while allowing me to contribute to social impact. One of the most rewarding parts was witnessing the growth and improvement of the students I worked to support. It is a learning experience I will carry with me beyond the fellowship.”",
      name: "Pradeepa Govindaraj",
      role: "Fellow 2025–26, OpenGrad",
      image: {
        src: portraitOfPradeepaGovindarajImage,
        alt: "Portrait of Pradeepa Govindaraj",
        position: "center 20%"
      }
    },
    {
      quote: "“Before joining the bootcamp I had concerns about how the students would respond to us, and whether managing a large group during their holidays would be challenging. The experience turned out very different from what I had expected. The students were enthusiastic, eager to learn, and gradually became more open and participative.”",
      name: "Chenni Velavan",
      role: "Mentor, OpenGrad · IIT Madras",
      image: {
        src: portraitOfChenniVelavanImage,
        alt: "Portrait of Chenni Velavan",
        position: "center 20%"
      }
    }
  ]
};
