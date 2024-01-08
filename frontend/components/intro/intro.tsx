import { _Intro } from "../../interfaces";
import imageUrlBuilder from '@sanity/image-url';
import { motion } from 'framer-motion';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import client from '../../client';
import styles from './intro.module.css'

interface Props {
  intro: _Intro
}
interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string | ImageUrlBuilder;
}

export const Intro = ({ intro }:Props) => {
  function urlFor(source:ImageProps) {
    return imageUrlBuilder(client).image(source)
  }
  
  return (
    <motion.div>
    <div className={styles.content}>
      <p className={styles.heading}>{intro.heading}</p>
      <div className={styles.wrapper}>
        <p className={styles.description}>{intro.description}</p>
        <p className={styles.mission}>{intro.mission}</p>
      </div>
    </div>
    <img
        className={styles["intro-image"]}
        loading="lazy"
        src={
          urlFor(intro.image)
          .fit('max')
          .auto('format')
          .url()
        }
      />
    </motion.div>
  )
}