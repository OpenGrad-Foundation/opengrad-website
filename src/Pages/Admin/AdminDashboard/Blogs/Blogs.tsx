import { useState, useEffect } from "react";
import styles from "../AdminDashboard.module.css";
import { Form } from "./components/Form";
import useTableState from "../../../../Components/table/hooks/useTableState";
import { getBlogsTableData, handleBlogTableDelete } from "./services/api";
import Table from "../../../../Components/table";
import { BlogTableColumns } from "./services/tableColumn";
import BlogCardModal from "./components/blogCardModal";
import {
  MdDelete,
  // MdEdit
} from "react-icons/md";
import DeleteModal from "../../../../Components/deleteModal";

export const Blogs = () => {
  const [showBlogCard, setShowBlogCard] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const tableState = useTableState<IndividualBlogContainerProps>();
  const [blogCardData, setBlogCardData] =
    useState<IndividualBlogContainerProps>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    tableState.handleFetchData(() =>
      getBlogsTableData(
        tableState.rowsPerPage,
        tableState.currentPage,
        tableState.searchTerm,
        tableState.sortColumn
      )
    );
  }, [
    tableState.currentPage,
    tableState.rowsPerPage,
    tableState.searchTerm,
    tableState.sortColumn,
  ]);

  const handleAddButtonClick = () => {
    setShowAddForm(!showAddForm);
  };

  const handleClick = (item: IndividualBlogContainerProps) => {
    setBlogCardData(item);
    setShowBlogCard(!showBlogCard);
  };

  // const handleEditClick = (item: IndividualBlogContainerProps) => {
  //   setBlogCardData(item);
  //   setShowBlogCard(!showBlogCard);
  // };

  const handleDeleteClick = (item: IndividualBlogContainerProps) => {
    setBlogCardData(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (blogCardData && blogCardData.id) {
      handleBlogTableDelete(
        blogCardData.id,
        blogCardData.image,
        blogCardData.extra as string
      );
      setIsDeleteModalOpen(false);
      window.location.reload();
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.AddButton} onClick={handleAddButtonClick}>Add</button>

      <Table<IndividualBlogContainerProps>
        keyColumn={"id"}
        columns={BlogTableColumns}
        tableState={tableState}
        onRowClick={handleClick}
        actions={[
          // {
          //   icon: <MdEdit />,
          //   onClick: (item) => {
          //     handleEditClick(item);
          //   },
          //   title: "View Details",
          // },
          {
            icon: <MdDelete />,
            onClick: (item) => {
              handleDeleteClick(item);
            },
            title: "Delete Blog",
            color: "red",
          },
        ]}
      />
      {showAddForm && <Form showAddForm={showAddForm} close={setShowAddForm} />}
      {blogCardData?.id && (
        <BlogCardModal
          isOpen={showBlogCard}
          onClose={() => setShowBlogCard(false)}
          data={blogCardData!}
        />
      )}
      {blogCardData?.id && (
        <DeleteModal
          title={blogCardData?.title!}
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};
