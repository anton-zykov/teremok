import { type JSX, type ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Card = ({
  children,
  onClick
}: CardProps): JSX.Element => {

  return (
    <div
      className={styles.card}
      onClick={onClick}
    >{children}</div>
  );
};
