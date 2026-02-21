import Modal from "../../../../../Components/modal";
import styles from "../../AdminDashboard.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: TestimonialType;
};

const TestimonialCardModal = ({ isOpen, onClose, data }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.IndividualSlider}>
        <p>{data.description}</p>{" "}
        <div className={styles.TextContent}>
          <div>
            <h3>{data.name}</h3>
            <p>{data.designation}</p>
          </div>

          <img src={data.image!} alt="" />
        </div>
      </div>
    </Modal>
  );
};

export default TestimonialCardModal;
