export type species = 'cat' | 'dog';
export type category = 'all' | 'cats' | 'dogs';

export interface pet {
  id: number;
  species: species;
  name: string;
  age: number;
  color: string;
  weight: number;
  mainPhoto: string;
  photos: string[];
}
