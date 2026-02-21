import { supabase } from "../../../App";



export const getCohorts = async (status: string): Promise<CohortType[]> => {
  const { data, error } = await supabase
    .from("cohorts")
    .select(
      `year, status, category, cohort_language,category_description, description, graph_image, counts_image, cohort_image`
    )
    .eq("status", status)
    .order("year", { ascending: false });

  // Handle the case where data is null or an error occurs
  if (error) {
    console.error(error.message);
    throw error;
  }

  // If no data, return an empty array
  if (!data) {
    return [];
  }

  // Create the structure of cohorts with nested categories and languages
  const cohorts: CohortType[] = data.reduce(
    (acc: CohortType[], cohort, _index) => {
      // Check if the year already exists in the accumulator
      let cohortData = acc.find((item) => item.year === cohort.year);
      if (!cohortData) {
        // If the year doesn't exist, create a new entry for the year
        cohortData = {
          id: acc.length + 1, // Unique cohort ID
          year: cohort.year,
          status: cohort.status,
          categories: [],
        };
        acc.push(cohortData);
      }

      // Find or create the category for the current cohort
      let categoryData = cohortData.categories.find(
        (cat) => cat.category === cohort.category
      );
      if (!categoryData) {
        // If category doesn't exist, create a new one
        categoryData = {
          id: cohortData.categories.length + 1,
          category: cohort.category,
          category_description: cohort.category_description,
          languages: [],
        };
        cohortData.categories.push(categoryData);
      }

      // Now, create or add the language data under the category
      const languageData = {
        id: categoryData.languages.length + 1, // Unique language ID
        name: cohort.cohort_language,
        description: cohort.description,
        graph_image: cohort.graph_image,
        counts_image: cohort.counts_image,
        cohort_image: cohort.cohort_image,
      };
      categoryData.languages.push(languageData);

      return acc;
    },
    []
  );

  return cohorts;
};
