// Destinations shared by the navbar, footer and page CTAs.
export const DONATE_URL = "https://rzp.io/rzp/XmTgankP";
export const HUB_URL = "https://hub.opengrad.in";
export const CAT_REPORT_URL = "https://drive.google.com/file/d/1OqbgRiw7hPw1V9uR04xu1jDjIp2Z12_o/view?usp=drive_link";
export const CONTACT_EMAIL = "admin@opengrad.in";

export const STATE_PAGES = [
  { label: "Tamil Nadu", href: "/tamil-nadu" },
  { label: "Chhattisgarh", href: "/chhattisgarh" },
  { label: "Kerala", href: "/kerala" },
];

// Contact page topic values; also used as ?topic= by CTAs elsewhere.
// Each label becomes its own tab in the submissions Google Sheet (see form-backend/Code.gs).
export const CONTACT_TOPICS = [
  { value: "internship", label: "Internship" },
  { value: "fellowship", label: "Join the Fellowship" },
  { value: "volunteer", label: "Volunteer" },
  { value: "cat", label: "CAT admission" },
  { value: "corporate", label: "Corporate volunteering" },
  { value: "faculty", label: "Join as faculty" },
  { value: "donate", label: "Donate" },
  { value: "programmes", label: "Our programmes in my state or district" },
  { value: "media", label: "Media and press" },
  { value: "other", label: "Something else" },
];
