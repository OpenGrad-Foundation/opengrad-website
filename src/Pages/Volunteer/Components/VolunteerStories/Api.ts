import { supabase } from "../../../../App";

export const getVolunteerStories = async () => {
  
let { data: volunteerstories, error } = await supabase
  .from("volunteerstories")
  .select("*");
          
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    // console.log(volunteerstories)
    return volunteerstories;
  }
};
