import { useEffect, useState } from "react";
import styles from "../AdminDashboard.module.css";
import useTableState from "../../../../Components/table/hooks/useTableState";
import { getVolunteers, handleDeleteDetails } from "./services/apis";
import Table from "../../../../Components/table";
import { MdDelete, MdEdit } from "react-icons/md";
import { VolunteersTableColumns } from "./services/tableColumn";
import { VolunteerDirectoryForm } from "./VolunteerDirectoryForm";
import VolunteersCardModal from "./components/volunteersCardModal";
import DeleteModal from "../../../../Components/deleteModal";

export const VolunteerDirectory = () => {
    const [showTestimonial, setShowTestimonial] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const tableState = useTableState<VolunteerType>();
  const [TestimonialCardData, setTestimonialCardData] =
    useState<VolunteerType>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  var tablename = "volunteerdirectory";

  useEffect(() => {
    tableState.handleFetchData(() =>
      getVolunteers(
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

  const handleClick = (item: VolunteerType) => {
    setTestimonialCardData(item);
    setShowTestimonial(!showTestimonial);
  };

  const handleEditClick = (item: VolunteerType) => {
    setTestimonialCardData(item);
    setShowAddForm(true);
  };

  const handleDeleteClick = (item: VolunteerType) => {
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
      <Table<VolunteerType>
        keyColumn={"id"}
        columns={VolunteersTableColumns}
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
        <VolunteerDirectoryForm
          showAddForm={showAddForm}
          close={setShowAddForm}
          initialData={TestimonialCardData}
          tablename={tablename}
        />
      )}
      {TestimonialCardData?.id && (
        <VolunteersCardModal
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
