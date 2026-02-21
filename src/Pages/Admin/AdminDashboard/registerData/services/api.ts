import toast from "react-hot-toast";
import { supabase } from "../../../../../App";

interface RegisterResponse {
  data: IndividualRegisterDataContainerProps[];
  pagination: Pagination;
}

export const getRegisterTableData = async (
  rowsPerPage: number,
  currentPage: number,
  searchTerm: string,
  sortColumn: string
): Promise<RegisterResponse> => {
  try {
    let totalCount: number;
    let filteredItems: IndividualRegisterDataContainerProps[];

    // Fetch total count of blogs
    const { count, error: countError } = await supabase
      .from("register-form")
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
      : "created_at";
    const orderByAscending = sortColumn ? !sortColumn.startsWith("-") : false;

    // Fetch paginated and sorted blogs data
    const { data: allItems, error: fetchError } = await supabase
      .from("register-form")
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
          item.name.toLowerCase().includes(searchTermLower) ||
          item.district.toLowerCase().includes(searchTermLower)
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

export const deleteRegisterItem = async (id: string) => {
  try {
    const { error } = await supabase
      .from("register-form")
      .delete()
      .match({ id });
    if (error) {
      throw error.message;
    }
  } catch (error) {
    toast.error("Error deleting item");
    console.error(error);
  }
};