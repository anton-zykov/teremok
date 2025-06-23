export type species = 'cat' | 'dog';

export interface pet {
  id: number;
  species: species;
  name: string;
  age: number;
  color: string;
  weight: number;
  photo: string;
}
