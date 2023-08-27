import { _Products, _Hero, _Intro } from "../../interfaces";
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import Intro from '../../components/intro/intro';
import Sort from '../../components/sort/sort';
import Products from '../../components/products/products';
import Footer from '../../components/footer/footer';
import styles from './home.module.css';

interface Props {
  products: _Products[],
  hero: _Hero,
  intro: _Intro
}

const Home = ({ hero, intro, products }:Props) => (
  <div className={styles["component-wrapper"]}>
    <Header />
    <Hero hero={hero} />
    <div className={styles["content-wrapper"]}>
      <Intro intro={intro} />
      <Sort />
      <Products products={products} />
    </div>
    <Footer />
  </div>
);

export default Home;