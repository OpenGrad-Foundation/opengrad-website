import type { VoiceSlide } from "../../Components/VoicesCarousel/VoicesCarousel";

export type StateImage = { src: string; alt: string; position?: string };
export type Community = {
  name: string;
  label: string;
  image: StateImage;
  description: string;
  bullets: { text: string; strong?: string }[];
  map: {
    label: string;
    viewBox: string;
    width: number;
    height: number;
    paths: { d: string; stroke?: boolean }[];
  };
};

export type StatePageData = {
  id: "tn" | "cg" | "kl";
  hero: { title: string; year?: string; image: StateImage; intro: string };
  communities: {
    hidden?: boolean;
    title: string;
    intro: string;
    layout: "horizontal" | "districts" | "zones";
    cards: Community[];
  };
  people: { title: string; image: StateImage; bullets: string[] };
  partner?: { label: string; title: string; text: string; logo: StateImage };
  lastYear: {
    title: string;
    intro: string;
    stats: { value: string; label: string }[];
    gallery: (StateImage & { featured: boolean })[];
    testimonials: VoiceSlide[];
  };
  classrooms: StateImage[];
  voices: VoiceSlide[];
  reportUrl: string;
};
