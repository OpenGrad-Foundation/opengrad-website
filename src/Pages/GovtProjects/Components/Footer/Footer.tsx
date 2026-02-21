import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          OpenGrad
        </div>
        
        <div className={styles.copyright}>
          © {new Date().getFullYear()} OpenGrad Foundation. All rights reserved.
        </div>

        <div className={styles.links}>
          <a href="#" className={styles.link}>Privacy Policy</a>
          <a href="#" className={styles.link}>Terms of Service</a>
          <a href="#" className={styles.link}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
