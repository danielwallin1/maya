import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import styles from './hero.module.css'

interface HeroProps {
  hero: {
    mainImage:object,
    tag:string,
    description:string,
    title:string
  }
}

const Hero: React.FC<HeroProps> = ({ hero }) => {

  function urlFor (source:object) {
    return imageUrlBuilder(client).image(source)
  }

  const image = urlFor(hero.mainImage).width(690).height(400).fit('max').auto('format');

  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.tag}>{hero.tag}</p>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.description}>{hero.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;