import { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Table from "../../../../Components/table";
import useTableState from "../../../../Components/table/hooks/useTableState";
import styles from "../AdminDashboard.module.css";
import DeleteModal from "../../../../Components/deleteModal";
import { supabase } from "../../../../App";
import { getCohorts } from "./services/api";
import { CohortsTableColumns } from "./services/tableColumn";
import AddCohortModal from "./components/addCohortModal";
import toast from "react-hot-toast";
import UpdateCohortModal from "./components/UpdateCohortModal";

const Cohorts = () => {
  const tableState = useTableState<any>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CohortType>();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedCohort, setSelectedCohort] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCohorts();

        // Set the fetched data to the tableState
        tableState.setData(data); // Explicitly set the data to the table state
      } catch (error) {
        console.error((error as Error).message);
        tableState.setData([]); // In case of error, set empty array
      }
    };

    fetchData();
  }, [
    tableState.currentPage,
    tableState.rowsPerPage,
    tableState.searchTerm,
    tableState.sortColumn,
  ]);

  const handleDeleteClick = (item: CohortType) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (selectedItem) {
      const { error } = await supabase
        .from("cohorts")
        .delete()
        .eq("id", selectedItem.id);

      if (error) {
        toast.error(`Error deleting cohort: ${error.message}`);
        console.error("Delete error:", error.message);
      } else {
        toast.success("Cohort deleted successfully!");
        // Update table data after deletion
        //  handleFetchData();
      }

      setIsDeleteModalOpen(false);
    }
  };

  const handleAddCohort = async (newResult: CohortType) => {
    setIsAddFormOpen(true);

    const { data, error } = await supabase
      .from("cat_selections")
      .insert([newResult]);

    if (error) {
      console.error("Error adding data:", error);
      return;
    } else if (data) {
      toast.success("Data added successfully");
    }
    setIsAddFormOpen(false);
    window.location.reload();
  };

  const handleAddButtonClick = () => {
    setIsAddFormOpen(true);
  };
  const handleCloseAddForm = () => {
    setIsAddFormOpen(false);
  };
  const handleUpdateClick = (cohort: any) => {
    setSelectedCohort(cohort);
    setIsUpdateModalOpen(true);
  };
  return (
    <div className={styles.wrapper}>
      <button className={styles.AddButton} onClick={handleAddButtonClick}>
        Add
      </button>
      <Table
        keyColumn={"id"}
        tableState={tableState}
        columns={CohortsTableColumns}
        actions={[
          {
            icon: <MdEdit />,
            onClick: (item) => {
              handleUpdateClick(item);
            },
            title: "Edit",
          },
          {
            icon: <MdDelete />,
            onClick: (item) => {
              handleDeleteClick(item);
            },
            title: "Delete",
            color: "red",
          },
        ]}
      />

      {isDeleteModalOpen && (
        <DeleteModal
          title="Delete Selection"
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={handleDelete}
        />
      )}
      <AddCohortModal
        isOpen={isAddFormOpen}
        onClose={handleCloseAddForm}
        onDone={handleAddCohort}
        // You can implement the form submission inside this modal
      />
      <UpdateCohortModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        cohortData={selectedCohort}
        onUpdate={() => {
          tableState.setData((prev) => [...prev]); // Refresh data
        }}
      />
    </div>
  );
};

export default Cohorts;
