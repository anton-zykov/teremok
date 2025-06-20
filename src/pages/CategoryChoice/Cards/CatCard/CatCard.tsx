import { Card } from '..';
import Cat from '@/assets/kitten.svg?react';

export const CatCard = () => {
  return (
    <Card
      navigateTo="/cats"
    >
      <Cat />
      <p>Cat</p>
    </Card>
  );
};
