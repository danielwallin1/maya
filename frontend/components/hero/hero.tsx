import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import { _Hero } from "../../interfaces";
import styles from './hero.module.css'

interface Props {
  hero: _Hero
}

const Hero = ({ hero }:Props) => {  
  function urlFor (source:object) {
    return imageUrlBuilder(client).image(source)
  }

  const image = urlFor(hero?.image)
    .width(690)
    .height(400)
    .fit('max')
    .auto('format');

  return (
    <>
    {hero &&
    <div className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.tagline}>{hero.tagline}</p>
          <h1 className={styles.heading}>{hero.heading}</h1>
          <p className={styles.text}>{hero.text}</p>
        </div>
      </div>
    </div>
    }
  </>
  )
}

export default Hero;