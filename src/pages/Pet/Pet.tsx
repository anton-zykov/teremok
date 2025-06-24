import { Navigate, useParams } from 'react-router-dom';
import { petsRepository } from '@/domains';
import styles from './Pet.module.css';

export const Pet = () => {
  const params = useParams();
  const id = params.id;
  const pet = petsRepository.getPet(Number(id));
  if (!pet) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className={styles.container}>
      <img src={pet.mainPhoto} alt={pet.name} style={{ width: '90%' }} />
      <div className={styles.details}>
        <h3>{pet.name}</h3>
        <p>{pet.species}</p>
        <p>{pet.age}</p>
        <p>{pet.color}</p>
        <p>{pet.weight}</p>
      </div>
    </div>
  );
};
