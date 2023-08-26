import { useState } from "react";
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import styles from './products.module.css'

interface ProductProps {
  products: Array<object>
}

interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string | ImageUrlBuilder;
}

const Products = ({ products }:ProductProps) => {
  const productsShown = 6;
  const [loadMore, setLoadMore] = useState(productsShown);
  const showMoreProducts = () => {
    setLoadMore(loadMore + productsShown);
  };

  function urlFor(source:ImageProps) {
    return imageUrlBuilder(client).image(source)
  }

  return (
    <div>
      <ul className={styles.list}>
        {products.length > 0 && products.slice(0, loadMore).map(
          (product:any) => {

            const labelClass = product.label == "Recycled polyamide"
              ? "label-recycled" : "label-new";

            return (
              <li className={styles.item} key={product._id}>
                <div className={styles["image-wrapper"]}>
                  <div className={styles[labelClass]}>{product.label}</div>
                  <img
                    className={styles["product-image"]}
                    loading="lazy"
                    src={
                      urlFor(product.mainImage)
                      .width(320)
                      .height(240)
                      .fit('max')
                      .auto('format')
                      .url()
                    }
                  />
                </div>
                <div className={styles["price-wrapper"]}>
                  <div className={styles["title-wrapper"]}>
                    <p className={styles.title}>{product.title}</p>
                    <p className={styles.description}>{product.description}</p>
                  </div>
                  <p className={styles.price}>{product.price}</p>
                </div>
              </li>
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

export default Products;