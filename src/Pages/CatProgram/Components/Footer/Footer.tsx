import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {/* Logo Shapes */}
          <div className={styles.logo}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
          </div>

          {/* Navigation Links */}
          <div className={styles.nav}>
            <div className={styles.section}>
              <h3>Program</h3>
              <ul>
                <li><a href="#" className={styles.link}>About</a></li>
                <li><a href="#" className={styles.link}>Features</a></li>
                <li><a href="#" className={styles.link}>Results</a></li>
              </ul>
            </div>
            
            <div className={styles.section}>
              <h3>Community</h3>
              <ul>
                <li><a href="#" className={styles.link}>Mentors</a></li>
                <li><a href="#" className={styles.link}>Join as Mentor</a></li>
                <li><a href="#" className={styles.link}>Peer Groups</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
