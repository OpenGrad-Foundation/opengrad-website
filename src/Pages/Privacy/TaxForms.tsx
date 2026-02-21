import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./index.module.css";
import { FaFilePdf } from "react-icons/fa"; // Import PDF icon from react-icons
import G from "./assets/80G.pdf";
import A from "./assets/12A.pdf";

type Props = {};

export const TaxForms = (_props: Props) => {
  return (
    <div className={styles.TaxForms}>
      <Navbar />
      <p></p>
      <div className={styles.inner}>
        <div className={styles.taxFormsContainer}>
          <h1 className={styles.heading}>Tax Forms</h1>
          <div className={styles.formsList}>
            <div className={styles.formItem}>
              <FaFilePdf className={styles.pdfIcon} />
              <p>
                <a href={G} download>
                  Download 80G
                </a>
              </p>
            </div>
            <div className={styles.formItem}>
              <FaFilePdf className={styles.pdfIcon} />
              <p>
                <a href={A} download>
                  Download 12A
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
