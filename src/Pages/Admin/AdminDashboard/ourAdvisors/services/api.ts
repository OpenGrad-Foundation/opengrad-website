import { supabase } from "../../../../../App";

export const getCohorts = async () => {
  const { data, error } = await supabase.from("ouradvisors").select("*");

  if (error) {
    console.error(error.message);
    throw error;
  }

  return data;
};
