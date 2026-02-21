import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "./logo.png";
import styles from "./index.module.css";
import { MdLogout } from "react-icons/md";
import { supabase } from "../../../App";
import toast from "react-hot-toast";
import { ImBlog } from "react-icons/im";
import { FaNoteSticky } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
import { MdAppRegistration } from "react-icons/md";
import { FaLandmark, FaTripadvisor } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";


type Props = {};

export const Dashboard = (_props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path: string) => {
    navigate(`${path}`);
  };

  const navData = [
    {
      title: "Blog",
      url: "blogs",
      icon: <ImBlog />,
    },
    {
      title: "H - Testimonial",
      url: "htestimonial",
      icon: <FaNoteSticky />,
    },
    {
      title: "J - Testimonial",
      url: "jtestimonial",
      icon: <FaNoteSticky />,
    },
    {
      title: "Volunteers",
      url: "volunteerdirectory",
      icon: <MdVolunteerActivism />,
    },
    {
      title: "Register Data",
      url: "registerdata",
      icon: <MdAppRegistration />,
    },
    {
      title: "CAT Result",
      url: "catresult",
      icon: <FaLandmark />,
    },
    {
      title: "Cohorts",
      url: "cohorts",
      icon: <FaBook />,
    },
    {
      title: "Reports",
      url: "reports",
      icon: <TbReportSearch />,
    },
    {
      title: "Advisors",
      url: "ouradvisors",
      icon: <FaTripadvisor />,
    },
  ];

  const isActiveLink = (path: string) => location.pathname.includes(path);

  return (
    <div className={styles.LayoutWrapper}>
      <div className={styles.Wrapper}>
        <img className={styles.MainLogo} src={Logo} alt="Logo" />
        <div className={styles.NavLinks}>
          {navData.map((content, index) => {
            const path = content.url.toLowerCase().replace(/\s+/g, "");

            return (
              <button
                key={index}
                onClick={() => navigateTo(path)}
                className={isActiveLink(path) ? styles.activeLink : styles.link}
              >
          
                <div className={styles.iconWrapper}>{content.icon}</div>
                <p className={styles.iconWrapper}> {content.title}</p>
                <p className={styles.iconWrappers}>
                  {" "}
                  {content.title.slice(0, 4)}
                </p>
              </button>
            );
          })}
        </div>

        <button
          onClick={async () => {
            let { error } = await supabase.auth.signOut();
            if (error) {
              toast.error(error.message);
              throw error;
            }
            navigate("/admin");
          }}
          className={styles.LogoutBtn}
        >
          <MdLogout />
          <p>Log Out</p>
        </button>
      </div>

      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  );
};
