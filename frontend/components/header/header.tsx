import styles from './header.module.css'

const Header: React.FC = ({}) => {  
  return (
    <div className={styles.header}>
      <p className={styles.branding}>Maya</p>
      <nav className={styles["main-navigation"]}>
        <div className={styles["desktop-nav"]}>
          <div className={styles["nav-item"]}>Man</div>
          <div className={styles["nav-item"]}>Woman</div>
          <div className={styles["nav-item"]}>Products</div>
          <div className={styles["nav-item"]}>About us</div>
          <div className={styles["nav-item"]}>Blog</div>
        </div>
        <div className={styles["mobile-nav"]}>  
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>

  )
  
};

export default Header