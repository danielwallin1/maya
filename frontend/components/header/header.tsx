import Link from 'next/link'
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from './header.module.css'

const links = [
  { href: '/shoes', label: 'Shoes' },
  { href: '/clothes', label: 'Clothes' },
  { href: '/about', label: 'About' },
]

export const Header = () => {
  const router = useRouter();

  const segment = router.query.category === 'product' ? 'shoes' : 'clothes';

  return (
    <div className={styles.header}>
     <Link key="key" href={`/${segment}`} ><span style={{ position: 'absolute', left: '20px', top: '5px', fontSize: '30px', transform: 'scale(-1, -1)' }}>&#10132;</span></Link>
      <p className={styles.branding}>Runners Store</p>
      <nav className={styles["main-nav"]}>
        <div className={styles["mobile-nav-container"]}>
          <div className={styles["mobile-nav"]}>  
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles["desktop-nav"]}>
          {links.map(link => (
              <Link 
                key={link.href}
                className={styles["nav-item"]}
                href={link.href}
                title={"Woman"}>
                {link.href === router.asPath &&
                  <motion.span
                    key={router.asPath}
                    layoutId="underline"
                    className={styles["nav-item-underline"]} />
                }
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </div>
  )
}