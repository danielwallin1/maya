import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import styles from './products.module.css'

interface ProductProps {
  products: Array<object>
}

const Products: React.FC<ProductProps> = ({ products }) => {

  function urlFor (source:object) {
    return imageUrlBuilder(client).image(source)
  }

  return (
    <div>
      <ul className={styles.list}>
        {products.length > 0 && products.map(
          (product:any) => {

            const labelClass = product.label == "Recycled polyamide"
              ? "label-recycled" : "label-new";

            return product.slug && (
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
    </div>
  )
}

export default Products;