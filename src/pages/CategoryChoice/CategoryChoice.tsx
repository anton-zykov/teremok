import { CatCard, DogCard, DonateCard } from './Cards';
import styles from './CategoryChoice.module.css';

export const CategoryChoice = () => {
  return (
    <div className={styles.container}>
      <h2>I want to adopt a...</h2>
      <div className={styles.cards}>
        <CatCard />
        <DogCard />
        <DonateCard />
      </div>
    </div>
  );
};
