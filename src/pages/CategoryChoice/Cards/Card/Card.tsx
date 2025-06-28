import { type JSX, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

type CardProps = {
  children: ReactNode;
  navigateTo?: `/${string}`;
};

export const Card = ({
  children,
  navigateTo,
}: CardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(navigateTo || '/')}
    >{children}</div>
  );
};
