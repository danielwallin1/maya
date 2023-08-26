import styles from './footer.module.css'

const Footer: React.FC = ({}) => {
  
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.brand}>Maya</p>
        <nav className={styles["footer-navigation"]}>
          <div className={styles["nav-item"]}>Man</div>
          <div className={styles["nav-item"]}>Woman</div>
          <div className={styles["nav-item"]}>Products</div>
          <div className={styles["nav-item"]}>About us</div>
          <div className={styles["nav-item"]}>Blog</div>
        </nav>
      </div>
    </div>
  )
  
};

export default Footer;