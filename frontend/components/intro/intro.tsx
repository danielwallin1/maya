import styles from './intro.module.css'

interface IntroProps {
  intro: {
    title: string,
    description: string,
    mission: string
  }
}

const Intro = ({ intro }:IntroProps) => (
  <div className={styles.content}>
  <p className={styles.heading}>{intro.title}</p>
  <div className={styles.wrapper}>
    <p className={styles.description}>{intro.description}</p>
    <p className={styles.mission}>{intro.mission}</p>
  </div>
  </div>
);

export default Intro;