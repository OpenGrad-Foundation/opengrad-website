import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <a href="/" className={styles.logo}>
              Opengrad®
            </a>
          </div>

    
        </div>
      </div>
    </header>
  );
}
