import toast from "react-hot-toast";
import { supabase } from "../../../../../App";

interface ReportsResponse {
  data: TestimonialType[];
  pagination: Pagination;
}
const currentDateAndTime = new Date();

const year = currentDateAndTime.getFullYear();
const month = currentDateAndTime.getMonth() + 1;
const day = currentDateAndTime.getDate();
const hours = currentDateAndTime.getHours();
const minutes = currentDateAndTime.getMinutes();
const seconds = currentDateAndTime.getSeconds();
const formattedDateAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

export const getVolunteers = async (
  rowsPerPage: number,
  currentPage: number,
  searchTerm: string,
  sortColumn: string,
  tablename: string
): Promise<ReportsResponse> => {
  try {
    let totalCount: number;
    let filteredItems: TestimonialType[];
    console.log(tablename);
    // Fetch total count of blogs
    const { count, error: countError } = await supabase
      .from(tablename)
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
    const { data: items, error: fetchError } = await supabase
      .from(tablename)
      .select(`*`)
      .order(orderByColumn, { ascending: orderByAscending })
      .range((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage - 1);

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    // Optionally filter by searchTerm
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredItems = items.filter(
        (item) =>
          item.year.toLowerCase().includes(searchTermLower) ||
          item.reports.name.toLowerCase().includes(searchTermLower)
      );
      totalCount = filteredItems.length; // Update total count based on filtered results
    } else {
      filteredItems = items;
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
    toast.error("Error fetching volunteers");
    throw error;
  }
};

export const insertVolunteers = async (formdata: any, tablename: string) => {
  const adjustedData = {
    description: formdata.description,
    created_at: formattedDateAndTime,
    image: formdata.image,
    name: formdata.name,
    designation: formdata.designation,
  };
  console.log(adjustedData);
  const { data: reports, error } = await supabase
    .from(tablename)
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return reports;
  }
};

export const updateVolunteers = async (
  formdata: any,
  id: string,
  tablename: string
) => {
  const adjustedData = {
    description: formdata.description,
    created_at: formattedDateAndTime,
    image: formdata.image,
    name: formdata.name,
    designation: formdata.designation,
  };
  console.log(adjustedData);
  const { data: reports, error } = await supabase
    .from(tablename)
    .update([adjustedData])
    .eq("id", id)
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return reports;
  }
};

export const handleDeleteDetails = async (id: string, imagePath: string, tablename: string) => {
  try {
    // Extract the file path from the imagePath
    const filePath = imagePath.split("/").pop();

    // First, remove the image from Supabase storage
    const { error: deleteError } = await supabase.storage
      .from(tablename)
      .remove([`images/${filePath}`]);

    if (deleteError) {
      toast.error("Error removing image from storage");
      console.error(deleteError);
      return;
    }

    // Then, delete the testimonial from the database
    const { data: deletedTestimonial, error: deleteTestimonialError } =
      await supabase.from(tablename).delete().eq("id", id);

    if (deleteTestimonialError) {
      toast.error("Error deleting volunteer from database");
      console.error(deleteTestimonialError);
      return;
    }

    if (deletedTestimonial) {
      console.log("Deleted volunteer:", deletedTestimonial);
    }

    // Optionally, reload the page or update the UI
    window.location.reload();
  } catch (error) {
    console.error("Error in handleDeleteDetails:", error);
    toast.error("An unexpected error occurred");
  }
};
