import { supabase } from "../../App";

export const getAdvisors = async (): Promise<AdvisorData[]> => {
  const { data, error } = await supabase.from("ouradvisors").select("*");

  // Handle the case where data is null or an error occurs
  if (error) {
    console.error(error.message);
    throw error;
  }

  // If no data, return an empty array
  if (!data) {
    return [];
  }

  return data;
};
