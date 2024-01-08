import { _Products, _Hero, _Intro } from "../../../interfaces";
import Page from '../../../components/page';
import { motion } from 'framer-motion';
import client from '../../../client';
import Hero from '../../../components/hero/hero';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import styles from '../../shoes.module.css';
import loadData from '../../../api/api';

interface Props {
  product: any;
  hero: _Hero;
}

interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string | ImageUrlBuilder;
}


const Product = ({ product, hero }:Props) => {
  function urlFor(source:ImageProps) {
    return imageUrlBuilder(client).image(source)
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
      opcity: 0,
      x: '-100vw'
    }
  }

  return (
    <Page hero={hero}>
        {product && hero && 
          <div className={styles["component-wrapper"]}>
            <Hero hero={hero} />
            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: .5, delay: 0.5 }}
              className={styles["product-wrapper"]}>
              <h1 style={{ marginLeft: '15px' }}>{product.name}</h1>
              <div>
              <motion.img
                  whileHover={{ scale: 1.1 }}
                  className={styles["product-image"]}
                  loading="lazy"
                  src={
                    urlFor(product.image)
                    .width(600)
                    .height(400)
                    .fit('max')
                    .auto('format')
                    .url()
                  }
                />
              </div>
              <p className={styles["product-text"]}>{product.text}</p>
              <p className={styles["product-price"]}>{product.price}</p>
            </motion.div>
          </div>
        }
    </Page>
  )
}

export const getStaticPaths = (async () => {
  // const product = await loadData(`*[_type == "clothes" && _id == "678cbf58-ea48-43b9-b7b5-c538c7f01ba6"][0]`);
  const product = await loadData(`*[_type == "product" && _id == "5cb03d20-6bff-4e87-ba0d-3eb84f54d5e2"][0]`);

  return {
    paths: [
      {
        params: {
          id: '1',
          category: 'clothes'
        },
      },
      {
        params: {
          id: '2',
          category: 'product'
        }
      }
    ],
    fallback: true, // false or "blocking"
  }
})

export async function getStaticProps(context:any) {
  const product = await loadData(`*[_type == "${context.params.category}" && _id == "${context.params.id}"][0]`);
  const hero = await loadData(`*[_type == "hero"][0]`);
    
  return {
    props: {
      product,
      hero,
    }
  }
}

export default Product;