import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import styles from "./index.module.css";
import { Footer } from "../Footer/Footer";

type Props = {};

const Layout = (_props: Props) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
