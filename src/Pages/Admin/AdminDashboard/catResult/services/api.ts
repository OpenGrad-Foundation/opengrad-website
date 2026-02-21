import toast from "react-hot-toast";
import { supabase } from "../../../../../App";

interface CatResponse {
  data: CatResultsType[];
  pagination: Pagination;
}

export const getCatTableData = async (
  rowsPerPage: number,
  currentPage: number,
  searchTerm: string,
  sortColumn: string
): Promise<CatResponse> => {
  try {
    let totalCount: number;
    let filteredItems: CatResultsType[];

    // Fetch total count of blogs
    const { count, error: countError } = await supabase
      .from("cat_selections")
      .select("id", { count: "estimated" });

    if (countError) {
      throw countError.message;
    }

    if (!count) {
      throw new Error("Count not available");
    }
    totalCount = count;

    // Determine sorting criteria
    const orderByColumn = sortColumn
      ? sortColumn.startsWith("-")
        ? sortColumn.substring(1)
        : sortColumn
      : "year";
    const orderByAscending = sortColumn ? !sortColumn.startsWith("-") : false;

    // Fetch paginated and sorted blogs data
    const { data: allItems, error: fetchError } = await supabase
      .from("cat_selections")
      .select("*")
      .order(orderByColumn, { ascending: orderByAscending })
      .range((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage - 1);

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    // Optionally filter by searchTerm
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredItems = allItems.filter(
        (item) =>
          item.iim.toLowerCase().includes(searchTermLower) ||
          item.year.toLowerCase().includes(searchTermLower)
      );
      totalCount = filteredItems.length; // Update total count based on filtered results
    } else {
      filteredItems = allItems;
    }

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / rowsPerPage);

    const pagination: Pagination = {
      count: totalCount,
      totalPages,
      isNext: currentPage < totalPages,
      isPrev: currentPage > 1,
      nextPage: currentPage + 1,
    };
    return {
      data: filteredItems,
      pagination,
    };
  } catch (error) {
    toast.error("Error fetching blogs");
    throw error;
  }
};
