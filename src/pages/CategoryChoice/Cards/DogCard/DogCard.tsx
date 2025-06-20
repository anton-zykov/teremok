import { Card } from '..';
import Dog from '@/assets/puppy.svg?react';

export const DogCard = () => {
  return (
    <Card
      navigateTo="/dogs"
    >
      <Dog />
      <p>Dog</p>
    </Card>
  );
};
