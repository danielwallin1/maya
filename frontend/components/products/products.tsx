import { useState } from "react";
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { _Products } from "../../interfaces";
import styles from './products.module.css'

interface Props {
  products: _Products[]
}

interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string | ImageUrlBuilder;
}

const Products = ({ products }:Props) => {
  const productsShown = 6;
  const [loadMore, setLoadMore] = useState(productsShown);
  const showMoreProducts = () => setLoadMore(loadMore + productsShown);

  function urlFor(source:ImageProps) {
    return imageUrlBuilder(client).image(source)
  }

  return (
    <div>
      <ul className={styles.list}>
        {products.length > 0 && products.slice(0, loadMore).map(
          (product:any) => {

            const labelClass = product.label == "RECYCLED POLYAMIDE"
              ? "label-recycled" : "label-new";

            return (
              <li className={styles.item} key={product._id}>
                <div className={styles["image-wrapper"]}>
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
                <div className={styles["price-wrapper"]}>
                  <div className={styles["title-wrapper"]}>
                    <p className={styles.title}>{product.name}</p>
                    <p className={styles.description}>{product.text}</p>
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