import { _Hero, _Intro } from "../interfaces";
import Page from '../components/page';
import { motion } from 'framer-motion';
import { Intro } from '../components/intro/intro';
import styles from './shoes.module.css';
import loadData from '../api/api';

interface Props {
    hero: _Hero,
    intro: _Intro
  }

  const animations = {
    initial: {
      opacity: 0,
      x: 100
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: 0
    }
  }

const About = ({ intro, hero }:Props) => (
  <Page hero={hero}>
    <div className={styles["component-wrapper"]}>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 1 }}className={styles["content-wrapper"]}>
      <Intro intro={intro} />
      </motion.div>
    </div>
  </Page>
);

export async function getStaticProps() {
    const hero = await loadData(`*[_type == "hero"][0]`);
    const intro = await loadData(`*[_type == "intro"][0]`);
    
    return {
      props: {
        hero,
        intro
      }
    }
  }

export default About;