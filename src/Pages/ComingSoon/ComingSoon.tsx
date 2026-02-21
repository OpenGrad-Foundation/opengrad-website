import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from './ComingSoon.module.css'

type Props = {};

export const ComingSoon = (_props: Props) => {
  return (
    <div className={styles.comingsoonWrapper}>
      <Navbar />
      <div></div>
      <h1>Coming Soon</h1>
      <Footer />
    </div>
  );
};
