export const BlogTableColumns: TableColumn<IndividualBlogContainerProps>[] = [
  { key: "title", header: "Title", isSortable: true },
  { key: "author", header: "Author", isSortable: true },
  {
    key: "dateofblog",
    header: "Date",
    isSortable: true,
  },
  { key: "category", header: "Category", isSortable: false },
];

