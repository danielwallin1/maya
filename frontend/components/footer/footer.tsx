import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.brand}>Runners Store</p>
        <nav className={styles["footer-nav"]}>
          <Link className={styles["nav-item"]} href="#" title={"Man"}>Men</Link>
          <Link className={styles["nav-item"]} href="#" title={"Woman"}>Women</Link>
          <Link className={styles["nav-item"]} href="#" title={"Products"}>Clothes</Link>
          <Link className={styles["nav-item"]} href="#" title={"About us"}>About us</Link>
          <Link className={styles["nav-item"]} href="#" title={"Blog"}> Blog </Link>
        </nav>
      </div>
    </div>
  );

export default Footer;