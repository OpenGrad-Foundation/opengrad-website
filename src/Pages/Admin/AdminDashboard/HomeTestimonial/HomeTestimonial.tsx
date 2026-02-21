import { useEffect, useState } from "react";
import styles from "../AdminDashboard.module.css";
import { HomeTestimonialForm } from "./HomeTestimonialForm";
import Table from "../../../../Components/table";
import { TestimonialTableColumns } from "./services/tableColumn";
import useTableState from "../../../../Components/table/hooks/useTableState";
import { getTestimonial, handleDeleteDetails } from "./services/apis";
import { MdDelete, MdEdit } from "react-icons/md";
import DeleteModal from "../../../../Components/deleteModal";
import TestimonialCardModal from "./components/TestimonialCardModal";

export const HomeTestimonial = () => {
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const tableState = useTableState<TestimonialType>();
  const [TestimonialCardData, setTestimonialCardData] =
    useState<TestimonialType>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  var tablename = "homeTestimonials";

  useEffect(() => {
    tableState.handleFetchData(() =>
      getTestimonial(
        tableState.rowsPerPage,
        tableState.currentPage,
        tableState.searchTerm,
        tableState.sortColumn,
        tablename
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

  const handleClick = (item: TestimonialType) => {
    setTestimonialCardData(item);
    setShowTestimonial(!showTestimonial);
  };

  const handleEditClick = (item: TestimonialType) => {
    setTestimonialCardData(item);
    setShowAddForm(true);
  };

  const handleDeleteClick = (item: TestimonialType) => {
    setTestimonialCardData(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = (id: any, imagePath: string) => {
    handleDeleteDetails(id, imagePath, tablename);
    if (TestimonialCardData && TestimonialCardData.id) {
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div className={styles.HomeTestimonial}>
      <button className={styles.AddButton} onClick={handleAddButtonClick}>
        Add
      </button>
      <Table<TestimonialType>
        keyColumn={"id"}
        columns={TestimonialTableColumns}
        tableState={tableState}
        onRowClick={handleClick}
        actions={[
          {
            icon: <MdEdit />,
            onClick: (item) => {
              handleEditClick(item);
            },
            title: "View Details",
          },
          {
            icon: <MdDelete />,
            onClick: (item) => {
              handleDeleteClick(item);
            },
            title: "Delete Home Testimonial",
            color: "red",
          },
        ]}
      />

      {showAddForm && (
        <HomeTestimonialForm
          showAddForm={showAddForm}
          close={setShowAddForm}
          initialData={TestimonialCardData}
          tablename={tablename}
        />
      )}
      {TestimonialCardData?.id && (
        <TestimonialCardModal
          isOpen={showTestimonial}
          onClose={() => setShowTestimonial(false)}
          data={TestimonialCardData!}
        />
      )}
      {TestimonialCardData?.id && (
        <DeleteModal
          title={TestimonialCardData?.name!}
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() =>
            handleDelete(TestimonialCardData.id, TestimonialCardData.image!)
          }
        />
      )}
    </div>
  );
};
