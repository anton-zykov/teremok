import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import styles from './PhotosCarousel.module.css';

type PhotosCarouselProps = {
  mainPhoto: string;
  photos: string[];
};

export const PhotosCarousel = ({ mainPhoto, photos }: PhotosCarouselProps) => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const slides = [ mainPhoto, ...photos ].map((photo) => (
    <Carousel.Slide key={photo}>
      <div className={styles.photoContainer}>
        <img src={photo} alt={photo} />
      </div>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      height={'100%'}
      plugins={[ autoplay.current ]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {slides}
    </Carousel>
  );
};
