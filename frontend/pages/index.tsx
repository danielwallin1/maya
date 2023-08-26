import groq from 'groq';
import client from '../client';
import Home from './home/home';

interface InitialProps {
  products: Array<object>,
  hero: Array<object>,
  preamble: Array<object>
}

const Index:React.FC<InitialProps> = ({ products, hero, preamble }) => {
    return (
      <div>
        <Home
          products={products}
          hero={hero}
          preamble={preamble} />
      </div>
    )
}

export async function getStaticProps() {
  const products = await client.fetch(groq`
    *[_type == "product"]
  `)
  const hero = await client.fetch(groq`
    *[_type == "hero"][0]
  `)
  const preamble = await client.fetch(groq`
    *[_type == "preamble"][0]
  `)
  return {
    props: {
      products,
      hero,
      preamble
    }
  }
}

export default Index;