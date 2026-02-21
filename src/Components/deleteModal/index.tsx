import Modal from "../modal";
import styles from './index.module.css'
type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteModal = ({ title, isOpen, onClose, onDelete }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.Wrapper}>
        {" "}
        <h1>Delete</h1>
        <h3>{title}</h3>
        <p>Are you sure you want to delete this?</p>
        <div>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onDelete}>Confirm</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
