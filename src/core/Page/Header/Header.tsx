import { DonateBar } from '@/domains/Donations';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.container}>
      <DonateBar />
    </div>
  );
};
