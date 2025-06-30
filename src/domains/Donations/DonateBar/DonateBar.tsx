import { useDonationsModal } from '@/hooks';
import styles from './DonateBar.module.css';

export const DonateBar = () => {
  const { open } = useDonationsModal();

  return (
    <div
      onClick={open}
      className={styles.donateBar}
    >
      Donate
    </div>
  );
};
