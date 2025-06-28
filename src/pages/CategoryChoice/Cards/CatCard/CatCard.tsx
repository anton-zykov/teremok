import { useNavigate } from 'react-router-dom';
import { Card } from '..';
import Cat from '@/assets/kitten.svg?react';

export const CatCard = () => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate('/cats')}>
      <Cat />
      <p>Cat</p>
    </Card>
  );
};
