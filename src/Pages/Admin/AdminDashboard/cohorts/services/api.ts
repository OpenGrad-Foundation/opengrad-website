import { supabase } from "../../../../../App";

export const getCohorts = async () => {
  const { data, error } = await supabase
    .from("cohorts")
    .select(
      `id,year, status, category, category_description, cohort_language, description, graph_image, counts_image, cohort_image`
    )
    .order("year", { ascending: false });

  // Handle the case where data is null or an error occurs
  if (error) {
    console.error(error.message);
    throw error;
  }

  return data;
};
