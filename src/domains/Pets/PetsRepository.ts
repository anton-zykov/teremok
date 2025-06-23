import type { pet, species } from '@/types';
import pets from './data.json';

interface IPetsRepository {
  pets: pet[];
  getSpecies(species: species): pet[];
}

export class PetsRepository implements IPetsRepository {
  readonly #pets: pet[];

  constructor() {
    this.#pets = pets.map((pet): pet => {
      return pet.photo
        ? pet as pet
        : { ...pet, photo: `${pet.species}.svg` } as pet;
    });
  }

  get pets() {
    return this.#pets;
  }

  getSpecies(species: species) {
    return this.#pets.filter((pet) => pet.species === species);
  }
}

export const petsRepository = new PetsRepository();
