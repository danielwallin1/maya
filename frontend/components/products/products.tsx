"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Link from 'next/link'
import { useRef } from 'react';
import client from '../../client';
import { motion, useAnimate } from 'framer-motion';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { _Products } from "../../interfaces";
import styles from './products.module.css'

interface Props {
  products: _Products[],
  type: string,
}

interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string | ImageUrlBuilder;
}

export const Products = ({ products, type }:Props) => {
  const productsShown = 6;
  const [loadMore, setLoadMore] = useState(productsShown);
  const showMoreProducts = () => setLoadMore(loadMore + productsShown);
  const productRef = useRef();

  const [scope, animate] = useAnimate();

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
      x: '-100vw'
    }
  }

  const sequence = async(target:any) =>{
    console.log('fooo', scope.current)
      await animate([
          [target, { scale: 1.1 }],
          [target, { scale: 1 }],
      ])
  }

  function urlFor(source:ImageProps) {
    return imageUrlBuilder(client).image(source)
  }

  const priceStyle = type === 'shoes' ? { display: 'block'} : { display: 'block'};
  const wrapperStyle = type === 'shoes' ? { marginBottom: '-30px'} : { marginBottom: '20px' };

  return (
    <div>
      <ul className={styles.list}>
        {products.length > 0 && products.slice(0, loadMore).map(
          (product:any, i) => {

            const labelClass = product.label == "TRAINING" || product.label == "women"
              ? "label-recycled" : "label-new";

            return (
              <motion.li
                ref={scope}
                variants={animations}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: .5, delay: 1 }}
                onMouseEnter={event => sequence(event.currentTarget)}
                className={styles.item}
                key={i}>
                <Link
                  key={product._id}
                  className={styles["nav-item"]}
                  href={`/product/${product.category}/${product._id}`}
                  title={"Woman"}>
                  <div style={wrapperStyle} className={styles["image-wrapper"]}>
                    <div className={styles[labelClass]}>{product.label}</div>
                    <img
                      className={styles["product-image"]}
                      loading="lazy"
                      src={
                        urlFor(product.image)
                        .width(320)
                        .height(240)
                        .fit('max')
                        .auto('format')
                        .url()
                      }
                    />
                  </div>
                  <div style={priceStyle} className={styles["price-wrapper"]}>
                    <div className={styles["title-wrapper"]}>
                      <p className={styles.title}>{product.name}</p>
                      <p className={styles.description}>{product.text}</p>
                    </div>
                    <p className={styles.price}>{product.price}</p>
                  </div>
                  </Link>
              </motion.li>
            )
            })}
      </ul>
      {
        loadMore < products.length &&
        <button
          type="button"
          className={styles["show-more-btn"]}
          onClick={showMoreProducts}>
          Show more
        </button>
      }
    </div>
  )
}