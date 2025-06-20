import { Card } from '..';
import PupKit from '@/assets/pupkit.svg?react';

export const UnsureCard = () => {
  return (
    <Card
      navigateTo="/all"
    >
      <PupKit />
      <p>See all!</p>
    </Card>
  );
};
