import { Navigate, useParams } from 'react-router-dom';
import { petsRepository } from '@/domains';

export const Pet = () => {
  const params = useParams();
  const id = params.id;
  const pet = petsRepository.getPet(Number(id));
  if (!pet) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      {JSON.stringify(pet)}
    </div>
  );
};
