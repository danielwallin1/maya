import { _Products, _Hero, _Intro } from '../interfaces';
import loadData from '../api/api';
import Home from './home/home';

interface Props {
  products: _Products[],
  hero: _Hero,
  intro: _Intro
}

const Index = ({ products, hero, intro }:Props) => (
  <div>
    <Home
      products={products}
      hero={hero}
      intro={intro} />
  </div>
);

export async function getStaticProps() {
  const products = await loadData(`*[_type == "product"]`);
  const hero = await loadData(`*[_type == "hero"][0]`);
  const intro = await loadData(`*[_type == "intro"][0]`);

  return {
    props: {
      products,
      hero,
      intro
    }
  }
}

export default Index;