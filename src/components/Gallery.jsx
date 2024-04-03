import { useState } from 'react';
import { galleryArray } from '../gallery/GalleryArray';
import styles from './Gallery.module.css';
import { TiChevronLeft } from 'react-icons/ti';
import { TiChevronRight } from 'react-icons/ti';

const Gallery = () => {
  const [currentID, setCurrentID] = useState(0);

  const prevPicture = () => {
    setCurrentID((currentID - 1 + galleryArray.length) % galleryArray.length);
  };

  const nextPicture = () => {
    setCurrentID((currentID + 1) % galleryArray.length);
  };

  return (
    <div className={styles.gallery}>
      <div onClick={prevPicture} className={styles.icon}>
        <TiChevronLeft />
      </div>
      <div>
        <img
          src={galleryArray[currentID].image}
          alt={galleryArray[currentID].description}
        />
      </div>
      <div onClick={nextPicture} className={styles.icon}>
        <TiChevronRight />
      </div>
    </div>
  );
};

export default Gallery;
