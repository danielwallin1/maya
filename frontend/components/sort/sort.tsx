import styles from './sort.module.css'
import { _Products } from "../../interfaces";

interface Props {
  types: Array<string>,
}

const Sort = ({ types }:Props) => (
    <div className={styles.sort}>
      <div className={styles["settings"]}>
        <p className={styles["product-title"]}>Featured products</p>
        <div className={styles["sort-wrapper"]}>
          <p className={styles.sort}>Sort</p>
          {types.map(type => (
              <p key={type} className={styles["sort-type"]}>{type}</p>
            )
          )}
        </div>
      </div>
    </div>
);

export default Sort;