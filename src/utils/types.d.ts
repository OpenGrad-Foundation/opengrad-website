interface OptionType {
  value: string;
  label: string;
}

interface StateType {
  id: number;
  name: string;
  iso2: string;
}

interface CityType {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}

interface IndividualBlogContainerProps {
  id: string;
  image: string;
  title: string;
  author: string;
  description: string;
  dateofblog: string;
  category: string;
  editable: boolean;
  extra?: string;
}

interface IndividualRegisterDataContainerProps {
  id: string;
  name: string;
  phone: string;
  class: string;
  school: string;
  state: string;
  district: string;
  courses: string[];
  whatsapp: boolean;
}

interface CatResultsType {
  iim: string;
  year: string;
  selections: number;
}

interface CohortLanguage {
  id: number;
  name: string;
  description: string;
  graph_image: string;
  counts_image: string;
  cohort_image: string[];
}

interface CohortCategory {
  id: number;
  category: string;
  category_description: string;
  languages: CohortLanguage[];
}

interface CohortType {
  id: number;
  year: number;
  status: string;
  categories: CohortCategory[];
}

interface ReportType {
  id: number;
  annual_report: string;
  name: string;
  link: string;
  created_at: string;
}

interface AnnualReportType {
  id: string;
  image: string | null;
  year: string | null;
  link: string | null;
  created_at: string;
  reports: ReportType[];
}
interface TestimonialType {
  id: string;
  image: string | null;
  name: string | null;
  designation: string | null;
  description: string | null;
  created_at: string;
  tablename: string | null;
}
interface VolunteerType {
  id: string;
  image: string | null;
  name: string | null;
  description: string | null;
  created_at: string;
}

interface AdvisorData {
  category: string;
  image: string;
  name: string;
  designation: string;
  description: string;
}

interface GroupedAdvisorData {
  [key: string]: AdvisorData[]; // Defines an index signature
}