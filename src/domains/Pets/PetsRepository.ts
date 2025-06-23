import type { pet, species } from '@/types';
import petsJson from './data.json';

interface IPetsRepository {
  pets: pet[];
  getSpecies(species: species): pet[];
}

class PetsRepository implements IPetsRepository {
  readonly #pets: pet[];

  constructor(pets: pet[]) {
    this.#pets = pets;
  }

  get pets() {
    return this.#pets;
  }

  getSpecies(species: species) {
    return this.#pets.filter((pet) => pet.species === species);
  }
}

const preparedPets = petsJson.map((pet): pet => {
  return pet.photo
    ? pet as pet
    : { ...pet, photo: `${pet.species}.svg` } as pet;
});

export const petsRepository = new PetsRepository(preparedPets);
