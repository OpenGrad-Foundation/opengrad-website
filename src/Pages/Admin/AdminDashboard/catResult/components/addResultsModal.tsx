import { useState } from "react";
import Modal from "../../../../../Components/modal";
import styles from "../index.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onDone: (newResult: CatResultsType) => Promise<void>;
};

const AddResultsModal = ({ isOpen, onClose, onDone }: Props) => {
  const [year, setYear] = useState("");
  const [iim, setIim] = useState("");
  const [selections, setSelections] = useState(0);

  const handleAdd = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onDone({ year, iim, selections });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.ModalContent}>
        <h2>Add New Selection</h2>
        <form onSubmit={handleAdd}>
          <div className={styles.FormGroup}>
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="iim">IIM</label>
            <input
              type="text"
              id="iim"
              value={iim}
              onChange={(e) => setIim(e.target.value)}
              required
            />
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="selections">Selections</label>
            <input
              type="number"
              id="selections"
              value={selections}
              onChange={(e) => setSelections(parseInt(e.target.value))}
              required
            />
          </div>
          <div className={styles.FormActions}>
            <button type="submit">Add</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddResultsModal;
