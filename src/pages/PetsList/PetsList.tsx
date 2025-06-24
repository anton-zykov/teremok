import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { petsRepository } from '@/domains';
import type { species } from '@/types';

type PetsListProps = {
  species: species | 'all';
};

export const PetsList = ({ species }: PetsListProps) => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const navigate = useNavigate();

  const pets = species === 'all' ? petsRepository.pets : petsRepository.getSpecies(species);
  const slides = pets.map((pet) => (
    <Carousel.Slide key={pet.id} onClick={() => navigate(`/${pet.id}`)}>
      <img src={pet.mainPhoto} alt={pet.name} height={'300px'} />
      <p>{pet.name}, {pet.age} years</p>
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
