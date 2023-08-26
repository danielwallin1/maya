import styles from './sort.module.css'

const Sort: React.FC = () => {
  return (
    <div className={styles.sort}>
      <div className={styles["settings"]}>
        <p className={styles["product-title"]}>Featured products</p>
        <div className={styles["sort-wrapper"]}>
          <p className={styles.sort}>Sort</p>
          <p className={styles["sort-type"]}>Recycled polyamide</p>
          <p className={styles["sort-type"]}>New</p>
        </div>
      </div>
    </div>
  )
}

export default Sort;