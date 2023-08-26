import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.brand}>Maya</p>
        <nav className={styles["footer-nav"]}>
          <Link className={styles["nav-item"]} href="#" title={"Man"}>Man</Link>
          <Link className={styles["nav-item"]} href="#" title={"Woman"}>Woman</Link>
          <Link className={styles["nav-item"]} href="#" title={"Products"}>Products</Link>
          <Link className={styles["nav-item"]} href="#" title={"About us"}>About us</Link>
          <Link className={styles["nav-item"]} href="#" title={"Blog"}> Blog </Link>
        </nav>
      </div>
    </div>
  );

export default Footer;