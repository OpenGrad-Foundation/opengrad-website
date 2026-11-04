import type { StatePageData } from "./types";
import studentsAtTheKasaragodBootcampImage from "../../assets/revamp/kl/students-at-the-kasaragod-bootcamp.webp";
import studentsPractisingOnTheCuetMockInterfaceImage from "../../assets/revamp/kl/students-practising-on-the-cuet-mock-interface.webp";
import studentsAtTheThiruvananthapuramBootcampImage from "../../assets/revamp/kl/students-at-the-thiruvananthapuram-bootcamp.webp";
import studentsInAClassroomSessionAtAKeralaBootcampImage from "../../assets/revamp/kl/students-in-a-classroom-session-at-a-kerala-bootcamp.webp";
import computerBasedMockTestsAtTheKasaragodBootcampImage from "../../assets/revamp/kl/computer-based-mock-tests-at-the-kasaragod-bootcamp.webp";
import bootcampPalakkadImage from "../../assets/revamp/kl/bootcamp-palakkad.webp";
import aSmartBoardSessionInPalakkadImage from "../../assets/revamp/kl/a-smart-board-session-in-palakkad.webp";
import aMentorTeachingAtTheThiruvananthapuramBootcampImage from "../../assets/revamp/kl/a-mentor-teaching-at-the-thiruvananthapuram-bootcamp.webp";
import aSmartBoardClassAtThePalakkadResidentialBootcampKerImage from "../../assets/revamp/kl/a-smart-board-class-at-the-palakkad-residential-bootcamp-ker.webp";
import portraitOfAbhiramMadhuImage from "../../assets/revamp/kl/portrait-of-abhiram-madhu.webp";
import portraitOfAbhiramiGImage from "../../assets/revamp/kl/portrait-of-abhirami-g.webp";
import studentsAtAnOpengradProgrammeInKeralaImage from "../../assets/revamp/kl/students-at-an-opengrad-programme-in-kerala.webp";
import studentsAtAnOpengradProgrammeInKerala2Image from "../../assets/revamp/kl/students-at-an-opengrad-programme-in-kerala-2.webp";
import studentsAtAnOpengradProgrammeInKerala3Image from "../../assets/revamp/kl/students-at-an-opengrad-programme-in-kerala-3.webp";
import studentsAtAnOpengradProgrammeInKerala4Image from "../../assets/revamp/kl/students-at-an-opengrad-programme-in-kerala-4.webp";
import studentsAtAnOpengradProgrammeInKerala5Image from "../../assets/revamp/kl/students-at-an-opengrad-programme-in-kerala-5.webp";
import studentsAtAnOpengradProgrammeInKerala6Image from "../../assets/revamp/kl/students-at-an-opengrad-programme-in-kerala-6.webp";
import studentsAtAnOpengradProgrammeInKerala7Image from "../../assets/revamp/kl/students-at-an-opengrad-programme-in-kerala-7.webp";
import studentsAtAnOpengradProgrammeInKerala8Image from "../../assets/revamp/kl/students-at-an-opengrad-programme-in-kerala-8.webp";
import portraitOfMithunPremrajIasImage from "../../assets/revamp/kl/portrait-of-mithun-premraj-ias.webp";
import portraitOfKrishnaSunishImage from "../../assets/revamp/kl/portrait-of-krishna-sunish.webp";
import portraitOfHennaRosePeterImage from "../../assets/revamp/kl/portrait-of-henna-rose-peter.webp";

