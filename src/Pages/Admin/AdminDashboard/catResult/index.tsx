import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import Table from "../../../../Components/table";
import useTableState from "../../../../Components/table/hooks/useTableState";
import styles from "./index.module.css";
import DeleteModal from "../../../../Components/deleteModal";
import { supabase } from "../../../../App";
import { getCatTableData } from "./services/api";
import { CatTableColumns } from "./services/tableColumn";
import AddResultsModal from "./components/addResultsModal";
import toast from "react-hot-toast";

export const CatResult = () => {
  const tableState = useTableState<CatResultsType>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CatResultsType>();

  useEffect(() => {
    tableState.handleFetchData(() =>
      getCatTableData(
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

  const handleDeleteClick = (item: any) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (selectedItem) {
      const { error } = await supabase
        .from("cat_selections")
        .delete()
        .eq("iim", selectedItem.iim)
        .eq("year", selectedItem.year)
        .eq("selections", selectedItem.selections);

      if (error) {
        console.error("Error deleting data:", error);
        return;
      }
      setIsDeleteModalOpen(false);
      setSelectedItem(undefined);
      window.location.reload();
    }
  };

  const handleAddButtonClick = () => {
    setIsAddFormOpen(true);
  };

  const handleAddResult = async (newResult: CatResultsType) => {
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

  return (
    <div className={styles.Wrapper}>
      <button onClick={handleAddButtonClick}>Add</button>
      <Table<any>
        keyColumn={"id"}
        columns={CatTableColumns}
        tableState={tableState}
        actions={[
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
      {isAddFormOpen && (
        <AddResultsModal
          isOpen={isAddFormOpen}
          onClose={() => setIsAddFormOpen(false)}
          onDone={handleAddResult}
        />
      )}
    </div>
  );
};

export default CatResult;
