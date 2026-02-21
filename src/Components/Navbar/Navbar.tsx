import styles from "./Navbar.module.css";
import logo from "../../../loader.png";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";

type Props = {};

type DropdownProps = {
  title: string;
  links: { label: string; href: string }[];
};

export const Navbar = (_props: Props) => {
  const [openmenu, setopenmenu] = useState(false);

  const navContent = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/aboutus" },
    // {
    //   label: "Cohorts",
    //   dropdown: [
    //     { label: "Completed Cohorts", href: "/completedcohorts" },
    //     { label: "Running Cohorts", href: "/runningcohorts" },
    //   ],
    // },
      {
      label: "Program",
      dropdown: [
        { label: "Govt Projects", href: "/govtprojects" },
        { label: "CAT Program", href: "/catprogram" },
      ],
    },
    // {
    //   label: "Govt Projects",
    //   href: "/govtprojects",//https://jubilant-humor-287726.framer.app
    // },
    // {
    //   label: "CAT Program",
    //   href: "/catprogram",
    // },
    { label: "People", href: "/people" },
    // { label: "Advisory", href: "/ouradvisors" },
    { label: "Blogs & Reports", href: "/blogsreports" },
  
  ];



  function openMenu() {
    setopenmenu(!openmenu);
  }


  return (
    <div
      className={styles.navbarWrapper}
  
    >
      <div className={styles.navbarLeft}>
        <a href="/home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div>
          {navContent.map((item, i) => {
            if (item.dropdown) {
              return (
                <Dropdown key={i} title={item.label} links={item.dropdown} />
              );
            }

            return (
              <a href={item.href} key={i}>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: window.location.href.includes(item.href)
                      ? "#05B570"
                      : "#696969",
                  }}
                >
                  {item.label}
                </p>
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.navbarMobile}>
        <button className={styles.menuMd} onClick={openMenu}>
          <MdMenu />
        </button>
        {openmenu && (
          <div>
            <button className={styles.menuMd} onClick={openMenu}>
              <IoMdClose />
            </button>
            {navContent.map((item, i) => {
              if (item.dropdown) {
                return (
                  <Dropdown key={i} title={item.label} links={item.dropdown} />
                );
              }

              return (
                <a href={item.href} key={i}>
                  <p
                    style={{
                      color: window.location.href.includes(item.href)
                        ? "#05B570"
                        : "#696969",
                    }}
                  >
                    {item.label}
                  </p>
                </a>
              );
            })}
            <AccessButton />
          </div>
        )}
      </div>
      <AccessButton />
    </div>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({ title, links }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const isActive = links.some((link) => window.location.href.includes(link.href));

  return (
    <div
      className={styles.dropdownWrapper}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      onClick={() => setShowDropdown((prev) => !prev)} // For mobile toggle
    >
      <p
        style={{
          fontSize: "17px",
          fontWeight: 600,
          color: isActive ? "#05B570" : "#696969",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
        }}
      >
        {title}
        <IoMdArrowDropdown
          style={{
            transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </p>
      {showDropdown && (
        <div className={styles.dropdownMenu}>
          {links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              style={{
                color: window.location.href.includes(link.href)
                  ? "#05B570"
                  : "#696969",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export const AccessButton = () => {
  return (
    <button className={styles.StudyButton}>
      <a href="https://opengrad-foundation.learnyst.com/learn" target="_blank">
        Access Courses
      </a>
    </button>
  );
};
