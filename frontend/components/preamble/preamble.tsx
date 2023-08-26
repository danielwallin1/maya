import styles from './preamble.module.css'

interface PreambleProps {
  preamble: {
    title: string,
    description: string,
    mission: string
  }
}

const Preamble = ({ preamble }:PreambleProps) => {
    const { title, description, mission } = preamble;

    return (
     <div className={styles.content}>
      <p className={styles.heading}>{title}</p>
      <div className={styles.wrapper}>
        <p className={styles.description}>{description}</p>
        <p className={styles.mission}>{mission}</p>
      </div>
     </div>
    )
}

export default Preamble;