export const kl: StatePageData = {
  id: "kl",
  reportUrl: "https://drive.google.com/file/d/1GsKZcKx2aA7ux4X6UH97jXfOx0-9Kso2/view?usp=drive_link",
  hero: {
    title: "Higher Education Access Programme in Kerala",
    year: "2026–2027",
    image: {
      src: aSmartBoardClassAtThePalakkadResidentialBootcampKerImage,
      alt: "A smart-board class at the Palakkad residential bootcamp, Kerala",
      position: "50% 50%"
    },
    intro: "After a successful year with the SC & ST Development Department, Government of Kerala, where 90% of the residential cohort moved on to higher education, the programme now expands to all 14 districts of Kerala, guiding students from welfare schools from career planning to college admission."
  },
  communities: {
    hidden: true,
    title: "Our Districts & Communities",
    intro: "Students from Scheduled Caste and Scheduled Tribe communities across Kerala, many of them the first in their families to aim for college.",
    layout: "zones",
    cards: [
      {
        name: "Malabar",
        label: "ZONE",
        image: {
          src: studentsAtTheKasaragodBootcampImage,
          alt: "Students at the Kasaragod bootcamp"
        },
        description: "Kasaragod, Kannur, Wayanad, Kozhikode, Malappuram, Palakkad",
        bullets: [
          {
            text: "per capita income (state: ₹1.90 lakh)",
            strong: "₹1.49 lakh"
          }
        ],
        map: {
          label: "Map outline of the Malabar zone",
          viewBox: "-2 -2 85.2 104.0",
          width: 80,
          height: 80,
          paths: [
            {
              d: "M21.8 20.5 L20.9 20.5 L19.0 21.5 L17.2 21.4 L16.7 21.7 L16.8 22.9 L15.3 23.4 L14.5 23.3 L13.4 24.6 L12.2 24.6 L13.1 26.6 L12.8 27.1 L12.9 27.7 L12.8 28.4 L12.7 28.4 L12.3 28.2 L11.9 28.7 L10.3 24.1 L6.9 16.5 L5.9 15.3 L4.2 12.0 L3.5 9.8 L3.5 10.0 L2.8 8.3 L3.4 7.7 L2.9 7.6 L2.9 8.1 L2.6 7.4 L3.3 6.5 L2.4 7.5 L0.8 3.6 L1.5 4.1 L1.0 3.4 L0.7 3.5 L0.0 1.8 L0.1 1.5 L0.6 1.7 L2.6 0.6 L3.8 0.6 L4.0 0.8 L4.4 0.6 L4.6 0.6 L4.8 0.5 L4.8 0.0 L4.9 0.0 L5.2 0.4 L5.4 0.2 L5.4 0.2 L5.6 1.1 L4.6 2.3 L5.7 2.7 L5.3 3.2 L7.3 3.1 L7.5 4.1 L6.9 4.4 L7.1 5.2 L8.0 5.3 L8.7 4.9 L8.7 3.6 L9.5 4.0 L9.7 4.6 L10.6 4.9 L11.4 4.6 L11.3 4.9 L11.7 5.0 L10.8 6.1 L11.7 7.1 L13.3 6.8 L13.2 7.4 L13.6 7.9 L13.3 8.4 L13.6 8.2 L14.1 9.2 L14.7 9.2 L16.2 7.2 L16.4 7.2 L17.7 8.3 L18.2 8.2 L17.8 9.0 L16.8 8.6 L16.6 9.1 L16.1 9.1 L16.0 10.0 L16.4 11.0 L17.3 11.1 L17.4 11.9 L18.5 12.0 L18.7 13.5 L19.6 13.4 L20.1 12.9 L19.9 12.3 L20.5 11.9 L21.8 12.0 L22.0 12.5 L22.1 13.1 L20.9 14.0 L19.9 13.7 L19.8 13.7 L19.8 15.6 L20.4 16.4 L22.1 17.2 L21.6 18.2 L22.5 19.8 L22.4 19.8 L21.8 20.5 Z M11.9 28.7 L12.3 28.2 L12.7 28.4 L12.8 28.4 L12.9 27.7 L12.8 27.1 L13.1 26.6 L12.2 24.6 L13.4 24.6 L14.5 23.3 L15.3 23.4 L16.8 22.9 L16.7 21.7 L17.2 21.4 L19.0 21.5 L20.9 20.5 L21.8 20.5 L21.8 20.6 L24.6 20.5 L26.8 23.6 L26.5 24.2 L27.3 24.5 L28.3 25.9 L28.9 26.4 L30.0 26.0 L30.6 26.3 L31.1 27.9 L31.6 28.3 L33.3 27.9 L33.2 28.6 L33.9 28.9 L33.8 29.5 L35.3 28.9 L37.3 29.1 L36.9 30.1 L36.9 30.1 L36.9 30.1 L37.2 30.8 L38.1 31.8 L38.3 33.0 L39.0 33.1 L39.9 34.3 L42.6 34.7 L42.7 34.7 L42.5 34.9 L42.2 35.4 L42.3 35.8 L42.6 36.8 L41.6 37.5 L42.4 38.1 L42.2 38.7 L37.5 38.2 L36.7 38.8 L37.0 39.7 L37.1 39.7 L37.0 39.7 L36.0 40.4 L36.9 40.9 L35.8 40.4 L35.0 40.5 L35.3 41.1 L34.3 41.3 L33.8 40.6 L32.8 40.5 L31.8 42.2 L28.7 44.0 L29.2 45.1 L28.0 45.6 L27.3 44.4 L26.7 44.3 L26.5 44.3 L26.2 44.2 L24.2 41.8 L23.4 41.6 L23.7 41.3 L23.1 41.2 L22.7 40.2 L20.7 38.2 L19.5 38.0 L18.0 36.2 L17.4 34.3 L16.9 34.2 L15.3 32.0 L14.3 31.4 L13.3 32.1 L11.9 28.7 Z M42.6 34.7 L42.6 34.7 L45.2 35.1 L47.9 33.7 L49.6 33.2 L49.6 33.2 L49.6 38.1 L49.9 38.4 L51.3 37.6 L52.7 37.6 L53.4 38.0 L53.5 39.3 L54.0 40.1 L54.9 40.3 L56.3 40.0 L57.4 41.1 L57.8 42.4 L58.9 42.9 L59.2 43.0 L61.6 42.1 L61.5 42.8 L61.5 42.8 L61.5 42.8 L62.1 43.5 L61.2 44.1 L61.2 44.2 L61.7 45.7 L61.7 45.7 L61.7 45.7 L62.8 46.7 L62.3 47.3 L60.6 47.4 L60.2 48.5 L58.7 49.1 L58.7 49.1 L58.5 48.8 L57.2 49.8 L56.9 49.0 L56.2 48.6 L54.5 49.9 L54.4 49.9 L54.6 50.2 L55.1 51.6 L54.4 51.5 L54.4 51.5 L54.4 51.5 L54.0 52.3 L52.8 52.7 L52.7 52.7 L52.7 52.9 L52.5 53.8 L50.8 54.7 L50.0 53.8 L48.6 53.2 L48.7 52.3 L48.2 51.8 L48.2 51.8 L46.6 52.6 L44.0 50.8 L43.2 49.4 L41.5 48.6 L41.0 46.9 L41.1 45.5 L41.7 44.9 L39.2 44.4 L37.6 42.8 L36.8 42.8 L37.1 42.4 L36.5 42.1 L36.9 40.9 L36.0 40.4 L37.0 39.7 L37.1 39.7 L37.0 39.7 L36.7 38.8 L37.5 38.2 L42.2 38.7 L42.4 38.1 L41.6 37.5 L42.6 36.8 L42.3 35.8 L42.2 35.4 L42.5 34.9 L42.7 34.7 L42.6 34.7 Z M36.9 40.9 L36.5 42.1 L37.1 42.4 L36.8 42.8 L37.6 42.8 L39.2 44.4 L41.7 44.9 L41.1 45.5 L41.0 46.9 L41.5 48.6 L43.2 49.4 L44.0 50.8 L46.6 52.6 L48.2 51.8 L48.2 51.8 L48.7 52.3 L48.6 53.2 L50.0 53.8 L50.8 54.7 L50.8 54.7 L50.8 56.0 L50.3 55.7 L49.8 56.4 L49.3 56.4 L49.1 57.3 L48.8 58.7 L48.8 58.7 L49.8 59.3 L49.7 60.2 L48.4 60.5 L46.9 62.3 L45.7 62.1 L44.9 62.6 L44.1 62.1 L41.9 63.4 L41.1 63.2 L41.0 63.7 L39.4 64.7 L39.6 65.3 L40.5 65.5 L40.7 66.0 L39.7 66.0 L39.2 66.8 L39.5 67.3 L38.9 67.2 L38.2 68.0 L37.3 66.6 L37.5 66.4 L35.1 60.0 L34.6 59.8 L34.4 58.5 L33.1 55.7 L31.7 54.2 L30.5 54.2 L29.9 53.6 L26.7 44.8 L27.3 44.4 L28.0 45.6 L29.2 45.1 L28.7 44.0 L31.8 42.2 L32.8 40.5 L33.8 40.6 L34.3 41.3 L35.3 41.1 L35.0 40.5 L35.8 40.4 L36.9 40.9 Z M50.8 54.7 L52.5 53.8 L52.7 52.9 L52.7 52.7 L52.8 52.7 L54.0 52.3 L54.4 51.5 L54.4 51.5 L54.4 51.5 L55.1 52.6 L55.0 54.0 L56.5 53.4 L56.9 54.1 L58.1 54.5 L58.8 54.0 L61.0 55.2 L61.8 55.0 L61.7 55.8 L63.5 57.2 L65.7 57.9 L65.4 58.6 L66.9 58.4 L67.0 59.5 L66.5 60.2 L66.9 60.8 L66.1 61.3 L65.9 62.0 L63.2 63.2 L63.0 64.6 L62.7 64.8 L61.2 64.5 L61.1 65.4 L61.6 66.0 L61.4 68.2 L60.5 68.5 L60.6 69.0 L58.8 69.4 L58.2 70.0 L58.3 70.8 L56.8 70.9 L56.4 71.5 L56.4 71.6 L56.6 72.1 L57.5 71.8 L58.2 72.0 L58.0 72.8 L58.4 73.0 L59.9 73.1 L59.5 74.1 L58.2 73.8 L57.9 75.6 L58.4 76.2 L58.4 76.9 L56.9 76.3 L55.8 76.5 L55.2 77.6 L54.4 77.7 L53.7 76.5 L53.3 77.1 L52.8 77.2 L52.6 76.7 L52.0 76.8 L51.9 76.5 L51.1 77.5 L50.3 77.2 L50.3 78.0 L49.7 77.8 L49.6 78.4 L49.2 78.2 L49.0 79.4 L48.3 79.5 L47.8 79.6 L46.9 79.2 L46.9 79.2 L46.2 80.2 L47.1 81.1 L46.7 82.5 L46.7 82.7 L46.9 83.3 L47.0 83.5 L47.0 83.5 L47.1 83.5 L47.8 83.6 L47.8 83.8 L47.9 84.0 L47.9 84.0 L47.8 84.0 L47.8 84.2 L47.7 84.2 L47.2 85.0 L46.1 85.2 L45.6 85.6 L44.4 85.7 L44.3 85.6 L43.4 85.8 L41.5 81.4 L38.2 68.0 L38.9 67.2 L39.5 67.3 L39.2 66.8 L39.7 66.0 L40.7 66.0 L40.5 65.5 L39.6 65.3 L39.4 64.7 L41.0 63.7 L41.1 63.2 L41.9 63.4 L44.1 62.1 L44.9 62.6 L45.7 62.1 L46.9 62.3 L48.4 60.5 L49.7 60.2 L49.8 59.3 L48.8 58.7 L48.8 58.7 L49.1 57.3 L49.3 56.4 L49.8 56.4 L50.3 55.7 L50.8 56.0 L50.8 54.7 L50.8 54.7 Z M47.9 84.0 L47.8 83.8 L47.8 83.6 L47.1 83.5 L47.0 83.5 L47.0 83.5 L46.9 83.3 L46.7 82.7 L46.7 82.5 L47.1 81.1 L46.2 80.2 L46.9 79.2 L46.9 79.2 L47.8 79.6 L48.3 79.5 L49.0 79.4 L49.2 78.2 L49.6 78.4 L49.7 77.8 L50.3 78.0 L50.3 77.2 L51.1 77.5 L51.9 76.5 L52.0 76.8 L52.6 76.7 L52.8 77.2 L53.3 77.1 L53.7 76.5 L54.4 77.7 L55.2 77.6 L55.8 76.5 L56.9 76.3 L58.4 76.9 L58.4 76.2 L57.9 75.6 L58.2 73.8 L59.5 74.1 L59.9 73.1 L58.4 73.0 L58.0 72.8 L58.2 72.0 L57.5 71.8 L56.6 72.1 L56.4 71.6 L56.4 71.5 L56.8 70.9 L58.3 70.8 L58.2 70.0 L58.8 69.4 L60.6 69.0 L60.5 68.5 L61.4 68.2 L61.6 66.0 L61.1 65.4 L61.2 64.5 L62.7 64.8 L63.1 64.9 L63.4 65.4 L64.0 65.1 L63.9 64.5 L64.9 64.4 L65.0 64.4 L66.4 65.4 L70.2 65.1 L72.6 63.4 L72.9 63.3 L73.1 63.3 L73.3 63.3 L73.3 63.2 L74.4 64.2 L74.1 65.2 L72.8 66.2 L73.2 67.2 L73.5 66.8 L74.3 67.6 L74.9 67.5 L74.7 68.8 L75.2 69.8 L74.7 70.0 L74.9 70.7 L76.1 71.3 L77.0 70.8 L76.7 71.5 L75.7 71.8 L73.7 71.3 L73.6 71.3 L73.0 71.9 L71.6 74.8 L71.2 75.5 L71.4 75.6 L71.8 76.0 L72.1 76.3 L74.6 77.4 L76.3 77.4 L78.1 78.2 L79.1 79.5 L79.0 80.3 L79.0 80.4 L81.0 80.8 L81.1 81.0 L81.2 81.8 L80.6 83.8 L80.5 83.9 L80.5 83.9 L80.5 83.9 L80.7 84.4 L80.6 84.5 L79.7 85.6 L79.6 85.8 L79.8 86.0 L80.3 87.7 L77.6 87.8 L77.4 88.3 L77.7 89.1 L78.5 89.4 L78.4 91.5 L78.7 91.8 L77.6 96.4 L78.3 97.1 L77.9 97.6 L78.9 98.7 L78.3 99.9 L78.3 100.0 L77.6 99.5 L77.1 100.0 L75.1 100.0 L75.5 99.0 L73.6 98.5 L72.5 98.9 L71.5 98.0 L71.2 98.3 L69.9 98.2 L68.6 96.0 L67.4 96.0 L66.0 94.6 L64.0 93.9 L62.7 92.4 L62.3 91.8 L62.6 91.0 L61.1 89.4 L61.6 89.5 L62.2 88.7 L61.7 88.2 L62.0 87.3 L63.1 86.6 L62.7 85.4 L63.3 85.2 L64.1 84.0 L63.8 83.1 L60.9 83.3 L60.3 82.4 L59.6 82.6 L59.2 83.5 L56.6 82.9 L55.1 83.3 L54.8 82.3 L52.7 81.9 L53.3 82.4 L53.2 83.1 L52.8 83.2 L52.0 84.6 L51.7 84.9 L51.6 84.9 L51.6 84.9 L51.4 84.5 L51.4 84.5 L51.2 84.7 L50.4 84.3 L50.0 84.8 L49.0 84.0 L47.9 84.0 L47.9 84.0 Z",
              stroke: true
            }
          ]
        }
      },
      {
        name: "Kochi",
        label: "ZONE",
        image: {
          src: studentsPractisingOnTheCuetMockInterfaceImage,
          alt: "Students practising on the CUET mock interface"
        },
        description: "Thrissur, Ernakulam, Idukki",
        bullets: [
          {
            text: "per capita income (state: ₹1.90 lakh)",
            strong: "₹2.33 lakh"
          }
        ],
        map: {
          label: "Map outline of the Kochi zone",
          viewBox: "-2 -2 99.0 104.0",
          width: 80,
          height: 80,
          paths: [
            {
              d: "M0.0 6.4 L1.5 6.0 L1.7 6.3 L3.6 6.0 L4.4 5.5 L6.2 5.1 L7.0 3.8 L7.2 3.8 L7.2 3.5 L7.3 3.4 L7.3 3.4 L7.3 3.4 L9.1 3.5 L10.8 4.7 L11.5 3.9 L12.8 4.6 L13.1 4.2 L13.1 4.2 L13.4 5.0 L13.5 4.9 L13.6 4.9 L14.0 4.5 L15.3 2.1 L16.1 2.0 L16.2 0.9 L15.2 0.0 L18.7 0.6 L19.2 2.4 L21.6 1.7 L25.9 2.6 L26.6 1.3 L27.7 0.9 L28.7 2.4 L33.4 2.0 L34.0 3.4 L32.6 5.5 L31.5 5.7 L32.2 7.8 L30.5 8.8 L30.1 10.3 L30.8 11.1 L29.7 12.4 L29.0 12.3 L31.4 14.9 L31.0 16.2 L31.6 17.1 L33.7 19.6 L37.0 20.7 L39.2 23.0 L41.2 23.0 L43.5 26.7 L45.5 26.8 L46.0 26.3 L47.6 27.8 L49.4 27.1 L52.6 27.9 L52.0 29.6 L55.3 29.5 L56.0 28.7 L57.1 29.5 L57.2 29.3 L57.5 29.5 L57.3 30.1 L56.9 31.4 L57.0 31.6 L58.2 33.0 L59.8 32.1 L59.8 33.5 L61.0 34.6 L60.0 34.1 L58.9 33.7 L57.6 33.1 L57.3 33.3 L55.6 32.9 L55.4 33.0 L55.2 33.0 L53.0 34.0 L51.6 33.4 L48.2 34.3 L46.0 33.3 L43.3 33.7 L40.5 31.8 L40.5 31.8 L39.8 32.4 L40.2 33.0 L39.0 33.1 L29.9 32.4 L28.3 34.9 L24.9 36.5 L24.4 38.0 L23.1 38.2 L23.2 39.8 L22.5 39.6 L22.3 39.9 L20.7 40.2 L19.8 38.5 L19.8 38.5 L17.1 38.1 L16.8 39.0 L13.4 39.6 L9.4 26.5 L0.0 6.4 Z M16.8 39.0 L17.1 38.1 L19.8 38.5 L19.8 38.5 L20.7 40.2 L22.3 39.9 L22.5 39.6 L23.2 39.8 L23.1 38.2 L24.4 38.0 L24.9 36.5 L28.3 34.9 L29.9 32.4 L39.0 33.1 L40.2 33.0 L39.8 32.4 L40.5 31.8 L40.5 31.8 L43.3 33.7 L46.0 33.3 L48.2 34.3 L51.6 33.4 L53.0 34.0 L55.2 33.0 L55.4 33.0 L55.6 32.9 L57.3 33.3 L57.6 33.1 L58.9 33.7 L60.0 34.1 L61.0 34.6 L61.3 34.7 L61.5 35.0 L61.5 35.1 L62.2 36.1 L62.3 36.3 L62.4 36.3 L64.1 36.0 L66.9 37.3 L71.3 34.6 L71.3 34.5 L71.4 34.5 L71.9 35.9 L69.1 37.1 L70.3 38.0 L72.3 37.7 L73.9 39.6 L72.9 40.1 L69.7 39.9 L69.6 39.9 L67.3 41.2 L63.3 40.0 L59.4 45.5 L59.2 47.0 L56.8 45.9 L56.0 46.4 L56.5 47.7 L53.0 47.4 L54.8 49.0 L57.6 50.2 L56.6 51.0 L53.9 49.5 L52.7 51.2 L52.8 53.1 L51.5 52.4 L49.6 52.8 L49.3 53.6 L50.1 54.7 L47.5 56.9 L48.4 57.7 L48.3 57.8 L47.3 57.7 L45.1 57.1 L44.2 57.5 L44.0 57.5 L43.9 57.6 L44.0 58.5 L44.1 60.9 L43.9 61.3 L43.9 61.5 L43.7 61.4 L43.4 61.4 L42.7 61.6 L43.1 62.6 L40.7 62.2 L40.7 63.7 L39.4 63.8 L39.1 65.0 L38.6 65.1 L38.5 65.1 L38.4 65.1 L38.0 63.7 L36.8 63.6 L35.8 61.8 L33.7 62.3 L32.7 61.9 L29.8 63.6 L28.2 62.1 L27.2 62.6 L27.1 62.6 L25.9 59.5 L24.5 59.9 L22.2 59.2 L22.2 61.6 L21.5 61.8 L21.1 63.2 L21.8 64.4 L21.0 65.8 L21.3 68.3 L18.3 54.7 L18.5 53.0 L17.2 51.9 L13.8 39.8 L16.8 39.0 Z M71.3 34.5 L71.4 34.1 L71.5 33.8 L70.9 33.0 L74.2 31.2 L74.3 31.3 L76.8 29.8 L79.9 28.1 L83.4 28.4 L82.9 30.8 L85.3 34.3 L85.0 36.5 L86.7 36.4 L86.9 36.4 L87.4 37.3 L86.0 39.5 L85.6 43.6 L85.5 43.7 L83.8 43.2 L81.6 44.0 L81.6 44.0 L81.4 46.0 L85.3 49.9 L84.7 51.0 L85.4 51.5 L85.9 54.2 L84.2 55.0 L82.3 58.1 L82.5 59.4 L82.0 59.9 L83.6 61.6 L82.7 62.1 L82.6 63.6 L83.8 64.0 L84.2 65.2 L82.6 65.9 L83.3 67.1 L82.5 68.7 L82.7 69.7 L81.4 70.2 L81.6 72.1 L79.9 74.5 L79.7 75.1 L79.0 77.5 L79.1 77.6 L81.7 77.5 L83.4 79.6 L85.7 80.1 L88.8 78.2 L89.6 78.4 L89.3 79.7 L90.2 80.1 L91.7 78.2 L92.0 78.6 L91.4 78.7 L91.6 79.8 L90.9 80.5 L91.9 81.5 L91.9 81.9 L93.2 83.7 L94.2 83.2 L94.4 83.4 L95.0 84.4 L94.1 85.2 L93.7 87.7 L92.7 88.1 L92.2 87.8 L91.8 87.8 L91.5 88.2 L90.4 90.0 L90.3 90.3 L90.3 90.3 L90.3 90.3 L90.3 90.3 L90.2 91.1 L90.2 93.4 L90.1 93.9 L89.3 95.8 L87.7 95.8 L87.6 97.5 L86.5 98.3 L86.5 100.0 L84.3 98.9 L83.6 99.4 L82.7 98.5 L84.1 92.8 L83.5 91.7 L82.6 89.9 L81.7 88.4 L81.7 88.4 L80.1 88.0 L79.9 86.8 L79.1 87.5 L78.2 86.9 L76.9 87.7 L74.7 87.1 L73.7 87.6 L72.0 88.5 L72.4 90.5 L68.8 91.0 L68.7 91.0 L68.7 91.0 L69.2 88.9 L66.0 87.4 L66.4 87.2 L66.9 87.0 L66.6 85.1 L65.6 84.4 L64.8 85.7 L61.8 83.6 L61.6 82.5 L60.6 82.4 L60.4 79.7 L61.2 79.3 L61.0 76.4 L61.7 76.1 L63.5 77.4 L63.8 77.0 L62.7 75.5 L63.3 74.8 L61.7 73.2 L60.8 70.6 L59.4 69.4 L59.0 69.8 L55.5 65.8 L53.6 64.6 L52.0 64.0 L51.3 64.8 L47.6 62.6 L47.2 62.5 L45.0 62.4 L43.8 61.7 L43.9 61.5 L43.9 61.3 L44.1 60.9 L44.0 58.5 L43.9 57.6 L44.0 57.5 L44.2 57.5 L45.1 57.1 L47.3 57.7 L48.3 57.8 L48.4 57.7 L47.5 56.9 L50.1 54.7 L49.3 53.6 L49.6 52.8 L51.5 52.4 L52.8 53.1 L52.7 51.2 L53.9 49.5 L56.6 51.0 L57.6 50.2 L54.8 49.0 L53.0 47.4 L56.5 47.7 L56.0 46.4 L56.8 45.9 L59.2 47.0 L59.4 45.5 L63.3 40.0 L67.3 41.2 L69.6 39.9 L69.7 39.9 L72.9 40.1 L73.9 39.6 L72.3 37.7 L70.3 38.0 L69.1 37.1 L71.9 35.9 L71.4 34.5 L71.3 34.5 Z",
              stroke: true
            }
          ]
        }
      },
      {
        name: "Travancore",
        label: "ZONE",
        image: {
          src: studentsAtTheThiruvananthapuramBootcampImage,
          alt: "Students at the Thiruvananthapuram bootcamp"
        },
        description: "Kottayam, Alappuzha, Pathanamthitta, Kollam, Thiruvananthapuram",
        bullets: [
          {
            text: "per capita income (state: ₹1.90 lakh)",
            strong: "₹2.21 lakh"
          }
        ],
        map: {
          label: "Map outline of the Travancore zone",
          viewBox: "-2 -2 66.4 104.0",
          width: 80,
          height: 80,
          paths: [
            {
              d: "M21.6 2.2 L21.5 2.4 L22.7 3.1 L24.8 3.1 L25.1 3.3 L28.6 5.4 L29.3 4.5 L30.9 5.1 L32.7 6.3 L35.9 10.0 L36.3 9.7 L37.6 10.8 L38.5 13.3 L40.0 14.8 L39.5 15.4 L40.5 16.8 L40.2 17.2 L38.5 16.0 L37.9 16.2 L38.1 19.0 L37.2 19.4 L37.5 21.9 L38.4 22.0 L38.6 23.1 L41.5 25.0 L42.2 23.8 L43.2 24.5 L43.5 26.3 L42.9 26.5 L42.2 26.6 L41.1 27.6 L40.8 27.8 L40.8 27.9 L41.0 28.8 L41.6 28.4 L43.6 29.2 L39.9 29.7 L39.9 29.7 L35.5 27.1 L35.2 27.8 L34.2 27.4 L33.6 27.8 L32.2 27.0 L30.0 28.4 L29.0 27.4 L28.8 26.0 L26.5 27.3 L26.0 25.9 L24.5 25.4 L22.4 25.7 L22.0 26.7 L21.5 26.2 L21.4 26.8 L19.3 27.6 L19.4 29.9 L18.5 29.3 L17.3 30.0 L16.9 29.1 L14.6 30.2 L14.5 30.6 L14.0 30.4 L14.0 30.4 L14.0 30.4 L14.3 28.4 L13.3 27.9 L13.3 27.9 L14.2 24.6 L12.4 23.9 L12.4 22.0 L11.5 21.7 L11.5 20.5 L9.1 21.2 L8.3 20.4 L7.0 21.4 L7.6 12.7 L6.0 12.0 L6.3 8.6 L5.3 6.0 L6.3 4.3 L5.8 3.3 L5.9 3.2 L6.7 2.8 L8.3 4.2 L11.0 2.6 L12.0 3.0 L14.0 2.5 L14.9 4.1 L16.1 4.3 L16.5 5.6 L16.5 5.6 L16.6 5.6 L17.1 5.5 L17.4 4.3 L18.6 4.2 L18.6 2.9 L20.9 3.3 L20.6 2.3 L21.2 2.1 L21.4 2.1 L21.6 2.2 Z M0.0 6.2 L0.7 5.0 L0.1 3.8 L0.4 2.5 L1.1 2.3 L1.1 0.0 L3.3 0.7 L4.6 0.3 L5.8 3.3 L6.3 4.3 L5.3 6.0 L6.3 8.6 L6.0 12.0 L7.6 12.7 L7.0 21.4 L8.3 20.4 L9.1 21.2 L11.5 20.5 L11.5 21.7 L12.4 22.0 L12.4 23.9 L14.2 24.6 L13.3 27.9 L13.3 27.9 L14.3 28.4 L14.0 30.4 L14.0 30.4 L14.0 30.4 L14.5 30.6 L14.2 32.1 L14.2 32.1 L14.2 32.1 L14.2 32.1 L15.0 32.8 L15.0 32.8 L14.7 33.6 L12.6 34.1 L12.0 34.9 L12.1 34.9 L12.6 35.1 L13.6 35.5 L16.7 35.4 L17.3 34.2 L16.7 33.7 L17.8 33.4 L22.4 34.4 L22.0 35.2 L23.1 37.4 L24.4 37.4 L24.8 38.2 L23.3 39.2 L23.4 40.4 L22.3 41.1 L22.7 42.7 L25.4 44.7 L24.4 45.1 L24.4 46.1 L22.2 46.4 L22.1 46.4 L22.1 46.7 L21.9 46.9 L21.9 46.9 L19.3 47.5 L18.9 48.4 L17.3 48.8 L16.3 47.2 L14.3 47.1 L13.8 47.3 L14.0 47.9 L12.3 48.0 L12.3 48.0 L12.2 48.0 L12.8 50.2 L4.3 31.4 L2.5 25.5 L0.0 6.2 Z M42.9 26.5 L42.6 26.6 L45.6 28.0 L45.2 30.1 L45.1 30.1 L45.2 30.1 L48.6 29.6 L48.3 27.7 L49.9 26.8 L50.9 26.4 L52.9 27.0 L54.1 26.2 L55.0 26.8 L55.7 26.1 L55.9 27.2 L57.5 27.6 L57.5 27.6 L58.3 29.0 L59.2 30.7 L59.8 31.8 L58.4 37.1 L59.2 38.0 L59.9 37.5 L62.0 38.6 L62.0 37.0 L62.4 38.5 L61.6 41.0 L62.0 42.1 L60.2 43.8 L60.9 44.0 L61.1 46.1 L59.8 47.9 L57.7 49.4 L57.2 51.2 L57.2 51.2 L51.2 49.8 L48.1 48.4 L47.9 47.7 L45.7 47.6 L40.2 44.8 L40.0 47.0 L42.1 47.5 L41.3 48.4 L38.2 47.5 L37.4 48.0 L36.9 47.5 L34.8 49.9 L31.2 48.5 L30.0 49.8 L30.4 51.0 L30.4 51.0 L30.2 51.0 L29.7 51.1 L29.6 51.1 L29.3 50.2 L28.9 50.7 L25.4 50.0 L24.4 50.8 L24.3 48.5 L23.8 48.4 L23.1 48.6 L22.0 48.1 L21.9 48.0 L21.9 48.0 L21.9 47.8 L21.9 46.9 L22.1 46.7 L22.1 46.4 L22.2 46.4 L24.4 46.1 L24.4 45.1 L25.4 44.7 L22.7 42.7 L22.3 41.1 L23.4 40.4 L23.3 39.2 L24.8 38.2 L24.4 37.4 L23.1 37.4 L22.0 35.2 L22.4 34.4 L17.8 33.4 L16.7 33.7 L17.3 34.2 L16.7 35.4 L13.6 35.5 L12.6 35.1 L12.1 34.9 L12.0 34.9 L12.6 34.1 L14.7 33.6 L15.0 32.8 L15.0 32.8 L14.2 32.1 L14.2 32.1 L14.2 32.1 L14.2 32.1 L14.5 30.6 L14.6 30.2 L16.9 29.1 L17.3 30.0 L18.5 29.3 L19.4 29.9 L19.3 27.6 L21.4 26.8 L21.5 26.2 L22.0 26.7 L22.4 25.7 L24.5 25.4 L26.0 25.9 L26.5 27.3 L28.8 26.0 L29.0 27.4 L30.0 28.4 L32.2 27.0 L33.6 27.8 L34.2 27.4 L35.2 27.8 L35.5 27.1 L39.9 29.7 L39.9 29.7 L43.6 29.2 L41.6 28.4 L41.0 28.8 L40.8 27.9 L40.8 27.8 L41.1 27.6 L42.2 26.6 L42.9 26.5 Z M12.3 48.0 L12.3 48.0 L14.0 47.9 L13.8 47.3 L14.3 47.1 L16.3 47.2 L17.3 48.8 L18.9 48.4 L19.3 47.5 L21.9 46.9 L21.9 46.9 L21.9 47.8 L21.9 48.0 L21.9 48.0 L22.0 48.1 L23.1 48.6 L23.8 48.4 L24.3 48.5 L24.4 50.8 L25.4 50.0 L28.9 50.7 L29.3 50.2 L29.6 51.1 L29.7 51.1 L30.2 51.0 L30.4 51.0 L30.4 51.0 L30.0 49.8 L31.2 48.5 L34.8 49.9 L36.9 47.5 L37.4 48.0 L38.2 47.5 L41.3 48.4 L42.1 47.5 L40.0 47.0 L40.2 44.8 L45.7 47.6 L47.9 47.7 L48.1 48.4 L51.2 49.8 L57.2 51.2 L56.7 52.8 L54.9 52.9 L53.6 54.3 L56.7 58.5 L56.5 60.3 L58.2 60.2 L58.2 61.7 L60.5 63.5 L60.9 65.6 L58.9 67.8 L58.7 69.2 L57.7 69.6 L58.0 70.2 L57.7 70.2 L56.9 70.0 L56.4 70.0 L51.2 66.3 L47.7 65.3 L46.5 65.6 L45.8 67.2 L45.0 67.5 L46.1 69.8 L44.8 70.0 L43.4 68.9 L42.9 69.8 L40.5 70.7 L39.3 69.8 L39.7 69.2 L38.4 67.7 L37.4 68.0 L35.6 67.4 L33.2 64.5 L32.3 65.2 L31.1 64.3 L30.7 65.5 L31.8 66.5 L31.1 67.0 L31.7 67.4 L30.4 67.5 L29.7 68.8 L27.3 68.0 L26.6 68.8 L25.5 68.8 L24.9 69.6 L24.9 69.7 L24.9 69.7 L20.5 64.5 L18.7 63.2 L17.7 63.2 L16.6 61.8 L15.8 59.8 L16.4 59.7 L15.8 59.7 L12.3 48.0 Z M24.9 69.7 L24.9 69.6 L25.5 68.8 L26.6 68.8 L27.3 68.0 L29.7 68.8 L30.4 67.5 L31.7 67.4 L31.1 67.0 L31.8 66.5 L30.7 65.5 L31.1 64.3 L32.3 65.2 L33.2 64.5 L35.6 67.4 L37.4 68.0 L38.4 67.7 L39.7 69.2 L39.3 69.8 L40.5 70.7 L42.9 69.8 L43.4 68.9 L44.8 70.0 L46.1 69.8 L45.0 67.5 L45.8 67.2 L46.5 65.6 L47.7 65.3 L51.2 66.3 L56.4 70.0 L56.9 70.0 L56.8 70.1 L56.8 70.1 L56.4 71.8 L55.2 71.4 L55.1 71.8 L57.3 75.5 L57.0 76.4 L59.0 79.1 L59.9 79.4 L59.8 80.5 L61.1 82.0 L61.2 82.1 L61.2 82.1 L62.1 84.1 L60.7 86.6 L60.7 86.6 L59.3 87.2 L57.7 86.2 L57.0 86.9 L58.6 90.3 L57.3 90.5 L54.9 94.3 L53.9 94.2 L54.5 94.9 L54.0 96.1 L55.3 95.9 L54.8 96.9 L55.7 98.1 L55.7 98.1 L55.2 98.4 L55.0 97.5 L52.5 98.0 L50.6 100.0 L43.7 94.8 L42.1 91.9 L26.0 72.1 L24.9 69.7 Z",
              stroke: true
            }
          ]
        }
      }
    ]
  },
  people: {
    title: "Our Student Success Managers: With Students Until College",
    image: {
      src: aMentorTeachingAtTheThiruvananthapuramBootcampImage,
      alt: "A mentor teaching at the Thiruvananthapuram bootcamp",
      position: "50% 57.2845%"
    },
    bullets: [
      "Champion all career activities in schools across their zone",
      "Run career mapping with students and parents, CUET coaching and vacation classes",
      "Help with registrations, documents and university applications",
      "Stay with every student until they secure a seat in college"
    ]
  },
  lastYear: {
    title: "What Last Year Taught Us",
    intro: "Last year with the Government of Kerala, we ran residential bootcamps, in Kasaragod, Palakkad, Thiruvananthapuram and Wayanad, for  115 students from SC/ST Department schools, with classes in Malayalam and English and support through every university application.",
    stats: [
      {
        value: "4",
        label: "Residential bootcamps"
      },
      {
        value: "15",
        label: "Schools"
      },
      {
        value: "55",
        label: "Central university allotments"
      },
      {
        value: "~90%",
        label: "Moved on to higher education"
      }
    ],
    gallery: [
      {
        src: studentsInAClassroomSessionAtAKeralaBootcampImage,
        alt: "Students in a classroom session at a Kerala bootcamp",
        featured: true
      },
      {
        src: computerBasedMockTestsAtTheKasaragodBootcampImage,
        alt: "Computer-based mock tests at the Kasaragod bootcamp",
        featured: false
      },
      {
        src: studentsAtTheKasaragodBootcampImage,
        alt: "Bootcamp, Kasaragod",
        featured: false
      },
      {
        src: bootcampPalakkadImage,
        alt: "Bootcamp, Palakkad",
        featured: false
      },
      {
        src: studentsAtTheThiruvananthapuramBootcampImage,
        alt: "Bootcamp, Thiruvananthapuram",
        featured: false
      },
      {
        src: studentsPractisingOnTheCuetMockInterfaceImage,
        alt: "Practising on the CUET mock interface",
        featured: false
      },
      {
        src: aSmartBoardSessionInPalakkadImage,
        alt: "A smart-board session in Palakkad",
        featured: false
      },
      {
        src: aMentorTeachingAtTheThiruvananthapuramBootcampImage,
        alt: "A mentor teaching at the Thiruvananthapuram bootcamp",
        featured: false
      },
      {
        src: aSmartBoardClassAtThePalakkadResidentialBootcampKerImage,
        alt: "A smart-board class in Palakkad",
        featured: false
      }
    ],
    testimonials: [
      {
        quote: "“The mentors made me confident about joining a top college. They helped with every step: applying, connecting me with mentors from Delhi University, booking my train tickets and applying for scholarships.”",
        name: "Abhiram Madhu",
        role: "Motilal Nehru College, University of Delhi",
        image: {
          src: portraitOfAbhiramMadhuImage,
          alt: "Portrait of Abhiram Madhu",
          position: "center 20%"
        }
      },
      {
        quote: "“Before the OpenGrad bootcamp, I didn’t even know about the university or the opportunities available to me. The guidance and support from the faculty helped me get here. I hope more students get to discover opportunities like this.”",
        name: "Abhirami G",
        role: "Central University of Kerala",
        image: {
          src: portraitOfAbhiramiGImage,
          alt: "Portrait of Abhirami G",
          position: "center 20%"
        }
      }
    ]
  },
  classrooms: [
    {
      src: studentsAtAnOpengradProgrammeInKeralaImage,
      alt: "Students at an OpenGrad programme in Kerala"
    },
    {
      src: studentsAtAnOpengradProgrammeInKerala2Image,
      alt: "Students at an OpenGrad programme in Kerala"
    },
    {
      src: studentsAtAnOpengradProgrammeInKerala3Image,
      alt: "Students at an OpenGrad programme in Kerala"
    },
    {
      src: studentsAtAnOpengradProgrammeInKerala4Image,
      alt: "Students at an OpenGrad programme in Kerala"
    },
    {
      src: studentsAtAnOpengradProgrammeInKerala5Image,
      alt: "Students at an OpenGrad programme in Kerala"
    },
    {
      src: studentsAtAnOpengradProgrammeInKerala6Image,
      alt: "Students at an OpenGrad programme in Kerala"
    },
    {
      src: studentsAtAnOpengradProgrammeInKerala7Image,
      alt: "Students at an OpenGrad programme in Kerala"
    },
    {
      src: studentsAtAnOpengradProgrammeInKerala8Image,
      alt: "Students at an OpenGrad programme in Kerala"
    }
  ],
  voices: [
    {
      quote: "“OpenGrad has been a highly flexible and responsive partner. Their ability to co-create with the administration and move from ideation to implementation in less than a month has been particularly impressive.”",
      name: "Mithun Premraj, IAS",
      role: "Director, Scheduled Tribes Development Department, Kerala",
      image: {
        src: portraitOfMithunPremrajIasImage,
        alt: "Portrait of Mithun Premraj, IAS",
        position: "center 20%"
      }
    },
    {
      quote: "“Leading the Kerala project has been one of the most meaningful experiences I’ve had. Getting to meet so many students, understand their dreams and watch them slowly gain confidence made all the efforts worth it.”",
      name: "Krishna Sunish",
      role: "CUET UG Kerala Project Lead, OpenGrad",
      image: {
        src: portraitOfKrishnaSunishImage,
        alt: "Portrait of Krishna Sunish",
        position: "center 20%"
      }
    },
    {
      quote: "“Serving as a mentor at the bootcamp was an incredible experience. As a central university student myself, sharing pathways and watching these young scholars realise their academic potential was deeply fulfilling.”",
      name: "Henna Rose Peter",
      role: "Mentor, OpenGrad · Miranda House",
      image: {
        src: portraitOfHennaRosePeterImage,
        alt: "Portrait of Henna Rose Peter",
        position: "center 20%"
      }
    }
  ]
};
