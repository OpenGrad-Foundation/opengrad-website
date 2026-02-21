import Modal from "../../../../../Components/modal";
import styles from "../../AdminDashboard.module.css";
import { useState } from "react";
import { addReport, deleteReport, updateReport } from "../services/apis";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: AnnualReportType;
  onRefresh: () => void;
};

const ReportsCardModal = ({ isOpen, onClose, data, onRefresh }: Props) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", link: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateReport(editingId, {
          ...formData,
          annual_report: data.id,
        });
      } else {
        await addReport({
          ...formData,
          annual_report: data.id,
        });
      }
      setFormData({ name: "", link: "" });
      setEditingId(null);
      onRefresh(); // Refresh data after successful operation
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (report: ReportType) => {
    setEditingId(report.id);
    setFormData({ name: report.name, link: report.link });
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      try {
        await deleteReport(id);
        onRefresh(); // Refresh data after successful deletion
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.blogs}>
        <h2>{data.year}</h2>
        <img src={data.image || ""} alt="" style={{ width: "400px" }} />
        
        <div style={{ marginTop: "20px" }}>
          <h3>{editingId ? "Edit Report" : "Add New Report"}</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="link">Link:</label>
              <input
                type="text"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                {editingId ? "Update" : "Add"} Report
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({ name: "", link: "" });
                  }}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Reports List</h3>
          <div className={styles.reportsTable}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Link</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.reports?.map((report: ReportType) => (
                  <tr key={report.id}>
                    <td>{report.name}</td>
                    <td>
                      <a href={report.link} target="_blank" rel="noopener noreferrer">
                        {report.link}
                      </a>
                    </td>
                    <td>
                      <button
                        onClick={() => handleEdit(report)}
                        className={styles.editButton}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(report.id)}
                        className={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReportsCardModal;
