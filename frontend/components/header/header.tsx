import Link from 'next/link'
import styles from './header.module.css'

const Header = () => ( 
    <div className={styles.header}>
      <p className={styles.branding}>Maya</p>
      <nav className={styles["main-nav"]}>
        <div className={styles["desktop-nav"]}>
          <Link className={styles["nav-item"]} href="#" title={"Man"}>Man</Link>
          <Link className={styles["nav-item"]} href="#" title={"Woman"}>Woman</Link>
          <Link className={styles["nav-item"]} href="#" title={"Products"}>Products</Link>
          <Link className={styles["nav-item"]} href="#" title={"About us"}>About us</Link>
          <Link className={styles["nav-item"]} href="#" title={"Blog"}> Blog </Link>
        </div>
        <div className={styles["mobile-nav"]}>  
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );

export default Header