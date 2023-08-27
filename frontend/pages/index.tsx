import { _Products, _Hero, _Intro } from "../interfaces";
import groq from 'groq';
import client from '../client';
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
  const products = await client.fetch(groq`
    *[_type == "product"]
  `);
  const hero = await client.fetch(groq`
    *[_type == "hero"][0]
  `)
  const intro = await client.fetch(groq`
    *[_type == "preamble"][0]
  `)

  return {
    props: {
      products,
      hero,
      intro
    }
  }
}

export default Index;