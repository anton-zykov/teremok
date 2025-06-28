import { useNavigate } from 'react-router-dom';
import { Card } from '..';
import Dog from '@/assets/puppy.svg?react';

export const DogCard = () => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate('/dogs')}>
      <Dog />
      <p>Dog</p>
    </Card>
  );
};
