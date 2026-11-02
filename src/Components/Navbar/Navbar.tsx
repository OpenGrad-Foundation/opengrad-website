import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { Link, ScrollRestoration, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { DONATE_URL, HUB_URL, STATE_PAGES } from "../siteLinks";

type NavLink = { label: string; href: string; external?: boolean };
type NavItem = NavLink & { dropdown?: NavLink[] };

const navContent: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Our Model", href: "/home#our-model" },
  {
    label: "Where We Work",
    href: "/home#where-we-work",
    dropdown: [...STATE_PAGES, { label: "CAT MBA Program", href: "/catprogram" }],
  },
  {
    label: "Impact",
    href: "/blogsreports",
    dropdown: [
      { label: "Blogs & Reports", href: "/blogsreports" },
      { label: "Newsletters", href: "/newletters&reports" },
    ],
  },
  { label: "Get Involved", href: "/home#get-involved" },
  { label: "Contact Us", href: "/contact" },
];

const pathOf = (href: string) => href.split("#")[0];

const ItemLink = ({ link, className }: { link: NavLink; className?: string }) =>
  link.external ? (
    <a href={link.href} target="_blank" rel="noreferrer" className={className}>
      {link.label}
    </a>
  ) : (
    <Link to={link.href} className={className}>
      {link.label}
    </Link>
  );

export const Navbar = () => {
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname, hash]);

  // Home is active only on the bare home page, not when a /home#section item is.
  const isActive = (item: NavItem) => {
    const here = pathname + hash;
    if (item.dropdown) return item.dropdown.some((d) => !d.external && pathOf(d.href) === pathname) || here === item.href;
    return item.href.includes("#") ? here === item.href : pathname === item.href && !hash;
  };

  return (
    <header className={styles.header} data-section="header">
      {/* Every page renders the navbar once: scroll to top on navigation, or to #hash targets. */}
      <ScrollRestoration />
      <div className={styles.inner}>
        <Link to="/home" className={styles.wordmark}>
          OpenGrad
        </Link>

        <button
          className={styles.menuButton}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <IoMdClose /> : <MdMenu />}
        </button>

        <nav aria-label="Main" className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navContent.map((item) => {
            const cls = `${styles.link} ${isActive(item) ? styles.active : ""}`;
            if (!item.dropdown) return <ItemLink key={item.label} link={item} className={cls} />;
            const open = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className={styles.dropdown}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cls}
                  aria-expanded={open}
                  onClick={() => setOpenDropdown(open ? null : item.label)}
                >
                  {item.label}
                  <IoMdArrowDropdown className={open ? styles.caretOpen : styles.caret} />
                </button>
                {open && (
                  <div className={styles.menu}>
                    {item.dropdown.map((d) => (
                      <ItemLink
                        key={d.label}
                        link={d}
                        className={!d.external && pathOf(d.href) === pathname ? styles.active : undefined}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <a href={DONATE_URL} target="_blank" rel="noreferrer" className={styles.donate}>
            Donate
          </a>
          <a href={HUB_URL} target="_blank" rel="noreferrer" className={`${styles.access} ${styles.accessMobile}`}>
            Access Courses
          </a>
        </nav>

        <a href={HUB_URL} target="_blank" rel="noreferrer" className={styles.access}>
          Access Courses
        </a>
      </div>
    </header>
  );
};
