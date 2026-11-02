import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import { CONTACT_EMAIL } from "../siteLinks";

// The revamp design shows only the brand + registration row; the link row keeps
// pages that left the main nav (About Us, People, legal, 80G tax forms) reachable.
const links = [
  { label: "About Us", href: "/aboutus" },
  { label: "People", href: "/people" },
  { label: "Blogs & Reports", href: "/blogsreports" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/termsofuse" },
  { label: "Tax Forms", href: "/taxforms" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/opengradfoundation", Icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@OpenGradFoundation", Icon: FaYoutube },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/opengrad-foundation/", Icon: FaLinkedinIn },
];

export const Footer = () => (
  <footer className={styles.footer} data-section="footer">
    <div className={styles.main}>
      <div>
        <div className={styles.brand}>OpenGrad</div>
        <div className={styles.tagline}>Educate. Elevate. Empower.</div>
      </div>
      <div className={styles.reg}>
        Section 8 · 12A &amp; 80G · Incubated by NSRCEL IIM Bangalore and The/Nudge Institute
        <div className={styles.contact}>
          <Link to="/contact">Contact Us</Link> · {CONTACT_EMAIL}
        </div>
      </div>
    </div>
    <div className={styles.sub}>
      <nav aria-label="Footer" className={styles.links}>
        {links.map((l) => (
          <Link key={l.href} to={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className={styles.socials}>
        {socials.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
