import toast from "react-hot-toast";
import { supabase } from "../../../../../App";
import { deleteBlogs } from "../../../../OurBlog/Api";

interface BlogsResponse {
  data: IndividualBlogContainerProps[];
  pagination: Pagination;
}

export const getBlogsTableData = async (
  rowsPerPage: number,
  currentPage: number,
  searchTerm: string,
  sortColumn: string
): Promise<BlogsResponse> => {
  try {
    let totalCount: number;
    let filteredBlogs: IndividualBlogContainerProps[];

    // Fetch total count of blogs
    const { count, error: countError } = await supabase
      .from("blogs")
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
    const { data: allBlogs, error: fetchError } = await supabase
      .from("blogs")
      .select("*")
      .order(orderByColumn, { ascending: orderByAscending })
      .range((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage - 1);

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    // Optionally filter by searchTerm
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredBlogs = allBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTermLower) ||
          blog.author.toLowerCase().includes(searchTermLower)
      );
      totalCount = filteredBlogs.length; // Update total count based on filtered results
    } else {
      filteredBlogs = allBlogs;
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
      data: filteredBlogs,
      pagination,
    };
  } catch (error) {
    toast.error("Error fetching blogs");
    throw error;
  }
};

export const handleBlogTableDelete = async (
  id: string,
  image: string,
  extra: string
) => {
  try {
    // Delete the blog entry from the database
    const response = await deleteBlogs(id);
    if (response) {
      console.log(response);
    }

    // Extract image and extra images URLs from the blog data
    const imageUrl = image;
    const extraImagesUrls =
      extra && extra.includes(",") ? extra.split(", ") : [extra] || [];

    // Delete main image
    if (imageUrl) {
      const imageFilePath = imageUrl.split("/").pop();
      await supabase.storage.from("blogs").remove([`images/${imageFilePath}`]);
    }

    if (extraImagesUrls.length > 0) {
      // Delete extra images
      for (const imageUrl of extraImagesUrls) {
        const imageFilePath = imageUrl.split("/").pop();
        await supabase.storage
          .from("blogs")
          .remove([`images/${imageFilePath}`]);
      }
    }

  } catch (error) {
    console.error(error);
  }
};
