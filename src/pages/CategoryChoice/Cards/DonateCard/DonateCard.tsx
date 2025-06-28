import { Card } from '..';
import { useDonationsModal } from '@/hooks';
import PupKit from '@/assets/pupkit.svg?react';

export const DonateCard = () => {
  const { open } = useDonationsModal();

  return (
    <Card onClick={open}>
      <PupKit />
      <p>Donate</p>
    </Card>
  );
};
