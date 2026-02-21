import toast from "react-hot-toast";
import { supabase } from "../../../../../App";

interface ReportsResponse {
  data: AnnualReportType[];
  pagination: Pagination;
}

export const getReportsTableData = async (
  rowsPerPage: number,
  currentPage: number,
  searchTerm: string,
  sortColumn: string
): Promise<ReportsResponse> => {
  try {
    let totalCount: number;
    let filteredItems: AnnualReportType[];

    // Fetch total count of blogs
    const { count, error: countError } = await supabase
      .from("annual_report")
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
      .from("annual_report")
      .select(
        `
        *,
        reports:report(*)
      `
      )
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
    toast.error("Error fetching blogs");
    throw error;
  }
};

export const insertReports = async (formdata: any) => {
  const adjustedData = {
    year: formdata.year,
    image: formdata.image,
    link: formdata.link,
  };
  console.log(adjustedData);
  const { data: reports, error } = await supabase
    .from("annual_report")
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return reports;
  }
};

export const updateReports = async (formdata: any, id: string) => {
  const adjustedData = {
    year: formdata.year,
    image: formdata.image,
    link: formdata.link,
  };
  console.log(adjustedData);
  const { data: reports, error } = await supabase
    .from("annual_report")
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

export const deleteAnnualReport = async (id: string) => {
  let { data: report, error } = await supabase
    .from("annual_report")
    .delete()
    .eq("id", id);
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return report;
  }
};

// Report APIs
export const addReport = async (
  data: Omit<ReportType, "id" | "created_at">
) => {
  try {
    const { data: newReport, error } = await supabase
      .from("report")
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    toast.success("Report added successfully");
    return newReport;
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};

export const updateReport = async (
  id: number,
  data: Partial<Omit<ReportType, "id" | "created_at">>
) => {
  try {
    const { data: updatedReport, error } = await supabase
      .from("report")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    toast.success("Report updated successfully");
    return updatedReport;
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};

export const deleteReport = async (id: number) => {
  try {
    const { error } = await supabase.from("report").delete().eq("id", id);

    if (error) throw error;
    toast.success("Report deleted successfully");
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};

export const handleAnnualReportTableDelete = async (
  id: string,
  image: string
) => {
  try {
    // Delete the blog entry from the database
    const response = await deleteAnnualReport(id);
    if (response) {
      console.log(response);
    }

    // Extract image and extra images URLs from the blog data
    const imageUrl = image;

    // Delete main image
    if (imageUrl) {
      const imageFilePath = imageUrl.split("/").pop();
      await supabase.storage
        .from("reports")
        .remove([`images/${imageFilePath}`]);
    }
  } catch (error) {
    console.error(error);
  }
};
