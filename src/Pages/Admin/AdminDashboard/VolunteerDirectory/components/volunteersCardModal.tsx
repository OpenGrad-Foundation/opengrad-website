import Modal from '../../../../../Components/modal';
import styles from "../../AdminDashboard.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: VolunteerType;
};

const VolunteersCardModal = ({ isOpen, onClose, data }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.IndividualSlider}>
        <div className={styles.TextContent}>
          <div>
            <h3>{data.name}</h3>
            <p>{data.description}</p>{" "}
          </div>

          <img src={data.image!} alt="" />
        </div>
      </div>
    </Modal>
  );
};

export default VolunteersCardModal