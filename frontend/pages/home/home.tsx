import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import Preamble from '../../components/preamble/preamble';
import Sort from '../../components/sort/sort';
import Products from '../../components/products/products';
import Footer from '../../components/footer/footer';
import styles from './home.module.css';

interface ComponentProps {
  products: Array<object>,
  hero: {
    mainImage: object,
    tag: string,
    description: string,
    title: string
  },
  preamble: {
    title: string,
    description: string,
    mission: string
  },
}

const Home: React.FC<ComponentProps> = ({ hero, preamble, products }) => {
  return (
    <div className={styles["component-wrapper"]}>
      <Header />
      <Hero hero={hero} />
      <div className={styles["content-wrapper"]}>
        <Preamble preamble={preamble} />
        <Sort />
        <Products products={products} />
      </div>
      <Footer />
    </div>
  )
}

export default Home;