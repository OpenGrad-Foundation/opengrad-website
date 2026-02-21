import { useEffect, useState } from "react";
import Table from "../../../../Components/table";
import useTableState from "../../../../Components/table/hooks/useTableState";
import styles from "./index.module.css";
import { RegisterDataTableColumns } from "./services/tableColumns";
import { deleteRegisterItem, getRegisterTableData } from "./services/api";
import { MdDelete } from "react-icons/md";
import DeleteModal from "../../../../Components/deleteModal";

export const RegisterData = () => {
  const tableState = useTableState<IndividualRegisterDataContainerProps>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] =
    useState<IndividualRegisterDataContainerProps>();

  useEffect(() => {
    tableState.handleFetchData(() =>
      getRegisterTableData(
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

  const handleDeleteClick = (item: IndividualRegisterDataContainerProps) => {
    setDeleteItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (deleteItem && deleteItem.id) {
      deleteRegisterItem(deleteItem.id);
      setIsDeleteModalOpen(false);
    }
    window.location.reload();
  };

  return (
    <div className={styles.Wrapper}>
      <Table<IndividualRegisterDataContainerProps>
        keyColumn={"id"}
        columns={RegisterDataTableColumns}
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
      {deleteItem?.id && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          title={deleteItem.name}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};
