import { useState, useEffect } from "react";
import styles from "../AdminDashboard.module.css";
import useTableState from "../../../../Components/table/hooks/useTableState";
import Table from "../../../../Components/table";
import {
  MdDelete,
  MdEdit,
  // MdEdit
} from "react-icons/md";
import DeleteModal from "../../../../Components/deleteModal";
import { Form } from "./components/form";
import {
  getReportsTableData,
  handleAnnualReportTableDelete,
} from "./services/apis";
import { ReportTableColumns } from "./services/tableColumn";
import ReportsCardModal from "./components/formModal";

export const Reports = () => {
  const [showReportCard, setShowReportCard] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const tableState = useTableState<AnnualReportType>();
  const [reportCardData, setReportCardData] = useState<AnnualReportType>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    tableState.handleFetchData(() =>
      getReportsTableData(
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
    setReportCardData(undefined); // Reset the data when adding new
    setShowAddForm(!showAddForm);
  };

  const handleClick = (item: AnnualReportType) => {
    setReportCardData(item);
    setShowReportCard(!showReportCard);
  };

  const handleEditClick = (item: AnnualReportType) => {
    setReportCardData(item);
    setShowAddForm(true);
  };

  const handleDeleteClick = (item: AnnualReportType) => {
    setReportCardData(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (reportCardData && reportCardData.id) {
      handleAnnualReportTableDelete(reportCardData.id, reportCardData.image!);
      setIsDeleteModalOpen(false);
      window.location.reload();
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.AddButton} onClick={handleAddButtonClick}>
        Add
      </button>

      <Table<AnnualReportType>
        keyColumn={"id"}
        columns={ReportTableColumns}
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
            title: "Delete Blog",
            color: "red",
          },
        ]}
      />
      {showAddForm && (
        <Form
          showAddForm={showAddForm}
          close={setShowAddForm}
          initialData={reportCardData}
        />
      )}
      {showReportCard && reportCardData && (
        <ReportsCardModal
          isOpen={showReportCard}
          onClose={() => setShowReportCard(false)}
          data={reportCardData}
          onRefresh={async () => {
            const { data } = await getReportsTableData(
              tableState.rowsPerPage,
              tableState.currentPage,
              tableState.searchTerm,
              tableState.sortColumn
            );
            // Find and update the current report card data
            const updatedReport = data.find(
              (report) => report.id === reportCardData.id
            );
            if (updatedReport) {
              setReportCardData(updatedReport);
            }
            // Refresh the table data
            tableState.handleFetchData(() =>
              getReportsTableData(
                tableState.rowsPerPage,
                tableState.currentPage,
                tableState.searchTerm,
                tableState.sortColumn
              )
            );
          }}
        />
      )}
      {reportCardData?.id && (
        <DeleteModal
          title={reportCardData?.year!}
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};
