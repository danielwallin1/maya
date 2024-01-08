import { _Products, _Hero, _Intro } from "../interfaces";
import Page from '../components/page';
import Sort from '../components/sort/sort';
import { motion } from 'framer-motion';
import { Products } from '../components/products/products';
import styles from './shoes.module.css';
import loadData from '../api/api';

interface Props {
  products: _Products[],
  hero: _Hero,
}

const Shoes = ({ products, hero }:Props) => (
  <Page hero={hero}>
    <div className={styles["component-wrapper"]}>
      <div className={styles["content-wrapper"]}>
      <motion.h1 initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}  style={{ marginLeft: '15px' }}>Shoes</motion.h1>
        <Sort types={['Recycled Polyamide', 'New']} />
        <Products type="shoes" products={products} />
      </div>
    </div>
  </Page>
);

export async function getStaticProps() {
    const products = await loadData(`*[_type == "product"]`);
    const hero = await loadData(`*[_type == "hero"][0]`);
    
    return {
      props: {
        products,
        hero,
      }
    }
  }

export default Shoes;