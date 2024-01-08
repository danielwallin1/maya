import { _Hero, _Intro } from "../interfaces";
import Page from '../components/page';
import Hero from '../components/hero/hero';
import Intro from '../components/intro/intro';
import styles from './shoes.module.css';
import loadData from '../api/api';

interface Props {
    hero: _Hero,
  }

const Blog = ({ hero }:Props) => (
  <Page>
    <div className={styles["component-wrapper"]}>
      <Hero hero={hero} />
      <div className={styles["content-wrapper"]}>
        <h1>Blog</h1>
      </div>
    </div>
  </Page>
);

export async function getStaticProps() {
    const hero = await loadData(`*[_type == "hero"][0]`);
    
    return {
      props: {
        hero,
      }
    }
  }

export default Blog;