import { _Products, _Hero } from "../interfaces";
import Page from '../components/page';
import { motion } from 'framer-motion';
import { Products } from '../components/products/products';
import styles from './shoes.module.css';
import Sort from '../components/sort/sort';
import loadData from '../api/api';

interface Props {
    products: _Products[],
    hero: _Hero,
  }

const Clothes = ({ products, hero }:Props) => (
  <Page hero={hero}>
    <div className={styles["component-wrapper"]}>
      <div className={styles["content-wrapper"]}>
        <motion.h1 initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}  style={{ marginLeft: '15px' }}>Clothes</motion.h1>
        <Sort types={['Women', 'Men']} />
        <Products type="clothes" products={products} />
      </div>
    </div>
  </Page>
);

export async function getStaticProps() {
    const products = await loadData(`*[_type == "clothes"]`);
    const hero = await loadData(`*[_type == "hero"][0]`);
    
    return {
      props: {
        products,
        hero,
      }
    }
  }

  export default Clothes;