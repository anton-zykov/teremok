import type { pet, species } from '@/types';
import petsJson from './data.json';

interface IPetsRepository {
  pets: pet[];
  getSpecies(species: species): pet[];
  getPet(id: number): pet | undefined;
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

  getPet(id: number) {
    return this.#pets.find((pet) => pet.id === id);
  }
}

function constructImagePaths(pets: pet[]): pet[] {
  return pets.map((pet) => ({
    ...pet,
    mainPhoto: `/${pet.id}/${pet.mainPhoto}`,
    photos: pet.photos.map((photo) => `/${pet.id}/${photo}`),
  }));
}

export const petsRepository = new PetsRepository(constructImagePaths(petsJson as pet[]));
