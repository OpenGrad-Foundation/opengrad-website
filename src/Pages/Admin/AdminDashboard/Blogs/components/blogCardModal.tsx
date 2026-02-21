import Modal from "../../../../../Components/modal";
import { IndividualBlogContainer } from "../../../../OurBlog/OurBlog";
import styles from '../../AdminDashboard.module.css'
type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: IndividualBlogContainerProps;
};

const BlogCardModal = ({ isOpen, onClose, data }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.blogs}>
        <IndividualBlogContainer
          id={data.id}
          image={data.image}
          title={data.title}
          author={data.author}
          description={data.description}
          dateofblog={data.dateofblog}
          category={data.category}
          editable={false}
        />
      </div>
    </Modal>
  );
};

export default BlogCardModal;
