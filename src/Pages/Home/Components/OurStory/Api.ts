import { supabase } from "../../../../App";

export const getTestimonial = async () => {
  let { data: homeTestimonials, error } = await supabase
    .from("homeTestimonials")
    .select("*");

  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return homeTestimonials;
  }
};
