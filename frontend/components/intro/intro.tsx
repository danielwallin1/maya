import { _Intro } from "../../interfaces";
import styles from './intro.module.css'

interface Props {
  intro: _Intro
}

const Intro = ({ intro }:Props) => (
  <div className={styles.content}>
    <p className={styles.heading}>{intro.heading}</p>
    <div className={styles.wrapper}>
      <p className={styles.description}>{intro.description}</p>
      <p className={styles.mission}>{intro.mission}</p>
    </div>
  </div>
)

export default Intro;