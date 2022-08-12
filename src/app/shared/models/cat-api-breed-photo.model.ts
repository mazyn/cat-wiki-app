import { CatApiBreed } from './cat-api-breed.model';

export type CatApiBreedPhoto = CatApiBreed & {
  photos: string[];
};
